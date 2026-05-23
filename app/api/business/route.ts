import { NextResponse } from 'next/server'
import { getSession } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

export async function GET(req: Request) {
  const session = getSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const all = url.searchParams.get('all') === 'true'
  const requestedBusinessId = url.searchParams.get('businessId')
  const businessId = session.type === 'business_owner' ? session.businessId : requestedBusinessId

  if (session.type === 'admin' && all) {
    const businesses = await prisma.business.findMany({ orderBy: { created_at: 'desc' }, take: 100 })
    return NextResponse.json({ businesses })
  }

  if (!businessId) return NextResponse.json({ error: 'missing_business' }, { status: 400 })

  const business = await prisma.business.findUnique({ where: { id: businessId } })
  if (!business) return NextResponse.json({ error: 'not_found' }, { status: 404 })

  return NextResponse.json({ business })
}

export async function PATCH(req: Request) {
  const session = getSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json()
  const { businessId: requestedBusinessId, name, email, phone, websiteUrl, industry, businessAddress, timezone, status } = body
  const businessId = session.type === 'business_owner' ? session.businessId : requestedBusinessId

  if (!businessId) return NextResponse.json({ error: 'missing_business' }, { status: 400 })

  const business = await prisma.business.update({
    where: { id: businessId },
    data: {
      name,
      email,
      phone,
      website_url: websiteUrl,
      industry,
      business_address: businessAddress,
      timezone,
      status,
    },
  })

  return NextResponse.json({ business })
}
