# Klarpath Platform Security Overview

This document outlines the security measures and considerations implemented in the Klarpath platform, focusing on authentication, authorization, multi-tenancy, and data handling.

## 1. Authentication

The platform utilizes JSON Web Tokens (JWT) for user authentication and session management.

*   **JWT Implementation:**
    *   Users (Admin and Business Owners) authenticate by providing email and password to dedicated API endpoints (`/api/auth/admin-login`, `/api/auth/login`, or `/api/auth/unified-login`).
    *   Upon successful authentication, a JWT is generated and signed using a secret key (`JWT_SECRET`).
    *   The JWT payload contains essential user information:
        *   `sub`: User ID.
        *   `role`: User's role (e.g., `admin`, `owner`).
        *   `type`: User type (e.g., `admin`, `business_owner`).
        *   `businessId`: **Crucially, for `business_owner` type, this field contains the ID of the business they manage, enabling multi-tenancy.**
    *   Tokens are configured with an expiration time (`expiresIn: '7d'`) to limit session duration.
*   **Password Security:**
    *   User passwords are never stored in plain text. `bcryptjs` is used to hash passwords before storing them in the database.
    *   Password verification involves comparing the provided password with the stored hash using `bcrypt.compare`.
*   **Secure Cookie Storage:**
    *   The generated JWT (`kp_token`) is stored in an `httpOnly` cookie. This prevents client-side JavaScript from accessing the token, mitigating the risk of Cross-Site Scripting (XSS) attacks.

## 2. Authorization and Multi-Tenancy

The platform is designed with a multi-tenancy model to ensure data isolation between businesses.

*   **Role-Based Access Control (RBAC):**
    *   The `role` and `type` fields within the JWT payload determine the user's permissions and access level.
    *   Admin users (`type: 'admin'`) have platform-wide access, allowing them to view and manage data across all businesses (e.g., `/api/admin/dashboard`, `/api/admin/db/[table]`).
    *   Business owners (`type: 'business_owner'`) have restricted access, primarily to data associated with their specific business.
*   **Data Isolation via `business_id`:**
    *   For business owners, the `businessId` from their JWT payload is automatically extracted by API routes (e.g., `/api/messages`, `/api/clients`, `/api/bookings`).
    *   All database queries initiated by a business owner are filtered by this `businessId` (`where: { business_id: businessId }`), ensuring they can only access or modify data belonging to their own business.
    *   Admin-specific routes (e.g., `/api/admin/*`) often use a `requireAdmin()` function (from `lib/auth.ts`) to enforce admin-only access.

## 3. Public API Endpoints

The platform provides public API endpoints for external interactions, such as receiving messages from static websites.

*   **`app/api/public/messages/route.ts`:**
    *   This endpoint is designed to be accessible by unauthenticated external clients (e.g., static business websites like `hvac.klarpath.com`).
    *   Messages are targeted to a specific business by including `businessId` or `subdomain` in the request body.
    *   **CORS Configuration:** The endpoint explicitly sets `Access-Control-Allow-Origin: '*'`. This allows requests from any domain, which is necessary for cross-origin communication from static websites hosted on different subdomains.
        *   **Recommendation:** For production environments, it is strongly advised to restrict `Access-Control-Allow-Origin` to a whitelist of known, trusted domains (e.g., `https://hvac.klarpath.com`, `https://plumbers.klarpath.com`) to prevent potential abuse from untrusted origins.

## 4. Sensitive Data Handling

*   Passwords are never exposed in API responses.
*   Other sensitive user data should be handled with care and only exposed when necessary and to authorized users.

## 5. Environment Variables

*   The `JWT_SECRET` is a critical security parameter. In production, it **must** be a strong, randomly generated secret and stored securely (e.g., in environment variables, secret management services) rather than using the `dev-secret` fallback.

## 6. Future Security Enhancements (as per README)

The platform is designed to incorporate further security features:

*   **2FA (Two-Factor Authentication):** To add an extra layer of security for user logins.
*   **Google Authentication:** To provide alternative, secure login methods.
*   **Rate Limiting:** To protect API endpoints from brute-force attacks and abuse.
*   **Comprehensive Input Validation:** To prevent injection attacks and ensure data integrity across all API routes.

This document provides a high-level overview. For detailed implementation, refer to the relevant source code files.