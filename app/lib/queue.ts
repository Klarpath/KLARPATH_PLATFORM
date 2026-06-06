import { Queue, Worker } from 'bullmq'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379'

let emailQueue: Queue | undefined
let emailWorker: Worker | undefined

function getEmailQueue() {
  if (!emailQueue) {
    emailQueue = new Queue('email-queue', {
      connection: {
        url: REDIS_URL,
      },
    })
  }

  return emailQueue
}

function getEmailWorker() {
  if (!emailWorker) {
    emailWorker = new Worker(
      'email-queue',
      async (job) => {
        console.log(`Processing job ${job.id}: ${job.name}`)

        if (job.name === 'send_reminder') {
          await handleSendReminder(job.data)
        } else if (job.name === 'send_confirmation') {
          await handleSendConfirmation(job.data)
        } else if (job.name === 'send_cancellation') {
          await handleSendCancellation(job.data)
        } else if (job.name === 'send_message_notification') {
          await handleSendMessageNotification(job.data)
        }

        console.log(`Job ${job.id} completed successfully`)
      },
      {
        connection: {
          url: REDIS_URL,
        },
      }
    )

    emailWorker.on('completed', (job) => {
      console.log(`Job ${job.id} has been completed`)
    })

    emailWorker.on('failed', (job, err) => {
      console.error(`Job ${job?.id} failed with error:`, err)
    })
  }

  return emailWorker
}

// Email transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: parseInt(process.env.SMTP_PORT || '1025'),
  secure: false,
  auth: process.env.SMTP_USER ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  } : undefined,
})

// Worker to process email jobs is instantiated lazily only when needed

export function getEmailQueueInstance() {
  return getEmailQueue()
}

export function getEmailWorkerInstance() {
  return getEmailWorker()
}

// Handle booking reminder emails
async function handleSendReminder(data: { bookingId: string }) {
  const booking = await prisma.booking.findUnique({
    where: { id: data.bookingId },
    include: { client: true, service: true, business: true },
  })

  if (!booking || !booking.client.email) return

  const emailBody = `
    <h2>Booking Reminder</h2>
    <p>Hi ${booking.client.first_name},</p>
    <p>This is a reminder that you have a ${booking.service.name} scheduled.</p>
    <p><strong>Date & Time:</strong> ${booking.booked_at.toLocaleString()}</p>
    <p><strong>Duration:</strong> ${booking.duration_minutes} minutes</p>
    <p>Thank you!</p>
  `

  try {
    await transporter.sendMail({
      from: booking.business.email,
      to: booking.client.email,
      subject: `Reminder: ${booking.service.name}`,
      html: emailBody,
    })

    // Update email queue record
    await prisma.emailQueue.updateMany({
      where: { booking_id: booking.id, email_type: 'booking_reminder' },
      data: { status: 'sent', sent_at: new Date() },
    })
  } catch (error) {
    console.error('Failed to send reminder:', error)
    throw error
  }
}

// Handle booking confirmation emails
async function handleSendConfirmation(data: { bookingId: string }) {
  const booking = await prisma.booking.findUnique({
    where: { id: data.bookingId },
    include: { client: true, service: true, business: true },
  })

  if (!booking || !booking.client.email) return

  const emailBody = `
    <h2>Booking Confirmation</h2>
    <p>Hi ${booking.client.first_name},</p>
    <p>Your booking has been confirmed!</p>
    <p><strong>Service:</strong> ${booking.service.name}</p>
    <p><strong>Date & Time:</strong> ${booking.booked_at.toLocaleString()}</p>
    <p><strong>Duration:</strong> ${booking.duration_minutes} minutes</p>
    <p>Thank you for booking with us!</p>
  `

  try {
    await transporter.sendMail({
      from: booking.business.email,
      to: booking.client.email,
      subject: `Booking Confirmed: ${booking.service.name}`,
      html: emailBody,
    })

    await prisma.emailQueue.updateMany({
      where: { booking_id: booking.id, email_type: 'booking_confirmation' },
      data: { status: 'sent', sent_at: new Date() },
    })
  } catch (error) {
    console.error('Failed to send confirmation:', error)
    throw error
  }
}

// Handle booking cancellation emails
async function handleSendCancellation(data: { bookingId: string }) {
  const booking = await prisma.booking.findUnique({
    where: { id: data.bookingId },
    include: { client: true, service: true, business: true },
  })

  if (!booking || !booking.client.email) return

  const emailBody = `
    <h2>Booking Cancellation</h2>
    <p>Hi ${booking.client.first_name},</p>
    <p>Your booking has been cancelled.</p>
    <p><strong>Service:</strong> ${booking.service.name}</p>
    <p><strong>Original Date & Time:</strong> ${booking.booked_at.toLocaleString()}</p>
    <p>If you have any questions, please contact us.</p>
  `

  try {
    await transporter.sendMail({
      from: booking.business.email,
      to: booking.client.email,
      subject: `Booking Cancelled: ${booking.service.name}`,
      html: emailBody,
    })

    await prisma.emailQueue.updateMany({
      where: { booking_id: booking.id, email_type: 'booking_cancellation' },
      data: { status: 'sent', sent_at: new Date() },
    })
  } catch (error) {
    console.error('Failed to send cancellation:', error)
    throw error
  }
}

// Handle message notification emails
async function handleSendMessageNotification(data: { recipientEmail: string; subject: string; body: string; businessId: string }) {
  try {
    const business = await prisma.business.findUnique({
      where: { id: data.businessId },
    })

    if (!business || !data.recipientEmail) return

    await transporter.sendMail({
      from: business.email,
      to: data.recipientEmail,
      subject: data.subject,
      text: data.body,
    })

    console.log(`Message notification sent to ${data.recipientEmail}`)
  } catch (error) {
    console.error('Failed to send message notification:', error)
    throw error
  }
}

export async function scheduleEmailReminder(bookingId: string, delayMs: number) {
  await getEmailQueue().add('send_reminder', { bookingId }, { delay: delayMs })
}

export async function scheduleEmailConfirmation(bookingId: string) {
  await getEmailQueue().add('send_confirmation', { bookingId })
}

export async function scheduleEmailCancellation(bookingId: string) {
  await getEmailQueue().add('send_cancellation', { bookingId })
}

export async function scheduleEmailNotification(recipientEmail: string, subject: string, body: string, businessId: string) {
  await getEmailQueue().add('send_message_notification', { recipientEmail, subject, body, businessId })
}
