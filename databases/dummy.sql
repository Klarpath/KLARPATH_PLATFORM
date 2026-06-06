-- Dummy data for Klarpath CRM demo workloads
-- Used by Start.bat when databases\dummy.sql exists.

-- Add a demo admin account if it does not already exist.
INSERT INTO admins (id, email, password_hash, role)
VALUES (uuid_generate_v4(), 'admin@klarpath.com', '$2a$10$lTacm0XG48yP4cggGD5S/e/DDWtNF2qQkS/i6eGITHEm3WUMVzYWK', 'superadmin'::"AdminRole")
ON CONFLICT (email) DO NOTHING;

-- Additional tenants for admin analytics overview.
INSERT INTO businesses (id, name, email, phone, subdomain, industry, business_address, business_hours, timezone)
VALUES
(uuid_generate_v4(), 'Klarpath Plumbing Co', 'info@klarpathplumbing.co.uk', '+44 20 7555 2345', 'plumbing', 'plumbing',
 '78 Fleet Street, London', '{"monday": {"open": "08:00", "close": "18:00"}, "tuesday": {"open": "08:00", "close": "18:00"}, "wednesday": {"open": "08:00", "close": "18:00"}, "thursday": {"open": "08:00", "close": "18:00"}, "friday": {"open": "08:00", "close": "17:00"}}', 'Europe/London'),
(uuid_generate_v4(), 'BrightAir HVAC', 'support@brightair.kp', '+44 20 7666 7890', 'hvac', 'hvac',
 '12 Climate Lane, London', '{"monday": {"open": "09:00", "close": "18:00"}, "tuesday": {"open": "09:00", "close": "18:00"}, "wednesday": {"open": "09:00", "close": "18:00"}, "thursday": {"open": "09:00", "close": "18:00"}, "friday": {"open": "09:00", "close": "17:00"}}', 'Europe/London')
ON CONFLICT (subdomain) DO NOTHING;

-- Business owners for visible login access.
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing')
INSERT INTO business_owners (id, business_id, email, password_hash, first_name, last_name, role)
SELECT uuid_generate_v4(), id, 'owner@hvac.kp', '$2a$10$BkZoe/PfdFukvteMbXhz9.mpIW.8ACoAIhoDXCjH08G3eexWZlXxq', 'Noah', 'Taylor', 'owner'::"BusinessOwnerRole" FROM hvac
UNION ALL
SELECT uuid_generate_v4(), id, 'owner@plumbing.kp', '$2a$10$BkZoe/PfdFukvteMbXhz9.mpIW.8ACoAIhoDXCjH08G3eexWZlXxq', 'Eva', 'Morgan', 'owner'::"BusinessOwnerRole" FROM plumbing
ON CONFLICT (business_id, email) DO NOTHING;

-- Clients for each business.
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing')
INSERT INTO clients (id, business_id, first_name, last_name, email, phone, address, city, postcode, lifetime_value, notes)
SELECT uuid_generate_v4(), id, 'Tom', 'Baker', 'tom.baker@example.com', '+44 7425 123456', '12 Orchard Road', 'London', 'N1 9GU', 420.00, 'HVAC customer with recurring maintenance plans.' FROM hvac
UNION ALL
SELECT uuid_generate_v4(), id, 'Lisa', 'Moore', 'lisa.moore@example.com', '+44 7425 654321', '88 Kingsway', 'London', 'SW1A 2AA', 325.00, 'Prefers email contact.' FROM hvac
UNION ALL
SELECT uuid_generate_v4(), id, 'Sam', 'Peters', 'sam.peters@example.com', '+44 7425 777000', '52 Baker Street', 'London', 'WC2N 5DU', 210.00, 'Needs same-day plumbing service.' FROM plumbing
UNION ALL
SELECT uuid_generate_v4(), id, 'Maya', 'Reed', 'maya.reed@example.com', '+44 7425 888111', '19 Camden Street', 'London', 'NW1 8PY', 120.00, 'Plumbing check and leak repair lead.' FROM plumbing
ON CONFLICT (business_id, email) DO NOTHING;

-- Services for HVAC and plumbing.
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing')
INSERT INTO services (id, business_id, name, description, duration_minutes, price)
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
     plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing')
