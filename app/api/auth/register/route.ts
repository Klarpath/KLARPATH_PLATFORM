import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { businessName, email, password, subdomain } = body
  if (!businessName || !email || !password || !subdomain) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const existing = await prisma.business.findUnique({ where: { subdomain } })
  if (existing) return NextResponse.json({ error: 'subdomain_taken' }, { status: 409 })

  const hashed = await bcrypt.hash(password, 10)
  const business = await prisma.business.create({
    data: {
      name: businessName,
      email,
      subdomain,
      status: 'active',
    },
  })
  const owner = await prisma.businessOwner.create({
    data: {
      business_id: business.id,
      email,
      password_hash: hashed,
      role: 'owner',
    },
  })

  return NextResponse.json({
    business: { id: business.id, name: business.name, subdomain: business.subdomain },
    owner: { id: owner.id, email: owner.email, role: owner.role },
  })
}
