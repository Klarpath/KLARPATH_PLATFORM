import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export type SessionPayload = {
  sub: string
  businessId?: string
  role: string
  type: 'business_owner' | 'admin'
}

function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {}
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((cookie) => cookie.trim().split('='))
      .filter((pair) => pair[0])
      .map(([key, ...rest]) => [key, rest.join('=')])
  )
}

export function signSession(payload: SessionPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function getToken(req: Request) {
  const cookieHeader = req.headers.get('cookie')
  const cookies = parseCookies(cookieHeader)
  return cookies['kp_token'] ?? null
}

export function getSession(req: Request): SessionPayload | null {
  const token = getToken(req)
  if (!token) return null

  try {
    return jwt.verify(token, JWT_SECRET) as SessionPayload
  } catch (error) {
    return null
  }
}

export function requireSession(req: Request): SessionPayload {
  const session = getSession(req)
  if (!session) throw new Error('unauthorized')
  return session
}

export function requireAdmin(req: Request): SessionPayload {
  const session = requireSession(req)
  if (session.type !== 'admin') throw new Error('unauthorized')
  return session
}

export async function getCurrentOwner(session: SessionPayload) {
  if (session.type !== 'business_owner') return null
  return prisma.businessOwner.findUnique({ where: { id: session.sub } })
}

export async function getCurrentBusiness(session: SessionPayload) {
  if (!session.businessId) return null
  return prisma.business.findUnique({ where: { id: session.businessId } })
}
