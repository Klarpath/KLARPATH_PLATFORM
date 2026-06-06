import { NextResponse } from 'next/server'
import { getSession } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

export async function GET(req: Request) {
  const session = getSession(req)
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const all = url.searchParams.get('all') === 'true'
  const requestedBusinessId = url.searchParams.get('businessId')

  const businessId = session.type === 'business_owner'
    ? session.businessId
    : all ? undefined : requestedBusinessId

  const where = businessId ? { business_id: businessId } : undefined
  const clients = await prisma.client.findMany({ where, orderBy: { created_at: 'desc' }, take: 100 })

  return NextResponse.json({ clients })
}

export async function POST(req: Request) {
  const session = getSession(req)
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json()
  const { firstName, lastName, email, phone, address, city, postcode, businessId: requestedBusinessId } = body
  const businessId = session.type === 'business_owner' ? session.businessId : requestedBusinessId

  if (!businessId || !firstName || !lastName) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const client = await prisma.client.create({
    data: {
      business_id: businessId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
      city,
      postcode,
    },
  })

  return NextResponse.json({ client })
}
