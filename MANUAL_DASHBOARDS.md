# Klarpath CRM — Manual Dashboard Usage Guide

This guide walks through using the **Admin Dashboard** and **Business Owner Dashboard** (for HVAC and Plumbing services).

## Quick Access

| Role | URL | Email | Password |
|------|-----|-------|----------|
| **Admin** | http://localhost:3000/admin/login | `admin@klarpath.com` | `AdminPass123!` |
| **HVAC Business Owner** | http://localhost:3000/login | `owner@hvac.kp` | `OwnerPass123!` |
| **Plumbing Business Owner** | http://localhost:3000/login | `owner@plumbing.kp` | `OwnerPass123!` |

---

## Admin Dashboard

### Login

1. Navigate to **http://localhost:3000/admin/login**
2. Enter email: `admin@klarpath.com`
3. Enter password: `AdminPass123!`
4. Click **Sign In**

### Admin Dashboard Overview

Once logged in, the admin will see a summary view showing:

- **Admin Summary:** High-level metrics across all businesses
- **All Businesses:** List of registered service businesses (HVAC, Plumbing)
- **Business Owners:** Owners associated with each business
- **Clients & Bookings:** Cross-business view of clients and their service bookings
- **Messages:** Centralized message feed between businesses and clients

### Admin Capabilities

#### 1. View All Businesses

- Navigate to the business list section.
- See business name, email, phone, industry (hvac/plumbing), and operation hours.
- **Data Example:**
  - **BrightAir HVAC** — support@brightair.kp, +44 20 7666 7890, hvac industry
  - **Klarpath Plumbing Co** — info@klarpathplumbing.co.uk, +44 20 7555 2345, plumbing industry

#### 2. Manage Business Owners

- View all owners and their associated businesses.
- **Owner Example:**
  - **Noah Taylor** (HVAC) — owner@hvac.kp
  - **Eva Morgan** (Plumbing) — owner@plumbing.kp

#### 3. Review Bookings Across Businesses

- See all bookings in a centralized view.
- Filter by business or status (confirmed, pending).
- **Booking Examples:**
  - **Tom Baker** (HVAC Client) booked "HVAC Inspection" on 2026-06-10 at 10:00 — **Confirmed**
  - **Maya Reed** (Plumbing Client) booked "Pipe Repair" on 2026-06-11 at 14:30 — **Pending**

#### 4. Monitor Messages & Communications

- View all inter-business and client messages.
- See message status (read/unread).
- **Message Examples:**
  - **Tom Baker → BrightAir HVAC:** "Hi, I would like to schedule a maintenance visit for my AC unit." ✓ Read
  - **Noah Taylor (Owner) → Tom Baker:** "Thanks Tom, we can book you in for Wednesday at 10am." ✗ Unread

#### 5. View Analytics

- Access admin summary dashboard with business metrics:
  - Total active businesses
  - Total registered owners
  - Total clients across all businesses
  - Booking success rate
  - Recent message activity

---

## Business Owner Dashboard (HVAC / Plumbing)

### Login

1. Navigate to **http://localhost:3000/login**
2. Enter email: 
   - **HVAC:** `owner@hvac.kp`
   - **Plumbing:** `owner@plumbing.kp`
3. Enter password: `OwnerPass123!`
4. Click **Sign In**

### Business Dashboard Overview

Once logged in, the owner will see a personalized dashboard showing:

- **Business Profile:** Your business details (name, hours, services offered)
- **Upcoming Bookings:** Scheduled service appointments
- **Clients:** List of registered clients for your business
- **Services:** Service offerings (with pricing and duration)
- **Messages:** Direct messaging with clients
- **Booking Management:** Accept/confirm or reschedule bookings

### Owner Capabilities

#### 1. View Your Business Profile

- Business name, email, phone, address, timezone
- Operating hours (Monday–Friday schedule)
- Industry type (HVAC or Plumbing)
- **Example (HVAC):**
  - **Name:** BrightAir HVAC
  - **Email:** support@brightair.kp
  - **Phone:** +44 20 7666 7890
  - **Address:** 12 Climate Lane, London
  - **Hours:** Mon–Fri 09:00–18:00, Fri closes 17:00

#### 2. Manage Your Services

- View all services offered by your business.
- See service name, description, duration, and pricing.

**HVAC Services:**
- **HVAC Inspection** — Comprehensive HVAC inspection and maintenance, 60 min, £120.00
- **AC Repair** — AC repair and emergency diagnostics, 120 min, £220.00

**Plumbing Services:**
- **Drain Cleaning** — Fast professional drain cleaning service, 90 min, £150.00
- **Pipe Repair** — Emergency pipe repair and leak sealing, 120 min, £210.00

#### 3. View Your Clients

- List of clients who have booked your services or initiated messaging.
- See client contact details, address, and lifetime value.

