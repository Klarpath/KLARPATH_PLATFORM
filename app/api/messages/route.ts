import { NextResponse } from 'next/server'
import { getSession } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

export async function GET(req: Request) {
  const session = getSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const businessId = session.type === 'business_owner' ? session.businessId : url.searchParams.get('businessId')
  if (!businessId) return NextResponse.json({ error: 'missing_business' }, { status: 400 })

  const messages = await prisma.message.findMany({
    where: { business_id: businessId },
    orderBy: { created_at: 'desc' },
    include: { client: true },
    take: 100,
  })

  return NextResponse.json({ messages })
}

export async function POST(req: Request) {
  const session = getSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json()
  const { clientId, content, senderType, businessId: requestedBusinessId } = body
  const businessId = session.type === 'business_owner' ? session.businessId : requestedBusinessId

  if (!businessId || !clientId || !content || !senderType) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const message = await prisma.message.create({
    data: {
      business_id: businessId,
      client_id: clientId,
      sender_type: senderType,
      sender_id: session.type === 'business_owner' ? session.sub : undefined,
      content,
    },
  })

  return NextResponse.json({ message })
}
