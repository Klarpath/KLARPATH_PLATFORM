import { NextResponse } from 'next/server'
import { requireAdmin } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'

const TABLES = {
  admins: 'admin',
  businesses: 'business',
  business_owners: 'businessOwner',
  clients: 'client',
  bookings: 'booking',
  messages: 'message',
  services: 'service',
  subscriptions: 'subscription',
  payments: 'payment',
}

export async function GET(req: Request, context: { params: Promise<{ table: string }> }) {
  try {
    requireAdmin(req)

    const { table } = await context.params
    const limit = 50

    if (!TABLES[table]) {
      return NextResponse.json({ error: 'Table not found' }, { status: 404 })
    }

    const modelName = TABLES[table]
    
    let data: any[] = []
    let count = 0

    // Use switch to handle different models
    switch (modelName) {
      case 'admin':
        data = await prisma.admin.findMany({ take: limit })
        count = await prisma.admin.count()
        break
      case 'business':
        data = await prisma.business.findMany({ take: limit })
        count = await prisma.business.count()
        break
      case 'businessOwner':
        data = await prisma.businessOwner.findMany({ take: limit })
        count = await prisma.businessOwner.count()
        break
      case 'client':
        data = await prisma.client.findMany({ take: limit })
        count = await prisma.client.count()
        break
      case 'booking':
        data = await prisma.booking.findMany({ take: limit })
        count = await prisma.booking.count()
        break
      case 'message':
        data = await prisma.message.findMany({ take: limit })
        count = await prisma.message.count()
        break
      case 'service':
        data = await prisma.service.findMany({ take: limit })
        count = await prisma.service.count()
        break
      case 'subscription':
        data = await prisma.subscription.findMany({ take: limit })
        count = await prisma.subscription.count()
        break
      case 'payment':
        data = await prisma.payment.findMany({ take: limit })
        count = await prisma.payment.count()
        break
    }

    return NextResponse.json({
      table,
      count,
      limit,
      data: data.map((item) => {
        // Omit password hashes for security
        const copy = { ...item }
        if ('password_hash' in copy) delete copy.password_hash
        return copy
      }),
    })
  } catch (error) {
    console.error('Error fetching table data:', error)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
