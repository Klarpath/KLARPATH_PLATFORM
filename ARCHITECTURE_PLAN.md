# Klarpath CRM — Future Architecture Plan

This document outlines the **current system architecture** and a **roadmap** for scaling, security, and feature expansion.

---

## Current Architecture (v1.1)

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Internet / Clients                            │
└────────────┬──────────────────────────────────────────┬─────────────┘
             │                                          │
         ┌───▼────────┐                        ┌────────▼───┐
         │   HVAC     │                        │  Plumbing  │
         │   Website  │                        │   Website  │
         │ (Static)   │                        │  (Static)  │
         └───┬────────┘                        └────────┬───┘
             │                                         │
             └─────────────────────┬───────────────────┘
                                   │
                        ┌──────────▼──────────┐
                        │   Next.js App       │
                        │ (Port 3000)         │
                        │                     │
                        │ Pages:              │
                        │ - /login            │
                        │ - /admin/login      │
                        │ - /admin/dashboard  │
                        │ - /dashboard        │
                        │ - /register         │
                        │                     │
                        │ API Routes:         │
                        │ - /api/auth/*       │
                        │ - /api/messages     │
                        │ - /api/bookings     │
                        │ - /api/clients      │
                        │ - /api/business     │
                        │ - /api/metrics      │
                        └────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┬─────────────────┐
              │                  │                  │                 │
         ┌────▼─────┐     ┌─────▼──┐         ┌────▼───┐        ┌────▼────┐
         │ PostgreSQL│     │ Redis  │         │MailHog │        │pgAdmin  │
         │ Database  │     │ Cache  │         │ Email  │        │Web UI   │
         │           │     │        │         │        │        │         │
         │ Tables:   │     │ TTL:   │         │Port:   │        │Port:    │
         │- admins   │     │ 24h    │         │1025    │        │5050     │
         │- businesses     │        │         │(SMTP)  │        │         │
         │- business_owners│        │         │8025    │        │         │
         │- clients       │        │         │(Web)   │        │         │
         │- bookings      │        │         │        │        │         │
         │- services      │        │         │        │        │         │
         │- messages      │        │         │        │        │         │
         └────────────┘   └────────┘         └────────┘        └─────────┘
```

### Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Frontend** | Next.js | 14.2 | React framework with SSR, API routes |
| **UI Framework** | React | 18+ | Component library (current: basic) |
| **Styling** | CSS Modules | - | Scoped styles (future: Tailwind) |
| **Backend** | Node.js | 20 | JavaScript runtime in containers |
| **ORM** | Prisma | 5.22 | Type-safe database access |
| **Database** | PostgreSQL | Latest | Relational data, ENUM types |
| **Cache** | Redis | Latest | Session/booking cache (future use) |
| **Email** | MailHog | Latest | Local email testing (dev) |
| **Containerization** | Docker | Latest | App, API, Postgres, Redis containers |
| **Orchestration** | Docker Compose | Latest | Multi-container deployment |
| **Authentication** | JWT + Bcrypt | - | Token-based auth, password hashing |
| **Deployment** | Docker (local) | - | Can run on Kubernetes, AWS, GCP |

### Data Model (Prisma Schema)

```
Admins
├─ id (UUID)
├─ email (unique)
├─ password_hash
├─ role (enum: superadmin)

Businesses
├─ id (UUID)
├─ name
├─ email (unique)
├─ phone
├─ subdomain (unique, for multi-tenancy)
├─ industry (enum: hvac, plumbing)
├─ business_address
├─ business_hours (JSON)
├─ timezone
├─ status (enum: active, inactive)
├─ ← BusinessOwner (relation)
├─ ← Client (relation)
├─ ← Service (relation)
├─ ← Booking (relation)
├─ ← Message (relation)

BusinessOwners
├─ id (UUID)
├─ business_id (FK → Business)
├─ email (unique per business)
├─ password_hash
├─ first_name
├─ last_name
├─ role (enum: owner, staff, admin)
├─ ← Message (relation via sender_id)

Clients
├─ id (UUID)
├─ business_id (FK → Business)
├─ first_name
├─ last_name
├─ email (unique per business)
├─ phone
├─ address
├─ city
├─ postcode
├─ lifetime_value (decimal)
├─ notes
├─ ← Booking (relation)
├─ ← Message (relation via client_id)

Services
├─ id (UUID)
├─ business_id (FK → Business)
├─ name
├─ description
├─ duration_minutes
├─ price (decimal)

Bookings
├─ id (UUID)
├─ business_id (FK → Business)
├─ client_id (FK → Client)
├─ service_id (FK → Service)
├─ booked_at (timestamp)
├─ duration_minutes
├─ status (enum: pending, confirmed, completed, cancelled)
├─ notes

Messages
├─ id (UUID)
├─ business_id (FK → Business)
├─ client_id (FK → Client)
├─ sender_type (enum: client, business)
├─ sender_id (UUID, FK → BusinessOwner, nullable)
├─ content
├─ is_read
├─ created_at (timestamp)
```

### Authentication Flow

```
1. User submits credentials (email, password)
   ↓
2. Backend validates against database
   ├─ Admin: checks admins table, role = superadmin
   └─ Owner: checks business_owners table, role = owner
   ↓
3. If valid:
   ├─ Generate JWT token (HS256, signed with SECRET_KEY)
   ├─ Set token in HttpOnly cookie (secure, SameSite=Strict)
   └─ Return user object (id, email, role, business_id)
   ↓
4. Client stores token (cookie or localStorage)
   ↓
5. Subsequent requests include token in Authorization header
   ├─ GET /api/messages
   │   Authorization: Bearer eyJhbGc...
   ↓
6. Backend validates JWT signature
   ├─ If valid: request proceeds, user context injected
   └─ If invalid/expired: return 401 Unauthorized
```

### Multi-Tenancy Model

```
Each Business is a Tenant:
  subdomain = unique identifier (hvac, plumbing, acme-hvac, etc.)
  
Data Isolation:
  ├─ clients.business_id filters by tenant
  ├─ bookings.business_id filters by tenant
  ├─ services.business_id filters by tenant
  ├─ messages.business_id filters by tenant
  
Access Control:
  ├─ BusinessOwner can only see data for their business_id
  ├─ Admin can see all businesses
  ├─ Clients are implicitly scoped to their business_id
```

---

## Phase 1: Current Features (v1.1 ✅)

- ✅ Admin login & dashboard
- ✅ Business owner login & dashboard
- ✅ Client management (CRUD)
- ✅ Service management (CRUD)
- ✅ Booking creation & confirmation workflow
- ✅ Messaging between owners and clients
- ✅ Multi-tenant data isolation (by subdomain)
- ✅ JWT authentication
- ✅ Database seeding (demo data)
- ✅ Docker containerization

---

## Phase 2: UI/UX Enhancement (Recommended next — 2-4 weeks)

### Goal
Replace basic CSS with **Tailwind CSS + shadcn/ui** for professional, accessible UI.

### Changes

1. **Install Dependencies**
   ```bash
   npm install tailwindcss postcss autoprefixer
   npm install -D @types/tailwindcss
   npm install shadcn-ui  # or cherry-pick components
   ```

2. **Update Styling**
   - Replace `css/globals.css` with Tailwind config
   - Refactor all `.tsx` pages to use Tailwind classes
   - Use shadcn/ui components:
     - `Button`, `Input`, `Card`, `Dialog`, `Tabs`
     - `DataTable` for bookings/messages list
     - `Form` component for validation

3. **New Pages/Components**
   - Dashboard cards with metric summary
   - Message inbox with thread view
   - Booking calendar with date picker
   - Modal dialogs for confirm/cancel actions

4. **Deliverables**
   - Professional, responsive design
   - Mobile-friendly layouts
   - Dark mode support (optional)
   - Accessibility (WCAG 2.1 AA)

---

## Phase 3: Advanced Messaging & Notifications (Weeks 4–6)

### Goal
Enable real-time messaging, email notifications, and SMS alerts.

### Features

1. **Real-Time Messaging (WebSocket)**
   ```typescript
   // Use Socket.io or Next.js WebSocket support
   
   // Client connects to /socket.io
   socket.on("message:new", (message) => {
     // Update message list in real-time
     setMessages([...messages, message]);
   });
   
   // Owner sends message
   socket.emit("message:send", {
     client_id: "...",
     content: "Your appointment is confirmed"
   });
   ```

2. **Email Notifications** (upgrade from MailHog)
   ```typescript
   // Replace MailHog with SendGrid or Mailgun
   
   async function sendNotification(clientEmail: string, type: "booking_confirmed" | "message_received") {
     if (type === "booking_confirmed") {
       await mailgun.send({
         to: clientEmail,
         subject: "Your booking is confirmed!",
         template: "booking_confirmation",
         vars: { booking_id, date, time, service }
       });
     }
   }
   ```

3. **SMS Alerts** (optional, Twilio)
   ```typescript
   // Send SMS reminders 24h before booking
   async function sendSmsReminder(phoneNumber: string, booking: Booking) {
     await twilio.messages.create({
       to: phoneNumber,
       from: "+441234567890",
       body: `Reminder: You have ${booking.service.name} tomorrow at ${booking.booked_at.toLocaleTimeString()}`
     });
   }
   ```

### Deliverables
- Real-time message updates in dashboard
- Email confirmations for bookings & messages
- SMS reminders (24h before appointment)
- Push notifications to web browsers

---

## Phase 4: Payment Integration (Weeks 6–8)

### Goal
Enable online payment for bookings and service deposits.

### Features

1. **Stripe Integration**
   ```typescript
   // Install: npm install stripe @stripe/react-stripe-js
   
   // 1. Create payment intent when booking
   const paymentIntent = await stripe.paymentIntents.create({
     amount: service.price * 100, // cents
     currency: "gbp",
     metadata: { booking_id, client_id }
   });
   
   // 2. Client fills payment form (Stripe hosted)
   <Elements stripe={stripePromise}>
     <PaymentForm bookingId={bookingId} />
   </Elements>
   
   // 3. Confirm payment
   const result = await stripe.confirmCardPayment(paymentIntent.client_secret);
   
   // 4. Webhook: listen for payment.succeeded
   app.post("/api/webhooks/stripe", (req, res) => {
     if (req.body.type === "payment_intent.succeeded") {
       // Update booking: mark as paid, send confirmation
       await db.booking.update({
         where: { id: req.body.data.object.metadata.booking_id },
         data: { payment_status: "paid" }
       });
     }
   });
   ```

2. **Payment Status Tracking**
   ```prisma
   model Booking {
     ...
     payment_status (enum: unpaid, paid, refunded)
     payment_method (enum: card, bank_transfer, cash)
     amount_paid (decimal)
     paid_at (DateTime?)
   }
   ```

3. **Invoicing**
   - Auto-generate invoice PDF after payment
   - Send invoice to client email
   - Store invoice in cloud storage (AWS S3)

### Deliverables
- Secure payment processing via Stripe
- Invoice generation & delivery
- Refund handling
- Payment history in dashboard

---

## Phase 5: Analytics & Reporting (Weeks 8–10)

### Goal
Provide business owners with actionable insights and revenue reports.

### Features

1. **Dashboard Metrics**
   ```typescript
   // Admin sees:
   - Total revenue (all businesses)
   - Active bookings by business
   - Client acquisition rate
   - Average booking value
   - Message response time
   
   // Business Owner sees:
   - Revenue (their business only)
   - Booking conversion rate
   - Top services by revenue
   - Client lifetime value distribution
   - Cancellation rate
   ```

2. **Reports & Exports**
   ```typescript
   // Generate CSV/PDF reports
   export async function generateMonthlyReport(businessId: UUID, month: number) {
     const bookings = await db.booking.findMany({
       where: { business_id: businessId, booked_at: { gte: monthStart, lte: monthEnd } }
     });
     
     const revenue = bookings.reduce((sum, b) => sum + b.service.price, 0);
     
     return generatePDF({
       title: "Monthly Report",
       data: { revenue, bookingCount: bookings.length, clients: [...] }
     });
   }
   ```

3. **Charts & Visualization**
   - Install: `npm install recharts`
   - Line chart: revenue over time
   - Bar chart: bookings by service
   - Pie chart: client source (website, referral, etc.)

### Deliverables
- Real-time dashboard metrics
- Monthly/quarterly revenue reports
- Export to CSV, PDF
- Interactive charts

---

## Phase 6: API Directory & Third-Party Integrations (Weeks 10–12)

### Goal
Allow businesses to connect external services (CRM, accounting, scheduling tools).

### Features

1. **Public API** (OAuth2 / API Key)
   ```typescript
   // 1. Issue API key for business
   // 2. Document endpoints:
   
   GET    /api/v1/bookings?status=pending
   POST   /api/v1/bookings
   GET    /api/v1/clients
   GET    /api/v1/messages
   POST   /api/v1/messages
   
   // 3. Authentication:
   Authorization: Bearer sk_live_abc123xyz...
   ```

2. **Webhook Events**
   ```typescript
   // Business subscribes to events:
   - booking.created
   - booking.confirmed
   - booking.completed
   - message.received
   - payment.processed
   
   // POST to webhook URL:
   {
     "event": "booking.completed",
     "data": { booking_id, client_id, service_id, ... },
     "timestamp": "2026-06-10T14:30:00Z"
   }
   ```

3. **Integrations**
   - **Zapier / Make.com** — connect to 1000+ apps
   - **Google Calendar** — sync bookings to calendar
   - **QuickBooks** — auto-post invoices to accounting
   - **Slack** — send booking notifications to team
   - **HubSpot CRM** — sync clients to CRM pipeline

### Deliverables
- RESTful API with OAuth2 auth
- Webhook system for event subscriptions
- Pre-built integrations (Zapier, Google, QuickBooks)
- API documentation (Swagger/OpenAPI)

---

## Phase 7: Mobile App (Weeks 12–16)

### Goal
Native mobile apps (iOS/Android) for business owners and clients.

### Approach

1. **React Native or Flutter**
   ```bash
   # Option A: React Native (code sharing with web)
   npx react-native init klarpath-mobile
   
   # Option B: Flutter (better performance, Dart)
   flutter create klarpath_mobile
   ```

2. **Features**
   - View bookings in calendar (iOS Calendar sync)
   - Real-time messaging with push notifications
   - One-click appointment confirmation
   - Client reviews & ratings
   - Payment processing (Apple Pay, Google Pay)

3. **Backend Same**
   - Reuse existing API
   - Mobile apps consume `/api/...` endpoints
   - No new backend logic needed (usually)

### Deliverables
- iOS app (TestFlight, App Store)
- Android app (Google Play)
- Push notification service
- Mobile analytics

---

## Phase 8: CRM Workflows & Automation (Weeks 16–20)

### Goal
Advanced CRM features: lead scoring, email sequences, service upsells.

### Features

1. **Lead Scoring**
   ```typescript
   // Rank clients by likelihood to book again
   function calculateLeadScore(client: Client): number {
     let score = 0;
     score += client.lifetime_value > 500 ? 50 : 0;
     score += bookingCount > 5 ? 30 : 0;
     score += daysLastBooking < 30 ? 40 : 0;
     score += messageResponse < 2 // hours ? 20 : 0;
     return score; // 0–100
   }
   ```

2. **Email Sequences**
   ```typescript
   // Automated emails triggered by events
   
   // Sequence 1: Post-Service Follow-up
   - Day 0: "Thanks for choosing us!"
   - Day 3: "How was your service? Leave a review"
   - Day 7: "Book your next service"
   
   // Sequence 2: Win-Back Campaign (dormant clients)
   - Day 0: "We miss you! Here's 20% off"
   - Day 3: "Limited time: Book before 30 June"
   - Day 7: "Last chance: Special offer expires soon"
   ```

3. **Upselling & Cross-Selling**
   ```typescript
   // Recommend services based on history
   
   if (client.lastBooking.service.name === "HVAC Inspection") {
     // Suggest: "AC Repair" or "Filter replacement"
     recommend("AC Repair", discount: 10%);
   }
   ```

### Deliverables
- Lead scoring algorithm
- Email automation workflows
- Upsell recommendations
- Customer retention campaigns

---

## Phase 9: Enterprise Features (Weeks 20+)

### Features

1. **Team Management**
   - Multiple staff/technicians per business
   - Assign bookings to specific team members
   - Track technician performance (ratings, revenue)

2. **Inventory Tracking**
   - Parts/supplies inventory for each business
   - Auto-reorder alerts
   - Cost tracking per booking

3. **Advanced Scheduling**
   - Technician availability calendar
   - Route optimization (visit multiple clients in one trip)
   - Service territory mapping

4. **Compliance & Legal**
   - GDPR data exports
   - SOC 2 compliance
   - Audit logging
   - Data retention policies

5. **White-Label**
   - Custom branding (logo, colors, domain)
   - White-label static websites
   - Reseller program for agencies

---

## Deployment Roadmap

### Current (Local Development)
```bash
docker-compose up
# Runs on localhost:3000
```

### Phase 1: Staging (AWS/GCP)
```
VPC with:
- ECS/EKS for app containers
- RDS PostgreSQL (managed)
- ElastiCache Redis (managed)
- ALB (load balancer)
- CloudFront CDN
- S3 for static assets

Domain: staging.klarpath.com
```

### Phase 2: Production (Multi-Region)
```
Region 1 (Primary): EU-West (Ireland)
- EKS cluster, RDS primary, ElastiCache

Region 2 (Secondary): US-East (Virginia)
- Replica for disaster recovery
- Read-only replicas

Global:
- Route53 for DNS failover
- CloudFlare CDN
- CloudWatch monitoring & alerts
```

---

## Security Roadmap

| Phase | Measure | Status |
|-------|---------|--------|
| 1 | HTTPS/TLS for all traffic | ⏳ Next |
| 2 | Rate limiting on APIs | ⏳ Next |
| 3 | Input validation & XSS protection | ⏳ Next |
| 4 | CORS policy enforcement | ⏳ Next |
| 5 | Database encryption at rest | ⏳ Phase 2 |
| 6 | 2FA for admin login | ⏳ Phase 3 |
| 7 | OWASP Top 10 audit | ⏳ Phase 4 |
| 8 | Penetration testing | ⏳ Phase 5 |
| 9 | SOC 2 Type II certification | ⏳ Phase 9 |

---

## Performance Optimization

| Optimization | Tool | Benefit |
|------|------|---------|
| Database query optimization | Prisma `select`, indexes | Faster queries |
| Caching | Redis | Reduce DB load |
| Image optimization | Next.js Image | Smaller assets |
| Code splitting | Next.js dynamic imports | Faster initial load |
| Database read replicas | PostgreSQL replication | Scale reads |
| CDN for static assets | CloudFront, CloudFlare | Global fast delivery |

---

## Estimated Timeline & Effort

| Phase | Timeline | Team Size | Estimated Cost |
|-------|----------|-----------|-----------------|
| Phase 1 (Current) | 1 week | 1 dev + 1 designer | $5K |
| Phase 2 (UI/UX) | 3 weeks | 1 dev + 1 designer | $15K |
| Phase 3 (Messaging) | 2 weeks | 1 dev | $10K |
| Phase 4 (Payments) | 2 weeks | 1 dev | $12K |
| Phase 5 (Analytics) | 2 weeks | 1 dev | $10K |
| Phase 6 (API) | 2 weeks | 1 dev | $12K |
| Phase 7 (Mobile) | 4 weeks | 2 devs (iOS + Android) | $40K |
| Phase 8 (Automation) | 3 weeks | 1 dev | $15K |
| Phase 9 (Enterprise) | 4+ weeks | 2+ devs | $30K+ |
| **Total** | **23 weeks** | **~1.5–2 avg** | **$149K+** |

---

## Success Metrics

- **User Adoption:** 50+ businesses within 6 months
- **Booking Volume:** 500+ monthly bookings by month 6
- **Customer Satisfaction:** NPS > 50
- **System Uptime:** 99.9% availability
- **Performance:** Page load < 2s (p95)
- **Revenue:** $10K+ MRR by month 12

---

## References & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Prisma ORM:** https://www.prisma.io
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://shadcn.dev
- **Socket.io:** https://socket.io
- **Stripe API:** https://stripe.com/docs
- **AWS Architecture:** https://aws.amazon.com/architecture

---

## Questions & Support

For architectural decisions or implementation guidance, reference:
- `MANUAL_DASHBOARDS.md` — Current feature usage
- `MANUAL_STATIC_WEBSITES.md` — Public API & messaging
- `schema.prisma` — Data model details
- `package.json` — Dependencies and scripts