SELECT uuid_generate_v4(), hvac.id, 'HVAC Inspection', 'Comprehensive HVAC inspection and maintenance.', 60, 120.00
FROM hvac
WHERE NOT EXISTS (
  SELECT 1 FROM services WHERE business_id = hvac.id AND name = 'HVAC Inspection'
)
UNION ALL
SELECT uuid_generate_v4(), hvac.id, 'AC Repair', 'AC repair and emergency diagnostics.', 120, 220.00
FROM hvac
WHERE NOT EXISTS (
  SELECT 1 FROM services WHERE business_id = hvac.id AND name = 'AC Repair'
)
UNION ALL
SELECT uuid_generate_v4(), plumbing.id, 'Drain Cleaning', 'Fast professional drain cleaning service.', 90, 150.00
FROM plumbing
WHERE NOT EXISTS (
  SELECT 1 FROM services WHERE business_id = plumbing.id AND name = 'Drain Cleaning'
)
UNION ALL
SELECT uuid_generate_v4(), plumbing.id, 'Pipe Repair', 'Emergency pipe repair and leak sealing.', 120, 210.00
FROM plumbing
WHERE NOT EXISTS (
  SELECT 1 FROM services WHERE business_id = plumbing.id AND name = 'Pipe Repair'
);

-- Bookings for demo businesses.
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
client AS (SELECT id FROM clients WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'hvac') AND email = 'tom.baker@example.com'),
service AS (SELECT id FROM services WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'hvac') AND name = 'HVAC Inspection')
INSERT INTO bookings (id, business_id, client_id, service_id, booked_at, duration_minutes, status, notes)
SELECT uuid_generate_v4(), hvac.id, client.id, service.id, '2026-06-10 10:00:00', 60, 'confirmed'::"BookingStatus", 'Customer booked a full HVAC inspection.' FROM hvac, client, service
WHERE NOT EXISTS (
  SELECT 1 FROM bookings WHERE business_id = hvac.id AND client_id = client.id AND service_id = service.id AND booked_at = '2026-06-10 10:00:00'
);

WITH plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing'),
client2 AS (SELECT id FROM clients WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'plumbing') AND email = 'maya.reed@example.com'),
service2 AS (SELECT id FROM services WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'plumbing') AND name = 'Pipe Repair')
INSERT INTO bookings (id, business_id, client_id, service_id, booked_at, duration_minutes, status, notes)
SELECT uuid_generate_v4(), plumbing.id, client2.id, service2.id, '2026-06-11 14:30:00', 120, 'pending'::"BookingStatus", 'Booked emergency pipe repair.' FROM plumbing, client2, service2
WHERE NOT EXISTS (
  SELECT 1 FROM bookings WHERE business_id = plumbing.id AND client_id = client2.id AND service_id = service2.id AND booked_at = '2026-06-11 14:30:00'
);

-- Messages for demo clients and businesses.
WITH hvac AS (SELECT id FROM businesses WHERE subdomain = 'hvac'),
client AS (SELECT id FROM clients WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'hvac') AND email = 'tom.baker@example.com'),
owners AS (SELECT id FROM business_owners WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'hvac') AND email = 'owner@hvac.kp')
INSERT INTO messages (id, business_id, client_id, sender_type, sender_id, content, is_read)
SELECT uuid_generate_v4(), hvac.id, client.id, 'client'::"MessageSenderType", NULL, 'Hi, I would like to schedule a maintenance visit for my AC unit.', TRUE FROM hvac, client, owners
UNION ALL
SELECT uuid_generate_v4(), hvac.id, client.id, 'business'::"MessageSenderType", (
  SELECT id FROM business_owners WHERE business_id = hvac.id AND email = 'owner@hvac.kp'
), 'Thanks Tom, we can book you in for Wednesday at 10am.', FALSE FROM hvac, client
WHERE NOT EXISTS (
  SELECT 1 FROM messages WHERE business_id = hvac.id AND client_id = client.id AND content = 'Thanks Tom, we can book you in for Wednesday at 10am.'
);

WITH plumbing AS (SELECT id FROM businesses WHERE subdomain = 'plumbing'),
client2 AS (SELECT id FROM clients WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'plumbing') AND email = 'maya.reed@example.com'),
owners2 AS (SELECT id FROM business_owners WHERE business_id = (SELECT id FROM businesses WHERE subdomain = 'plumbing') AND email = 'owner@plumbing.kp')
INSERT INTO messages (id, business_id, client_id, sender_type, sender_id, content, is_read)
SELECT uuid_generate_v4(), plumbing.id, client2.id, 'client'::"MessageSenderType", NULL, 'My sink is leaking, can someone come today?', TRUE FROM plumbing, client2, owners2
UNION ALL
SELECT uuid_generate_v4(), plumbing.id, client2.id, 'business'::"MessageSenderType", (
  SELECT id FROM business_owners WHERE business_id = plumbing.id AND email = 'owner@plumbing.kp'
), 'Yes Maya, our team can be there after 4pm today.', FALSE FROM plumbing, client2
WHERE NOT EXISTS (
  SELECT 1 FROM messages WHERE business_id = plumbing.id AND client_id = client2.id AND content = 'Yes Maya, our team can be there after 4pm today.'
);
