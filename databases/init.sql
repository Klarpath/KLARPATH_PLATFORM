-- Klarpath CRM Database Schema
-- Multi-tenant booking and messaging system
-- PostgreSQL 15+ with Row Level Security (RLS)

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create ENUM types
CREATE TYPE admin_role AS ENUM ('superadmin', 'moderator');
CREATE TYPE business_status AS ENUM ('active', 'suspended', 'closed');
CREATE TYPE subscription_status AS ENUM ('active', 'cancelled', 'past_due', 'trialing');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE message_sender_type AS ENUM ('client', 'business');
CREATE TYPE email_type AS ENUM ('booking_confirmation', 'booking_reminder', 'booking_cancellation', 'status_update', 'message_notification');
CREATE TYPE payment_status AS ENUM ('succeeded', 'failed', 'pending');
CREATE TYPE business_owner_role AS ENUM ('owner', 'manager', 'staff');
CREATE TYPE email_status AS ENUM ('pending', 'sent', 'failed');
CREATE TYPE user_type AS ENUM ('admin', 'business_owner');

-- 1. Admins (Klarpath team)
CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  role admin_role DEFAULT 'moderator',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 2. Plans (Subscription tiers)
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR (50) NOT NULL UNIQUE,
  price_monthly DECIMAL(10,2),
  price_annually DECIMAL(10,2),
  max_clients INT DEFAULT 100,
  sms_enabled BOOLEAN DEFAULT FALSE,
  api_access BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 3. Businesses (Tenants)
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  phone VARCHAR,
  logo_url TEXT,
  website_url TEXT,
  subdomain VARCHAR UNIQUE,
  custom_domain VARCHAR UNIQUE,
  industry VARCHAR (50),
  business_address TEXT,
  business_hours JSONB,
  timezone VARCHAR DEFAULT 'UTC',
  payment_method_id VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  status business_status DEFAULT 'active'
);

-- 4. Subscriptions (Active plan per business)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES plans(id),
  stripe_subscription_id VARCHAR,
  status subscription_status DEFAULT 'trialing',
  start_date DATE NOT NULL,
  end_date DATE,
  renewal_date DATE,
  auto_renew BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 5. Payments (Transaction history - for later)
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES subscriptions(id),
  stripe_payment_intent_id VARCHAR,
  amount DECIMAL(10,2) NOT NULL,
  status payment_status DEFAULT 'pending',
  invoice_number VARCHAR UNIQUE,
  invoice_url TEXT,
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 6. Business Owners (Admin for each business)
CREATE TABLE business_owners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  email VARCHAR NOT NULL,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR,
  role business_owner_role DEFAULT 'owner',
  phone VARCHAR,
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(business_id, email)
);

-- 7. Clients (Customers of each business)
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR,
  phone VARCHAR,
  address TEXT,
  city VARCHAR,
  postcode VARCHAR,
  lifetime_value DECIMAL(10,2) DEFAULT 0.00,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(business_id, email)
);

-- 8. Services (Offered by business)
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  name VARCHAR NOT NULL,
  description TEXT,
  duration_minutes INT DEFAULT 60,
  price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 9. Availability (Business availability slots)
CREATE TABLE availability (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  day_of_week INT CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TIME,
  end_time TIME,
  is_recurring BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 10. Availability Exceptions (Holidays, sick days, etc)
CREATE TABLE availability_exceptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  date DATE,
  start_time TIME,
  end_time TIME,
  reason VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 11. Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES services(id),
  booked_at TIMESTAMP NOT NULL,
  duration_minutes INT,
  status booking_status DEFAULT 'pending',
  notes TEXT,
  reminder_sent_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 12. Messages (In-app messaging)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  sender_type message_sender_type NOT NULL,
  sender_id VARCHAR,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 13. Email Queue (For async processing)
CREATE TABLE email_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  recipient_email VARCHAR NOT NULL,
  email_type email_type NOT NULL,
  subject VARCHAR NOT NULL,
  body TEXT NOT NULL,
  booking_id UUID REFERENCES bookings(id),
  status email_status DEFAULT 'pending',
  retry_count INT DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  sent_at TIMESTAMP
);

