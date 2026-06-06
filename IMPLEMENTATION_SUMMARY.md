# Implementation Summary: Security & Background Job Processing

This document outlines all the security improvements and new features implemented for your KlarPath CRM platform.

## Overview of Changes

### 1. ✅ Safe Database Migrations (Completed)

**What changed:**
- Updated `package.json` scripts to use `prisma migrate deploy` instead of `prisma db push --accept-data-loss`
- Added new migration-friendly scripts

**Package.json changes:**
```json
{
  "scripts": {
    "start": "prisma migrate deploy && next start -p 3000",
    "db:migrate:dev": "prisma migrate dev",
    "db:migrate:deploy": "prisma migrate deploy"
  }
}
```

**Why it matters:**
- ❌ `--accept-data-loss` silently deletes tables during production deployments
- ✅ `prisma migrate deploy` uses versioned SQL files for safe, atomic updates

**How to use locally:**
```bash
# Create a new migration
npm run db:migrate:dev

# Deploy in production
npm run db:migrate:deploy
```

**Production deployment:**
Your Coolify setup should run `npm run db:migrate:deploy` in the build process before starting the app.

---

### 2. ✅ Authentication Middleware (Completed)

**File created:** `middleware.ts`

**What it does:**
- Validates JWT tokens on every request to protected routes
- Injects tenant context (`x-business-id`, `x-user-id`) into headers
- Enforces RBAC (Role-Based Access Control)
- Prevents business owners from accessing admin routes

**Key features:**
```typescript
// Automatically validates JWT from kp_token cookie
// Injects headers for easy access in API routes:
// - x-business-id: The business ID from JWT
// - x-user-id: The user ID from JWT  
// - x-user-role: The user role (owner, manager, staff, etc.)
// - x-user-type: The user type (admin or business_owner)

// Protected routes: /dashboard/*, /admin/*, /api/*
// Public routes: /api/auth/*, /login, /register, /api/public/*
```

**Protected routes:**
- `/dashboard/*` - Business owner dashboards
- `/admin/*` - Admin panels (restricted to admins only)
- `/api/*` - API endpoints (except `/api/auth` and `/api/public`)

**Usage in your API routes:**
```typescript
// Before: Had to decode JWT in every route
const session = getSession()
const businessId = session.businessId

// After: Can read from middleware headers
const businessId = request.headers.get('x-business-id')
```

---

### 3. ✅ BullMQ Background Job Queue (Completed)

**File created:** `app/lib/queue.ts`

**What it does:**
- Processes email jobs asynchronously using Redis
- Handles booking reminders, confirmations, and cancellations
- Supports scheduled delays (e.g., send reminder 24 hours before booking)

**Three exported functions:**
```typescript
scheduleEmailReminder(bookingId, delayMs)      // Scheduled email
scheduleEmailConfirmation(bookingId)           // Immediate email
scheduleEmailCancellation(bookingId)           // Immediate email
```

**How it works:**
1. When a booking is created, emails are scheduled via BullMQ
2. Jobs are stored in Redis queue
3. A separate worker process picks up and executes jobs
4. Failures are logged and can be retried

**Configuration:**
The queue connects to Redis using `REDIS_URL` environment variable:
```bash
REDIS_URL=redis://127.0.0.1:6379  # Default for Docker
```

---

### 4. ✅ Email Worker Process (Completed)

**File created:** `worker.ts`

**What it does:**
- Runs as a separate process to handle background jobs
- Listens to Redis for new email jobs
- Sends emails using nodemailer
- Logs job completion/failure

**How to run locally:**
```bash
npm run worker
```

**How to deploy:**
In production (Coolify), create a separate container or service:
```dockerfile
# Deploy as a separate service alongside your main app
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
CMD ["npm", "run", "worker"]
```

Or in `docker-compose.yml`:
```yaml
worker:
  build: .
  command: npm run worker
  environment:
    - REDIS_URL=redis://redis:6379
    - DATABASE_URL=postgresql://...
  depends_on:
    - redis
    - postgres
```

---

### 5. ✅ Updated Booking API (Completed)

**File changed:** `app/api/bookings/route.ts`

**What changed:**
- Booking creation now automatically schedules confirmation emails
- Reminders are scheduled for 24 hours before the booking

