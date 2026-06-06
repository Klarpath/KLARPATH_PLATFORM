import { NextResponse } from 'next/server'
import { requireAdmin } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    requireAdmin(req)

    // Get counts for all main entities
    const [adminCount, businessCount, businessOwnerCount, clientCount, bookingCount, messageCount] = await Promise.all([
      prisma.admin.count(),
      prisma.business.count(),
      prisma.businessOwner.count(),
      prisma.client.count(),
      prisma.booking.count(),
      prisma.message.count(),
    ])

    // Get recent activity
    const recentBookings = await prisma.booking.findMany({
      take: 10,
      orderBy: { created_at: 'desc' },
      include: {
        client: { select: { first_name: true, last_name: true } },
        service: { select: { name: true } },
        business: { select: { name: true } },
      },
    })

    const recentMessages = await prisma.message.findMany({
      take: 10,
      orderBy: { created_at: 'desc' },
      include: {
        client: { select: { first_name: true, last_name: true } },
        business: { select: { name: true } },
      },
    })

    // Get platform health metrics
    const activeBusinesses = await prisma.business.count({
      where: { status: 'active' },
    })

    const pendingBookings = await prisma.booking.count({
      where: { status: 'pending' },
    })

    const unreadMessages = await prisma.message.count({
      where: { is_read: false },
    })

    return NextResponse.json({
      summary: {
        adminCount,
        businessCount,
        activeBusinesses,
        businessOwnerCount,
        clientCount,
        bookingCount,
        pendingBookings,
        messageCount,
        unreadMessages,
      },
      recentBookings,
      recentMessages,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
