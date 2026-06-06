import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export async function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  // 1. Skip middleware for static assets and public routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/public') ||
    pathname.startsWith('/api/auth') ||
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/'
  ) {
    return NextResponse.next()
  }

  // 2. Retrieve JWT from cookies
  const token = request.cookies.get('kp_token')?.value

  if (!token) {
    // If accessing an API, return 401; otherwise redirect to login page
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    // 3. Verify JWT using jsonwebtoken
    const payload = jwt.verify(token, JWT_SECRET) as any

    // 4. Tenant Isolation: Inject business context into headers
    // This allows your API routes and Server Components to access the businessId
    // without having to decode the JWT every single time.
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-business-id', (payload.businessId as string) || '')
    requestHeaders.set('x-user-id', (payload.sub as string) || '')
    requestHeaders.set('x-user-role', (payload.role as string) || '')
    requestHeaders.set('x-user-type', (payload.type as string) || '')

    // 5. RBAC: Prevent Business Owners from accessing Admin routes
    if (pathname.startsWith('/admin/dashboard') && payload.type !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // 6. Continue with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  } catch (error) {
    // Token is invalid or expired
    console.error('Middleware JWT Error:', error)
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// Ensure the middleware runs on dashboard and internal API routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/api/:path*',
  ],
}