```typescript
// When a booking is created:
const booking = await prisma.booking.create(...)

// 1. Schedule confirmation email (sent immediately via queue)
await scheduleEmailConfirmation(booking.id)

// 2. Schedule reminder email (24 hours before booking)
const reminderDelay = bookedAt - now - (24 * 60 * 60 * 1000)
await scheduleEmailReminder(booking.id, reminderDelay)
```

---

## Security Audit Results

### ✅ Tenant Isolation - PASSED
Your API routes correctly:
- Force `business_id` from JWT session for business owners
- Require admin verification for multi-business queries
- Use database `onDelete: Cascade` to prevent orphaned data

### ✅ Authentication - PASSED
Your JWT implementation:
- Uses HTTP-only cookies (secure)
- Validates in middleware before route access
- Enforces expiration (7 days)

### ⚠️ Recommended Additional Changes

1. **Add role validation to sensitive routes:**
   ```typescript
   // In API routes that modify data
   const session = requireSession() // or requireAdmin()
   ```

2. **Add activity logging:**
   ```typescript
   // Log sensitive operations to audit_log table
   await prisma.auditLog.create({
     data: {
       user_id: session.sub,
       user_type: session.type,
       action: 'create_booking',
       resource_type: 'booking',
       resource_id: booking.id,
       business_id: session.businessId,
     }
   })
   ```

---

## Deployment Checklist

### Local Development

- ✅ Updated `package.json` with safe scripts
- ✅ Created `middleware.ts` for request validation
- ✅ Created `app/lib/queue.ts` for job processing
- ✅ Created `worker.ts` for background processing
- ✅ Updated booking API to schedule emails
- ✅ Added dependencies: `bullmq`, `redis`, `nodemailer`, `tsx`

### Before Production Deployment

- [ ] Run initial migration: `npm run db:migrate:dev` and commit migration files to git
- [ ] Set `REDIS_URL` environment variable in Coolify
- [ ] Set `JWT_SECRET` environment variable (strong random string)
- [ ] Set email configuration: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- [ ] Deploy worker as separate service/container
- [ ] Test booking creation to verify email scheduling
- [ ] Monitor worker logs for job processing

### Environment Variables Needed

```bash
# Required
JWT_SECRET=your-secure-random-secret-here
DATABASE_URL=postgresql://user:password@postgres:5432/klarpath_crm
REDIS_URL=redis://redis:6379

# Optional (for email configuration)
# MailHog was removed from `docker-compose.yml`.
# For local testing, run MailHog separately and use:
# SMTP_HOST=localhost
# SMTP_PORT=1025
# For production, point to a real SMTP provider:
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your-user
# SMTP_PASSWORD=your-password
```

---

## Testing the Implementation

### 1. Test Middleware Protection
```bash
# Should redirect to login
curl -v http://localhost:3000/dashboard

# Should return 401 on API
curl -v http://localhost:3000/api/bookings
```

### 2. Test Email Queue
```bash
# Terminal 1: Start your app
npm run dev

# Terminal 2: Start the worker
npm run worker

# Terminal 3: Create a test booking
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"clientId":"...","serviceId":"...","bookedAt":"2026-06-05T10:00:00Z"}'

# You should see:
# - Job scheduled in Terminal 2
# - Emails in your mailhog inbox (http://localhost:1025)
```

### 3. Test Migrations
```bash
# Create a test migration
npm run db:migrate:dev

# See the generated migration file
ls prisma/migrations/

# Deploy it
npm run db:migrate:deploy
```

---

## Next Steps

1. **Commit the migration files** to git (after running `db:migrate:dev`)
2. **Test locally** with the worker running
3. **Deploy worker service** in your Coolify environment
4. **Monitor logs** for any queue processing issues
5. **Add audit logging** to sensitive operations
6. **Consider implementing** request rate limiting on public API endpoints

---

## Files Modified/Created

- ✅ `package.json` - Updated scripts and dependencies
- ✅ `middleware.ts` - JWT validation and tenant isolation
- ✅ `app/lib/queue.ts` - BullMQ queue configuration
- ✅ `worker.ts` - Background job processor
- ✅ `app/api/bookings/route.ts` - Email scheduling on booking creation
- 📁 `prisma/migrations/` - Auto-generated by Prisma

---

## Questions?

Refer to the official documentation:
- Prisma Migrations: https://www.prisma.io/docs/orm/prisma-migrate
- BullMQ: https://docs.bullmq.io/
- Next.js Middleware: https://nextjs.org/docs/app/building-your-application/routing/middleware
- Nodemailer: https://nodemailer.com/

