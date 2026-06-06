import { NextResponse } from 'next/server'
import { getSession } from '../../lib/auth'
import { prisma } from '../../lib/prisma'
import { scheduleEmailReminder, scheduleEmailConfirmation } from '../../lib/queue'

export async function GET(req: Request) {
  const session = getSession(req)
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const all = url.searchParams.get('all') === 'true'
  const requestedBusinessId = url.searchParams.get('businessId')

  const businessId = session.type === 'business_owner'
    ? session.businessId
    : requestedBusinessId || undefined

  if (session.type === 'business_owner' && !businessId) {
    return NextResponse.json({ error: 'missing_business' }, { status: 400 })
  }

  const where = businessId ? { business_id: businessId } : undefined

  const bookings = await prisma.booking.findMany({
    where,
    orderBy: { created_at: 'desc' },
    include: { client: true, service: true },
    take: 100,
  })

  return NextResponse.json({ bookings })
}

export async function POST(req: Request) {
  const session = getSession(req)
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json()
  const { clientId, serviceId, bookedAt, durationMinutes, notes, businessId: requestedBusinessId } = body
  const businessId = session.type === 'business_owner'
    ? session.businessId
    : requestedBusinessId

  if (!businessId || !clientId || !serviceId || !bookedAt) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const booking = await prisma.booking.create({
    data: {
      business_id: businessId,
      client_id: clientId,
      service_id: serviceId,
      booked_at: new Date(bookedAt),
      duration_minutes: durationMinutes ?? 60,
      notes,
      status: 'pending',
    },
  })

  // Schedule email confirmation immediately
  try {
    await scheduleEmailConfirmation(booking.id)
  } catch (error) {
    console.error('Failed to schedule confirmation email:', error)
  }

  // Schedule email reminder for 24 hours before booking
  try {
    const reminderDelay = new Date(bookedAt).getTime() - Date.now() - (24 * 60 * 60 * 1000)
    if (reminderDelay > 0) {
      await scheduleEmailReminder(booking.id, reminderDelay)
    }
  } catch (error) {
    console.error('Failed to schedule reminder email:', error)
  }

  return NextResponse.json({ booking })
}
