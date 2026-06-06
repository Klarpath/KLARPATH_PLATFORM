# Klarpath CRM — HVAC & Plumbing Static Websites Manual

This guide explains how clients interact with the HVAC and Plumbing static websites, and how to receive/send messages through those public portals.

---

## Overview

### Static Websites Served

The platform hosts two static websites for public-facing business presence:

1. **HVAC Website:** `websites/hvac/`
   - Public landing page: http://localhost:3000/hvac (if served) or static IP
   - Displays services, booking links, and contact information
   
2. **Plumbing Website:** `websites/plumbing/`
   - Public landing page: http://localhost:3000/plumbing (if served) or static IP
   - Similar structure to HVAC site

3. **Design/Marketing Website:** `websites/design_klarpath.com/`
   - Main Klarpath brand site (case studies, SEO optimization)

---

## HVAC Static Website (BrightAir HVAC)

### File Structure

```
websites/hvac/
├── index.html              # Landing page / home
├── about.html              # About BrightAir HVAC
├── services.html           # Service offerings (HVAC Inspection, AC Repair)
├── booking.html            # Booking form / calendar
├── contact.html            # Contact form (email, phone, address)
├── review.html             # Customer reviews/testimonials
├── css/
│   ├── bootstrap.min.css
│   └── templatemo-business-oriented.css  # Main stylesheet
├── js/
│   ├── bootstrap.min.js
│   ├── jquery-3.4.1.min.js
│   ├── parallax.min.js
│   └── tooplate-script.js              # Custom interaction JS
├── fontawesome/            # Font icons for UI
└── img/                    # Business photos, logos
```

### Key Pages

#### 1. **Homepage (index.html)**

**What Clients See:**
- Hero banner with BrightAir HVAC branding
- Quick service overview (HVAC Inspection, AC Repair, Emergency Support)
- Call-to-action: "Book Now" or "Contact Us"
- Navigation menu: Home, About, Services, Booking, Contact, Reviews

**Client Action:**
```
1. Click "Book Now" → Redirects to booking.html
2. Or click "Services" → See detailed service offerings
3. Or click "Contact Us" → Opens contact.html form
```

#### 2. **Services Page (services.html)**

**Displays:**
- **HVAC Inspection** — 60 min, £120.00
  - Comprehensive system check, filter replacement, performance optimization
  - Best for: Annual maintenance, seasonal prep
  - Duration: ~1 hour
  
- **AC Repair** — 120 min, £220.00
  - Emergency diagnostics, component replacement, system testing
  - Best for: Broken AC units, refrigerant leaks, compressor issues
  - Duration: ~2 hours

**Client Action:**
```
1. Read service descriptions
2. Click "Select this service" → Taken to booking.html with pre-selected service
3. Or go back to Home and click "Book Now" separately
```

#### 3. **Booking Page (booking.html)**

**How Booking Works:**

1. **Client fills out form:**
   - Name: "Tom Baker"
   - Email: "tom.baker@example.com"
   - Phone: "+44 7425 123456"
   - Service: "HVAC Inspection" (dropdown)
   - Preferred Date: 2026-06-10 (calendar picker)
   - Preferred Time: 10:00 AM
   - Special Notes: "Please check the outdoor unit—it's making noise"

2. **Submit booking:**
   - Form sends to `/api/public/bookings` endpoint
   - Backend validates and creates booking in database
   - Booking status set to **"pending"** (awaits owner confirmation)

3. **Confirmation Email (optional):**
  - Client receives confirmation email (configure `SMTP_HOST` to a local test server or external SMTP provider).
   - Contains: booking ref number, service details, estimated arrival time

**API Call (behind the form):**
```bash
POST /api/public/bookings
Content-Type: application/json

{
  "first_name": "Tom",
  "last_name": "Baker",
  "email": "tom.baker@example.com",
  "phone": "+44 7425 123456",
  "service_name": "HVAC Inspection",
  "preferred_date": "2026-06-10",
  "preferred_time": "10:00",
  "notes": "Please check the outdoor unit—it's making noise"
}
```

#### 4. **Contact Page (contact.html)**

**Static Information:**
- Business name: BrightAir HVAC
- Email: support@brightair.kp
- Phone: +44 20 7666 7890
- Address: 12 Climate Lane, London
- Operating Hours: Mon–Fri 09:00–18:00, Fri closes 17:00

**Contact Form:**
- Name, Email, Phone, Subject, Message
- Submits to `/api/public/messages` endpoint to send inquiry message

#### 5. **Reviews Page (review.html)**

