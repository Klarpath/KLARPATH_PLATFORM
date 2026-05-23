import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export function OPTIONS() {
  return NextResponse.json(null, { headers: CORS_HEADERS })
}

export async function POST(req: Request) {
  const body = await req.json()
  const { subdomain, businessId, clientName, clientEmail, clientPhone, serviceId, bookedAt, durationMinutes, notes } = body

  const business = businessId
    ? await prisma.business.findUnique({ where: { id: businessId } })
    : subdomain
      ? await prisma.business.findUnique({ where: { subdomain } })
      : null

  if (!business) {
    return NextResponse.json({ error: 'business_not_found' }, { status: 404, headers: CORS_HEADERS })
  }

  const [firstName, ...lastNameParts] = (clientName || '').trim().split(' ')
  const lastName = lastNameParts.join(' ') || 'Customer'
  const client = await prisma.client.upsert({
    where: {
      business_id_email: {
        business_id: business.id,
        email: clientEmail || `${firstName.toLowerCase()}@unknown.local`,
      },
    },
    create: {
      business_id: business.id,
      first_name: firstName || 'Guest',
      last_name: lastName,
      email: clientEmail,
      phone: clientPhone,
    },
    update: {
      phone: clientPhone || undefined,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
    },
  })

  const service = serviceId
    ? await prisma.service.findUnique({ where: { id: serviceId } })
    : await prisma.service.findFirst({ where: { business_id: business.id, is_active: true }, orderBy: { created_at: 'asc' } })

  if (!service) {
    return NextResponse.json({ error: 'service_not_found' }, { status: 404, headers: CORS_HEADERS })
  }

  const booking = await prisma.booking.create({
    data: {
      business_id: business.id,
      client_id: client.id,
      service_id: service.id,
      booked_at: new Date(bookedAt),
      duration_minutes: durationMinutes ?? service.duration_minutes,
      notes,
      status: 'pending',
    },
  })

  return NextResponse.json({ booking, client, service }, { headers: CORS_HEADERS })
}