-- 14. Audit Log (For compliance & debugging)
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id VARCHAR,
  user_type user_type NOT NULL,
  action VARCHAR NOT NULL,
  resource_type VARCHAR NOT NULL,
  resource_id VARCHAR,
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  business_id UUID REFERENCES businesses(id) ON DELETE SET NULL
);

-- Indexes for performance

-- Helper functions for RLS
CREATE OR REPLACE FUNCTION current_user_id() RETURNS UUID AS $$
  SELECT nullif(current_setting('app.current_user_id', TRUE), '')::UUID;
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION current_user_is_admin() RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM admins
    WHERE id = current_user_id()
  );
$$ LANGUAGE SQL STABLE;

-- Seed data for development
INSERT INTO plans (name, price_monthly, price_annually, max_clients, sms_enabled, api_access) VALUES
('launchpad', 29.99, 299.99, 50, false, false),
('growth', 79.99, 799.99, 200, true, false),
('custom', 149.99, 1499.99, 1000, true, true),
('enterprise', 299.99, 2999.99, -1, true, true)
ON CONFLICT (name) DO NOTHING;

INSERT INTO businesses (name, email, phone, subdomain, industry, business_address, business_hours, timezone) VALUES
('London HVAC Services', 'info@londonhvac.co.uk', '+44 20 1234 5678', 'hvac', 'hvac',
 '123 Heating Street, London, UK',
 '{"monday": {"open": "08:00", "close": "18:00"}, "tuesday": {"open": "08:00", "close": "18:00"}, "wednesday": {"open": "08:00", "close": "18:00"}, "thursday": {"open": "08:00", "close": "18:00"}, "friday": {"open": "08:00", "close": "17:00"}, "saturday": {"open": "09:00", "close": "16:00"}}',
 'Europe/London'),
('CoolBreeze HVAC', 'hello@hvac.kp', '+44 20 7123 4567', 'hvac-demo', 'hvac',
 '45 Baker Street, London',
 '{"monday": {"open": "09:00", "close": "17:00"}, "tuesday": {"open": "09:00", "close": "17:00"}, "wednesday": {"open": "09:00", "close": "17:00"}, "thursday": {"open": "09:00", "close": "17:00"}, "friday": {"open": "09:00", "close": "15:00"}}',
 'Europe/London')
ON CONFLICT (subdomain) DO NOTHING;

INSERT INTO business_owners (business_id, email, password_hash, first_name, last_name, role) 
SELECT b.id, 'owner@londonhvac.co.uk', '$2a$10$BkZoe/PfdFukvteMbXhz9.mpIW.8ACoAIhoDXCjH08G3eexWZlXxq', 'John', 'Smith', 'owner' FROM businesses b WHERE b.subdomain = 'hvac' 
ON CONFLICT (business_id, email) DO NOTHING;

INSERT INTO services (business_id, name, description, duration_minutes, price) 
SELECT b.id, 'HVAC Installation', 'Complete HVAC system installation for residential properties', 240, 1500.00 FROM businesses b WHERE b.subdomain = 'hvac' 
ON CONFLICT DO NOTHING;

INSERT INTO services (business_id, name, description, duration_minutes, price) 
SELECT b.id, 'HVAC Repair', 'Emergency HVAC repair and maintenance', 120, 150.00 FROM businesses b WHERE b.subdomain = 'hvac' 
ON CONFLICT DO NOTHING;

INSERT INTO services (business_id, name, description, duration_minutes, price) 
SELECT b.id, 'HVAC Maintenance', 'Annual HVAC system maintenance and inspection', 90, 120.00 FROM businesses b WHERE b.subdomain = 'hvac' 
ON CONFLICT DO NOTHING;
