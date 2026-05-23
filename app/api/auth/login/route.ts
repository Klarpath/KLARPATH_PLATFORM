import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'missing' }, { status: 400 })

  const owner = await prisma.businessOwner.findFirst({ where: { email } })
  if (!owner) return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })

  const ok = await bcrypt.compare(password, owner.password_hash)
  if (!ok) return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })

  const token = jwt.sign({ sub: owner.id, businessId: owner.business_id, role: owner.role, type: 'business_owner' }, JWT_SECRET, { expiresIn: '7d' })
  const res = NextResponse.json({
    token,
    user: {
      id: owner.id,
      email: owner.email,
      role: owner.role,
      type: 'business_owner',
      businessId: owner.business_id,
    },
  })
  res.cookies.set('kp_token', token, { httpOnly: true, path: '/' })
  return res
}
