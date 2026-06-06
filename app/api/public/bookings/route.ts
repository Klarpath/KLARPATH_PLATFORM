import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { scheduleEmailReminder, scheduleEmailConfirmation } from '../../../lib/queue'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// Helper function to check if booking time is within business availability
async function isTimeSlotAvailable(businessId: string, bookedAtDate: Date, durationMinutes: number): Promise<{ available: boolean; reason?: string }> {
  const dayOfWeek = bookedAtDate.getDay() // 0 = Sunday, 6 = Saturday
  
  // Check if business is open on this day
  const availability = await prisma.availability.findFirst({
    where: {
      business_id: businessId,
      day_of_week: dayOfWeek,
    },
  })

  if (!availability) {
    return { available: false, reason: 'Business is closed on this day' }
  }

  // Check business hours
  const slotStart = bookedAtDate
  const slotEnd = new Date(slotStart.getTime() + durationMinutes * 60000)

  // Parse business hours (assuming format HH:MM)
  const [startHourStr, startMinStr] = availability.start_time.toString().split(':')
  const [endHourStr, endMinStr] = availability.end_time.toString().split(':')
  const startHour = parseInt(startHourStr)
  const startMin = parseInt(startMinStr) || 0
  const endHour = parseInt(endHourStr)
  const endMin = parseInt(endMinStr) || 0

  const businessStart = new Date(slotStart)
  businessStart.setHours(startHour, startMin, 0, 0)
  const businessEnd = new Date(slotStart)
  businessEnd.setHours(endHour, endMin, 0, 0)

  if (slotStart < businessStart || slotEnd > businessEnd) {
    return { available: false, reason: `Business hours are ${startHour}:${startMinStr || '00'} - ${endHour}:${endMinStr || '00'}` }
  }

  // Check for conflicting bookings
  const conflictingBooking = await prisma.booking.findFirst({
    where: {
      business_id: businessId,
      booked_at: {
        gte: new Date(slotStart.getTime() - durationMinutes * 60000),
        lte: slotEnd,
      },
      status: {
        in: ['pending', 'confirmed', 'completed'],
      },
    },
  })

  if (conflictingBooking) {
    return { available: false, reason: 'This time slot is already booked' }
  }

  // Check for availability exceptions (closed dates)
  const exception = await prisma.availabilityException.findFirst({
    where: {
      business_id: businessId,
      date: {
        gte: new Date(bookedAtDate.getFullYear(), bookedAtDate.getMonth(), bookedAtDate.getDate()),
        lt: new Date(bookedAtDate.getFullYear(), bookedAtDate.getMonth(), bookedAtDate.getDate() + 1),
      },
    },
  })

  if (exception) {
    return { available: false, reason: exception.reason || 'Business is closed on this date' }
  }

  return { available: true }
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

  // Check if the requested time slot is available
  const availabilityCheck = await isTimeSlotAvailable(business.id, new Date(bookedAt), durationMinutes ?? service.duration_minutes)
  if (!availabilityCheck.available) {
    return NextResponse.json({ error: 'slot_unavailable', reason: availabilityCheck.reason }, { status: 409, headers: CORS_HEADERS })
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

  // Schedule confirmation email
  try {
    await scheduleEmailConfirmation(booking.id)
  } catch (error) {
    console.error('Failed to schedule confirmation email:', error)
  }

  // Schedule reminder email 24 hours before booking
  try {
    const reminderDelay = new Date(bookedAt).getTime() - Date.now() - (24 * 60 * 60 * 1000)
    if (reminderDelay > 0) {
      await scheduleEmailReminder(booking.id, reminderDelay)
    }
  } catch (error) {
    console.error('Failed to schedule reminder email:', error)
  }

  return NextResponse.json({ booking, client, service }, { headers: CORS_HEADERS })
}