**Displays:**
- Customer testimonials and ratings
- **Sample Reviews:**
  - "Excellent service! Fixed my AC in no time. Highly recommend!" — Tom Baker ⭐⭐⭐⭐⭐
  - "Professional and courteous. Will use again!" — Lisa Moore ⭐⭐⭐⭐

---

## Plumbing Static Website (Klarpath Plumbing Co)

### File Structure

```
websites/plumbing/
├── index.html
├── about.html
├── contact.html
├── booking.html
├── review.html
├── services.html
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── fontAwesome.css
│   ├── light-box.css
│   ├── owl-carousel.css
│   └── [additional stylesheets]
├── js/
│   ├── bootstrap.min.js
│   ├── jquery-3.4.1.min.js
│   └── [additional JS]
├── fonts/
└── img/
```

### Key Pages (Similar to HVAC)

#### 1. **Homepage (index.html)**

**What Clients See:**
- Hero banner: "Professional Plumbing Services — Available 24/7"
- Services: Drain Cleaning, Pipe Repair, Emergency Support
- Call-to-action: "Schedule Service" or "Emergency Hotline"

#### 2. **Services Page (services.html)**

**Displays:**
- **Drain Cleaning** — 90 min, £150.00
  - Professional drain snake, hydro jetting, preventative maintenance
  - Best for: Slow drains, clogs, seasonal cleaning
  
- **Pipe Repair** — 120 min, £210.00
  - Leak detection, soldering, PVC/copper replacement
  - Best for: Burst pipes, leaks, emergency repairs

#### 3. **Booking Page (booking.html)**

**Same form structure as HVAC:**
- Client details, service selection, date/time picker
- Submits to `/api/public/bookings`

#### 4. **Contact & Reviews Pages**

- Similar to HVAC website
- Business info: Klarpath Plumbing Co, info@klarpathplumbing.co.uk, +44 20 7555 2345

---

## Client-to-Business Messaging Flow

### Scenario 1: Client Books Service

```
1. Client visits website → hvac/booking.html
2. Fills out booking form (name, email, phone, service, date/time)
3. Clicks "Book Service"
4. Backend creates:
   - New Booking record (status: "pending")
   - New Client record (if first-time visitor)
   - Notification message to business owner
5. Client receives confirmation email
6. Business owner sees pending booking in their dashboard
7. Owner can message client directly or confirm/reschedule
```

### Scenario 2: Client Initiates Direct Message

```
1. Client visits hvac/contact.html
2. Fills out contact form (name, email, subject, message)
3. Clicks "Send Message"
4. Backend submits to /api/public/messages endpoint:
   {
     "business_id": "UUID_OF_HVAC",
     "sender_type": "client",
     "content": "I have a question about your services..."
   }
5. Message stored in database with sender_id = client email (or NULL for anonymous)
6. Business owner notified of new message
7. Owner logs into dashboard → Messages section → Sees client inquiry
8. Owner replies: "Thanks for reaching out! How can we help?"
9. Client receives notification (email or in-app if they return to site)
```

### Scenario 3: Business Owner Sends Follow-up

```
1. Owner logs into dashboard (http://localhost:3000/login)
2. Navigates to Messages or a Client's detail page
3. Composes message: "Hi Tom, just confirming our appointment tomorrow at 10am..."
4. Clicks Send
5. Message stored in database with sender_type = "business", sender_id = owner UUID
6. Client sees message notification (if they revisit the site or receive email)
```

---

## API Endpoints for Public Messaging

### 1. Submit a Booking (Public)

```bash
POST /api/public/bookings
Content-Type: application/json

{
  "first_name": "Tom",
  "last_name": "Baker",
  "email": "tom.baker@example.com",
  "phone": "+44 7425 123456",
  "service_name": "HVAC Inspection",  // or "Drain Cleaning" etc
  "preferred_date": "2026-06-10",
  "preferred_time": "10:00",
  "notes": "Please call before arriving"
}

Response:
{
  "success": true,
  "booking_id": "UUID",
  "message": "Booking created. Business owner will confirm shortly."
}
```

### 2. Send a Public Message (Public)

```bash
POST /api/public/messages
Content-Type: application/json

{
  "business_id": "HVAC_BUSINESS_UUID",  // Retrieved from business data
  "client_id": "TOM_BAKER_CLIENT_UUID",  // Or NULL if first-time visitor
  "sender_type": "client",
  "content": "I have a question about your HVAC services..."
}

Response:
{
  "success": true,
  "message_id": "UUID",
  "message": "Your message has been sent. The business owner will reply shortly."
}
```

### 3. Fetch All Messages for a Client (Authenticated)

