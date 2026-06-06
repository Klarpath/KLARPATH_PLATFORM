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
  industry VARCHAR (50), -- "hvac", "plumbing", etc
  business_address TEXT,
  business_hours JSONB, -- {monday: {open: "09:00", close: "17:00"}}
  timezone VARCHAR DEFAULT 'UTC',
  payment_method_id VARCHAR, -- Stripe (for later)
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
  UNIQUE(business_id, email) -- One client per email per business
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
  day_of_week INT CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0=Sunday, 6=Saturday
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
  sender_id VARCHAR, -- Either client_id or business_owner_id
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
  user_id VARCHAR, -- admin_id or business_owner_id
  user_type user_type NOT NULL,
  action VARCHAR NOT NULL,
  resource_type VARCHAR NOT NULL, -- 'booking', 'message', etc
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
-- Plans
INSERT INTO plans (name, price_monthly, price_annually, max_clients, sms_enabled, api_access) VALUES
('launchpad', 29.99, 299.99, 50, false, false),
('growth', 79.99, 799.99, 200, true, false),
('custom', 149.99, 1499.99, 1000, true, true),
('enterprise', 299.99, 2999.99, -1, true, true);

-- Sample HVAC Business
INSERT INTO businesses (name, email, phone, subdomain, industry, business_address, business_hours, timezone) VALUES
('London HVAC Services', 'info@londonhvac.co.uk', '+44 20 1234 5678', 'hvac', 'hvac',
 '123 Heating Street, London, UK',
 '{"monday": {"open": "08:00", "close": "18:00"}, "tuesday": {"open": "08:00", "close": "18:00"}, "wednesday": {"open": "08:00", "close": "18:00"}, "thursday": {"open": "08:00", "close": "18:00"}, "friday": {"open": "08:00", "close": "17:00"}, "saturday": {"open": "09:00", "close": "16:00"}}',
 'Europe/London');

-- Sample Business Owner
INSERT INTO business_owners (business_id, email, password_hash, first_name, last_name, role) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'owner@londonhvac.co.uk', '$2a$10$Z4Q3uDW45mWP0txr6g7pRuefN6jtPD2ZWXSzRLvBDlAt9la7BC7W.', 'John', 'Smith', 'owner');

-- Sample Services
INSERT INTO services (business_id, name, description, duration_minutes, price) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'HVAC Installation', 'Complete HVAC system installation for residential properties', 240, 1500.00),
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'HVAC Repair', 'Emergency HVAC repair and maintenance', 120, 150.00),
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'HVAC Maintenance', 'Annual HVAC system maintenance and inspection', 90, 120.00);

-- Sample Availability (Monday to Friday, 8am-6pm)
INSERT INTO availability (business_id, day_of_week, start_time, end_time) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 1, '08:00', '18:00'), -- Monday
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 2, '08:00', '18:00'), -- Tuesday
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 3, '08:00', '18:00'), -- Wednesday
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 4, '08:00', '18:00'), -- Thursday
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 5, '08:00', '17:00'), -- Friday
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 6, '09:00', '16:00'); -- Saturday

-- Admin user (password: admin123 - CHANGE IN PRODUCTION)
INSERT INTO admins (email, password_hash, role) VALUES
('admin@klarpath.com', '$2a$10$Z4Q3uDW45mWP0txr6g7pRuefN6jtPD2ZWXSzRLvBDlAt9la7BC7W.', 'superadmin');

-- Sample Subscription
INSERT INTO subscriptions (business_id, plan_id, status, start_date, end_date) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), (SELECT id FROM plans WHERE name = 'launchpad'), 'active', CURRENT_DATE, CURRENT_DATE + INTERVAL '1 year');

-- Sample Clients
INSERT INTO clients (business_id, first_name, last_name, email, phone, address, city, postcode) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'Alice', 'Johnson', 'alice@example.com', '+44 20 9876 5432', '45 Cool Street', 'London', 'SW1A 1AA'),
((SELECT id FROM businesses WHERE subdomain = 'hvac'), 'Bob', 'Wilson', 'bob@example.com', '+44 20 8765 4321', '67 Warm Avenue', 'London', 'E1 6AN');

-- Sample Bookings
INSERT INTO bookings (business_id, client_id, service_id, booked_at, duration_minutes, status, notes) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), (SELECT id FROM clients WHERE email = 'alice@example.com'), (SELECT id FROM services WHERE name = 'HVAC Repair'), CURRENT_TIMESTAMP + INTERVAL '2 days', 120, 'confirmed', 'Emergency repair needed'),
((SELECT id FROM businesses WHERE subdomain = 'hvac'), (SELECT id FROM clients WHERE email = 'bob@example.com'), (SELECT id FROM services WHERE name = 'HVAC Maintenance'), CURRENT_TIMESTAMP + INTERVAL '1 week', 90, 'pending', 'Annual maintenance check');

-- Sample Messages
INSERT INTO messages (business_id, client_id, sender_type, sender_id, content) VALUES
((SELECT id FROM businesses WHERE subdomain = 'hvac'), (SELECT id FROM clients WHERE email = 'alice@example.com'), 'client', (SELECT id FROM clients WHERE email = 'alice@example.com'), 'Hi, I need my HVAC system repaired urgently. It stopped working yesterday.'),
((SELECT id FROM businesses WHERE subdomain = 'hvac'), (SELECT id FROM clients WHERE email = 'alice@example.com'), 'business', (SELECT id FROM business_owners WHERE email = 'owner@londonhvac.co.uk'), 'Hello Alice, we can schedule a repair for tomorrow morning. Please confirm your availability.');

-- Row Level Security (RLS) Setup
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_owners ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability_exceptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_queue ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Admins can see all data
CREATE POLICY "admins_see_all_businesses" ON businesses FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_subscriptions" ON subscriptions FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_payments" ON payments FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_business_owners" ON business_owners FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_clients" ON clients FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_services" ON services FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_availability" ON availability FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_availability_exceptions" ON availability_exceptions FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_bookings" ON bookings FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_messages" ON messages FOR ALL USING (current_user_is_admin());
CREATE POLICY "admins_see_all_email_queue" ON email_queue FOR ALL USING (current_user_is_admin());

-- Business owners see only their business data
CREATE POLICY "business_owners_see_own_business" ON businesses FOR SELECT USING (id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_subscriptions" ON subscriptions FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_payments" ON payments FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_owners" ON business_owners FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_clients" ON clients FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_services" ON services FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_availability" ON availability FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_availability_exceptions" ON availability_exceptions FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_bookings" ON bookings FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_messages" ON messages FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));
CREATE POLICY "business_owners_see_own_email_queue" ON email_queue FOR ALL USING (business_id IN (SELECT business_id FROM business_owners WHERE id = current_user_id()));