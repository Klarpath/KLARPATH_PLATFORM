import { NextResponse } from 'next/server'
import { getSession } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  const session = getSession()
  if (!session) return NextResponse.json({ user: null })

  if (session.type === 'business_owner') {
    const owner = await prisma.businessOwner.findUnique({
      where: { id: session.sub },
      include: { business: true },
    })
    if (!owner) return NextResponse.json({ user: null })
    return NextResponse.json({
      user: {
        id: owner.id,
        email: owner.email,
        role: owner.role,
        type: 'business_owner',
        business: {
          id: owner.business.id,
          name: owner.business.name,
          email: owner.business.email,
          subdomain: owner.business.subdomain,
          status: owner.business.status,
        },
      },
    })
  }

  if (session.type === 'admin') {
    const admin = await prisma.admin.findUnique({ where: { id: session.sub } })
    if (!admin) return NextResponse.json({ user: null })
    return NextResponse.json({
      user: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        type: 'admin',
      },
    })
  }

  return NextResponse.json({ user: null })
}