```bash
GET /api/messages
Authorization: Bearer JWT_TOKEN

Response:
{
  "messages": [
    {
      "id": "UUID",
      "business_id": "HVAC_UUID",
      "client_id": "TOM_UUID",
      "sender_type": "client",
      "content": "Hi, I'd like to book a service",
      "is_read": true,
      "created_at": "2026-06-09T14:00:00Z"
    },
    {
      "id": "UUID",
      "business_id": "HVAC_UUID",
      "client_id": "TOM_UUID",
      "sender_type": "business",
      "sender_id": "NOAH_OWNER_UUID",
      "content": "Thanks Tom! We can book you for Wednesday...",
      "is_read": false,
      "created_at": "2026-06-09T15:30:00Z"
    }
  ]
}
```

---

## Workflow: End-to-End Client Journey

### Day 1: Client Discovers Service

```
1. Client opens browser → types "hvac services london" → finds BrightAir HVAC site
2. Browses homepage, clicks "Services"
3. Reads about HVAC Inspection (£120, 60 min)
4. Clicks "Book Now" → Taken to booking.html
```

### Day 1: Client Books Service

```
5. Fills form: Name (Tom), Email, Phone, Date (2026-06-10), Time (10:00)
6. Adds note: "Please check outdoor unit—making noise"
7. Submits booking
8. Backend creates:
   - New Client (Tom Baker, tom.baker@example.com)
   - New Booking (HVAC Inspection, 2026-06-10 10:00, pending)
   - New Message from system notifying owner
9. Tom receives confirmation email
```

### Day 1: Owner Notified

```
10. Noah Taylor (HVAC owner) sees pending booking in dashboard
11. Noah clicks "Confirm" → Booking status → "Confirmed"
12. Noah sends message: "Thanks Tom! We've scheduled your inspection for Wed 10am. Our tech will call 30 min before arrival."
13. System sends message notification to Tom
```

### Day 1–2: Client & Owner Communicate

```
14. Tom (if he returns to site or checks email): Sees owner's message
15. Tom replies via message thread or contact form: "Sounds good! See you then."
16. Noah receives Tom's reply in dashboard
17. Noah reads and marks message as read ✓
```

### Day 2 (2026-06-10): Service Day

```
18. Noah's technician arrives at Tom's house at 10:00 AM
19. Performs HVAC Inspection
20. (Optionally) Tech sends update message: "Inspection complete, replacing filter and cleaned condenser."
21. Tom sees update; inspection marked complete in booking
22. Booking status updated to "completed"
```

### Post-Service

```
23. System sends Tom a review request: "How was your HVAC service? Rate us!"
24. Tom leaves 5-star review: "Excellent service! Professional and efficient."
25. Review appears on hvac/review.html for future customers
26. Tom's client lifetime value incremented: £0 → £120.00
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| **Booking form won't submit** | Client email already has booking | Verify email in database, or allow re-booking |
| **Message not received** | Business email not found in system | Ensure business_id is correct in API call |
| **No confirmation email** | SMTP not configured or test MailHog not running | Ensure `SMTP_HOST`/`SMTP_PORT` env vars are set; if using MailHog run it separately and check its logs |
| **Booking shows as pending forever** | Owner never confirmed | Owner must log in and click "Confirm" |
| **Client can't see owner's reply** | Client didn't return to site | Send email notification to client (future feature) |

---

## Future Enhancements

- **Email notifications** when clients receive owner messages
- **SMS booking reminders** before scheduled appointments
- **Online payment** during booking (Stripe integration)
- **Service reviews & ratings** system
- **Automated rescheduling** and cancellation workflows
- **Multi-language support** (EN, FR, DE)
- **Mobile app** for booking and messaging

---

## Reference: Demo Credentials

### Clients (Auto-created via bookings)
- **Tom Baker** — tom.baker@example.com (HVAC)
- **Maya Reed** — maya.reed@example.com (Plumbing)

### Business Owners
- **Noah Taylor** (HVAC) — owner@hvac.kp / OwnerPass123!
- **Eva Morgan** (Plumbing) — owner@plumbing.kp / OwnerPass123!

### Admin
- **admin@klarpath.com** / AdminPass123!

### Services & Pricing (HVAC)
| Service | Duration | Price |
|---------|----------|-------|
| HVAC Inspection | 60 min | £120.00 |
| AC Repair | 120 min | £220.00 |

### Services & Pricing (Plumbing)
| Service | Duration | Price |
|---------|----------|-------|
| Drain Cleaning | 90 min | £150.00 |
| Pipe Repair | 120 min | £210.00 |