**HVAC Clients:**
- **Tom Baker** — tom.baker@example.com, 12 Orchard Road, London, Lifetime Value: £420.00
- **Lisa Moore** — lisa.moore@example.com, 88 Kingsway, London, Lifetime Value: £325.00

**Plumbing Clients:**
- **Sam Peters** — sam.peters@example.com, 52 Baker Street, London, Lifetime Value: £210.00
- **Maya Reed** — maya.reed@example.com, 19 Camden Street, London, Lifetime Value: £120.00

#### 4. Manage Bookings

- View all upcoming bookings from clients.
- Status indicators: **Confirmed** ✓ or **Pending** ⏳
- **Actions:** Accept pending bookings, confirm appointments, reschedule if needed

**Example Booking:**
- **Client:** Tom Baker
- **Service:** HVAC Inspection
- **Date/Time:** 2026-06-10 10:00 AM
- **Duration:** 60 minutes
- **Status:** Confirmed ✓
- **Notes:** Customer booked a full HVAC inspection.

#### 5. Messaging with Clients

**Sending a Message:**

1. Navigate to **Messages** section
2. Select a client from the list (e.g., Tom Baker)
3. Type your message in the input field (e.g., "Thanks for booking! We'll see you Wednesday at 10am.")
4. Click **Send**
5. Message appears in the chat thread marked as sent by you (business owner)

**Receiving Messages:**

- Client messages appear in your message inbox.
- Unread messages are marked as ✗ Unread.
- Click to open a message thread and view conversation history.

**Example Flow:**

1. **Client (Tom Baker):** "Hi, I would like to schedule a maintenance visit for my AC unit."
2. **You (Noah Taylor, HVAC Owner):** "Thanks Tom, we can book you in for Wednesday at 10am. Our technician will arrive between 10–11 AM. Please let us know if you have any questions!"
3. **Client:** "Perfect, see you then!"

#### 6. Confirm or Reschedule Bookings

- Open a pending booking.
- **Options:**
  - ✓ **Confirm** — Mark the booking as confirmed and notify the client.
  - 🔄 **Reschedule** — Propose a new date/time (client must accept).
  - ✗ **Cancel** — Cancel the booking (only if necessary).

---

## Common Workflows

### Workflow 1: Owner Confirms a Client Booking

1. **Trigger:** Client (Tom Baker) books "HVAC Inspection" for 2026-06-10 10:00
2. **Owner sees** the pending booking in the dashboard
3. **Owner clicks** "Confirm" to accept the appointment
4. **Booking status** changes to **Confirmed**
5. **Client notification** is sent (optional email or in-app message)

### Workflow 2: Two-Way Messaging Between Owner and Client

1. **Client sends:** "My AC is making a strange noise. Can you check it?"
2. **Owner receives** the message (marked unread)
3. **Owner reads** the message and responds: "Absolutely, we can send a technician Tuesday at 2pm."
4. **Client sees** the owner's response in their client portal
5. **Client replies:** "Perfect, that works for me!"
6. **Both parties** have a complete message history

### Workflow 3: Admin Oversees All Bookings & Messages

1. **Admin logs in** to admin dashboard
2. **Admin views** the "Bookings" section and sees all active bookings
3. **Admin clicks** on a booking to see client details and service information
4. **Admin navigates** to "Messages" to see all inter-business communication
5. **Admin can** help resolve disputes or escalate issues

---

## API Endpoints for Reference

If you're using Postman or curl to test:

```bash
# Check authentication (no login required)
curl http://localhost:3000/api/auth/me

# Admin login
curl -X POST http://localhost:3000/api/auth/admin-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@klarpath.com","password":"AdminPass123!"}'

# Business owner login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"owner@hvac.kp","password":"OwnerPass123!"}'

# Get current user (requires JWT token in Authorization header)
curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Fetch all businesses (admin only)
curl http://localhost:3000/api/business \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Fetch messages (owner or admin)
curl http://localhost:3000/api/messages \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Send a message
curl -X POST http://localhost:3000/api/public/messages \
  -H "Content-Type: application/json" \
  -d '{
    "business_id": "UUID_OF_BUSINESS",
    "client_id": "UUID_OF_CLIENT",
    "sender_type": "business",
    "content": "Your message here"
  }'
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Can't log in** | Verify credentials (email and password must match exactly). Clear browser cache. |
| **Booking not showing** | Refresh the page. Ensure the booking date is in the future (after 2026-06-10). |
| **Message not delivered** | Check that both sender and recipient are in the same business context. |
| **API returns 401 (Unauthorized)** | Ensure JWT token is valid and not expired. Re-login if needed. |

---

## Next Steps

- **Learn the architecture:** See `ARCHITECTURE_PLAN.md` for system design and future roadmap.
- **Manage HVAC/Plumbing websites:** See `MANUAL_STATIC_WEBSITES.md` for public-facing business portals.
- **Integrate external services:** Refer to API documentation for connecting Stripe (payments), Mailgun (emails), or custom CRM integrations.
