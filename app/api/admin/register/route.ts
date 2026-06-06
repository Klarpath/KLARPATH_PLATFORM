import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { requireAdmin } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request) {
  try {
    requireAdmin(req)

    const { type, email, password, ...data } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    if (type === 'admin') {
      // Register new admin
      const existing = await prisma.admin.findUnique({ where: { email } })
      if (existing) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
      }

      const admin = await prisma.admin.create({
        data: {
          email,
          password_hash: passwordHash,
          role: data.role || 'moderator',
        },
      })

      return NextResponse.json({
        success: true,
        admin: { id: admin.id, email: admin.email, role: admin.role },
      })
    } else if (type === 'business') {
      // Register new business with owner
      const businessEmail = data.businessEmail || email
      const businessName = data.businessName

      if (!businessName) {
        return NextResponse.json({ error: 'Business name required' }, { status: 400 })
      }

      const existingBusiness = await prisma.business.findFirst({
        where: { OR: [{ email: businessEmail }, { subdomain: data.subdomain }] },
      })

      if (existingBusiness) {
        return NextResponse.json({ error: 'Business email or subdomain already exists' }, { status: 400 })
      }

      const existingOwner = await prisma.businessOwner.findFirst({
        where: { email },
      })

      if (existingOwner) {
        return NextResponse.json({ error: 'Owner email already registered' }, { status: 400 })
      }

      // Create business with owner
      const business = await prisma.business.create({
        data: {
          name: businessName,
          email: businessEmail,
          subdomain: data.subdomain,
          phone: data.phone,
          industry: data.industry,
          business_owners: {
            create: {
              email,
              password_hash: passwordHash,
              first_name: data.firstName,
              last_name: data.lastName,
              role: 'owner',
            },
          },
        },
        include: {
          business_owners: { select: { id: true, email: true, first_name: true, last_name: true } },
        },
      })

      return NextResponse.json({
        success: true,
        business: {
          id: business.id,
          name: business.name,
          email: business.email,
          subdomain: business.subdomain,
          owner: business.business_owners[0],
        },
      })
    } else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error registering:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
