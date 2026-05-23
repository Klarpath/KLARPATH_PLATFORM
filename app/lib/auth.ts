import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export type SessionPayload = {
  sub: string
  businessId?: string
  role: string
  type: 'business_owner' | 'admin'
}

export function signSession(payload: SessionPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function getToken() {
  return cookies().get('kp_token')?.value ?? null
}

export function getSession(): SessionPayload | null {
  const token = getToken()
  if (!token) return null

  try {
    return jwt.verify(token, JWT_SECRET) as SessionPayload
  } catch (error) {
    return null
  }
}

export function requireSession(): SessionPayload {
  const session = getSession()
  if (!session) throw new Error('unauthorized')
  return session
}

export function requireAdmin(): SessionPayload {
  const session = requireSession()
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
