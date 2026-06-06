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

  const services = await prisma.service.findMany({
    where: businessId ? { business_id: businessId } : undefined,
    orderBy: { created_at: 'desc' },
    take: 100,
  })

  return NextResponse.json({ services })
}

export async function POST(req: Request) {
  const session = getSession(req)
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json()
  const { name, description, durationMinutes, price, isActive, businessId: requestedBusinessId } = body
  const businessId = session.type === 'business_owner' ? session.businessId : requestedBusinessId

  if (!businessId || !name) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const service = await prisma.service.create({
    data: {
      business_id: businessId,
      name,
      description,
      duration_minutes: durationMinutes ?? 60,
      price,
      is_active: isActive ?? true,
    },
  })

  return NextResponse.json({ service })
}
