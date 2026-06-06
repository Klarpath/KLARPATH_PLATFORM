import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ hello: 'Klarpath CRM is running' })
}
