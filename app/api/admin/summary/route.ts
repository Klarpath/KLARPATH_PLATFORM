import { NextResponse } from 'next/server'
import { requireSession } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  const session = requireSession(req)
  if (session.type !== 'admin') return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const [businessCount, clientCount, bookingCount, pendingBookingCount, unreadMessages] = await Promise.all([
    prisma.business.count(),
    prisma.client.count(),
    prisma.booking.count(),
    prisma.booking.count({ where: { status: 'pending' } }),
    prisma.message.count({ where: { is_read: false } }),
  ])

  const latestBusinesses = await prisma.business.findMany({ orderBy: { created_at: 'desc' }, take: 5 })
  const latestBookings = await prisma.booking.findMany({
    orderBy: { created_at: 'desc' },
    take: 5,
    include: { client: true, service: true },
  })

  return NextResponse.json({
    summary: {
      businessCount,
      clientCount,
      bookingCount,
      pendingBookingCount,
      unreadMessages,
    },
    latestBusinesses,
    latestBookings,
  })
}
