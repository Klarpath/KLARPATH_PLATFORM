import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'missing' }, { status: 400 })

  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })

  const ok = await bcrypt.compare(password, admin.password_hash)
  if (!ok) return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })

  const token = jwt.sign({ sub: admin.id, role: admin.role, type: 'admin' }, JWT_SECRET, { expiresIn: '7d' })
  const res = NextResponse.json({ token, user: { id: admin.id, email: admin.email, role: admin.role, type: 'admin' } })
  res.cookies.set('kp_token', token, { httpOnly: true, path: '/' })
  return res
}
