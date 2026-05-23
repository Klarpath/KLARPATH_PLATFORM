import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const site = url.searchParams.get('url')
  if (!site) return NextResponse.json({ error: 'missing_url' }, { status: 400 })

  try {
    const start = Date.now()
    const res = await fetch(site, { method: 'GET' })
    const buffer = await res.arrayBuffer()
    const duration = Date.now() - start

    // Create a small synthetic 7-day series for demo (deterministic-ish)
    const base = Math.max(50, Math.min(1000, Math.floor(buffer.byteLength / 1000)))
    const series = Array.from({ length: 7 }).map((_, i) => Math.max(5, Math.floor(base * (0.5 + Math.sin(i + base % 7) * 0.1 + 0.8))))

    return NextResponse.json({
      url: site,
      status: res.status,
      response_time_ms: duration,
      content_length: buffer.byteLength,
      series,
    })
  } catch (err) {
    return NextResponse.json({ error: 'fetch_failed', detail: String(err) }, { status: 502 })
  }
}
