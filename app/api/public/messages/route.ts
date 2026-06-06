import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { getEmailQueueInstance } from '../../../lib/queue'

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
  const { subdomain, businessId, name, email, phone, message } = body

  const business = businessId
    ? await prisma.business.findUnique({ where: { id: businessId } })
    : subdomain
      ? await prisma.business.findUnique({ where: { subdomain } })
      : null

  if (!business) {
    return NextResponse.json({ error: 'business_not_found' }, { status: 404, headers: CORS_HEADERS })
  }

  const [firstName, ...lastNameParts] = (name || '').trim().split(' ')
  const lastName = lastNameParts.join(' ') || 'Customer'
  const clientEmail = email || `${firstName?.toLowerCase() || 'guest'}@unknown.local`

  const client = await prisma.client.upsert({
    where: {
      business_id_email: {
        business_id: business.id,
        email: clientEmail,
      },
    },
    update: {
      phone,
      first_name: firstName || 'Guest',
      last_name: lastName,
    },
    create: {
      business_id: business.id,
      first_name: firstName || 'Guest',
      last_name: lastName,
      email: email || null,
      phone: phone || null,
    },
  })

  const created = await prisma.message.create({
    data: {
      business_id: business.id,
      client_id: client.id,
      sender_type: 'client',
      sender_id: null,
      content: message || 'New message from website lead',
    },
  })

  // Schedule notification email via BullMQ for active business owners
  try {
    const owners = await prisma.businessOwner.findMany({ where: { business_id: business.id, is_active: true } })
    const recipients = (owners && owners.length > 0) ? owners.map(o => o.email).filter(Boolean) : [business.email]

    const subject = `New message from ${client.first_name} ${client.last_name}`
    const body = `${message || created.content}\n\nFrom: ${client.first_name} ${client.last_name}\nEmail: ${client.email || 'N/A'}\nPhone: ${client.phone || 'N/A'}`

    const emailQueue = getEmailQueueInstance()

    for (const recipient of recipients) {
      if (!recipient) continue
      // Queue the notification via BullMQ instead of saving to database
      await emailQueue.add('send_message_notification', {
        recipientEmail: recipient,
        subject,
        body,
        businessId: business.id,
      })
    }
  } catch (err) {
    // non-fatal: log and continue
    console.error('Failed to queue notification emails', err)
  }

  return NextResponse.json({ message: created, client }, { headers: CORS_HEADERS })
}
