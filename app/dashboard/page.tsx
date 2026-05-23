'use client'

import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

type Client = {
  id: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
}

type Booking = {
  id: string
  booked_at: string
  status: string
  service: { name: string }
  client: Client
}

type Message = {
  id: string
  content: string
  is_read: boolean
  created_at: string
  client: Client
}

type UserResponse = {
  user?: {
    type: string
    business: { name: string; subdomain: string }
  }
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserResponse['user'] | null>(null)
  const [clients, setClients] = useState<Client[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [metrics, setMetrics] = useState<{ series?: number[]; response_time_ms?: number; content_length?: number } | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const authRes = await fetch('/api/auth/me')
      const authData = await authRes.json()

      if (!authData?.user || authData.user.type !== 'business_owner') {
        router.push('/login')
        return
      }

      setUser(authData.user)

      try {
        const [clientsRes, bookingsRes, messagesRes] = await Promise.all([
          fetch('/api/clients'),
          fetch('/api/bookings'),
          fetch('/api/messages'),
        ])

        const clientsJson = await clientsRes.json()
        const bookingsJson = await bookingsRes.json()
        const messagesJson = await messagesRes.json()

        setClients(clientsJson.clients || [])
        setBookings(bookingsJson.bookings || [])
        setMessages(messagesJson.messages || [])
        // fetch site metrics demo
        try {
          const domain = authData.user.business.subdomain
          const metricsRes = await fetch(`/api/metrics?url=https://${domain}.klarpath.com`)
          const metricsJson = await metricsRes.json()
          setMetrics(metricsJson)
        } catch (err) {
          console.warn('Failed to load metrics demo', err)
        }
      } catch (err) {
        setError('Failed to load dashboard data. Please refresh.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [router])

  // Draw animated line chart when metrics.series becomes available
  useEffect(() => {
    if (!metrics?.series || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    const series = metrics.series
    const w = canvas.width
    const h = canvas.height
    ctx.clearRect(0, 0, w, h)
    const max = Math.max(...series)
    const points = series.map((v, i) => ({ x: (i / (series.length - 1)) * (w - 40) + 20, y: h - 30 - (v / max) * (h - 60) }))
    let t = 0
    function animate() {
      t += 0.04
      ctx.clearRect(0, 0, w, h)
      // grid
      ctx.strokeStyle = '#eee'
      for (let i = 0; i < 4; i++) {
        ctx.beginPath(); ctx.moveTo(0, 30 + (i * (h - 60) / 3)); ctx.lineTo(w, 30 + (i * (h - 60) / 3)); ctx.stroke();
      }
      // line
      ctx.beginPath()
      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 2
      points.forEach((p, i) => {
        const yy = p.y + Math.sin(t + i) * 2
        if (i === 0) ctx.moveTo(p.x, yy)
        else ctx.lineTo(p.x, yy)
      })
      ctx.stroke()
      // dots
      ctx.fillStyle = '#1d4ed8'
      points.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill() })

      if (t < Math.PI * 2) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [metrics])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  if (loading) {
    return <div className="page-shell"><div className="loading-card">Loading dashboard…</div></div>
  }

  return (
    <div className="page-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Business Dashboard</p>
          <h1>{user?.business.name}</h1>
          <p className="section-copy">Manage bookings, clients, messages and business settings from one place.</p>
        </div>
        <button className="button secondary" onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-grid">
        <div className="info-card">
          <h2>Site analytics (demo)</h2>
          <p>Live site: {user?.business.subdomain}.klarpath.com</p>
          {metrics ? (
            <div>
              <p>Response time: {metrics.response_time_ms} ms • Size: {metrics.content_length} bytes</p>
              <canvas ref={canvasRef} width={600} height={180} />
            </div>
          ) : (
            <p>Loading site metrics…</p>
          )}
        </div>
      </div>

      {error && <div className="alert-error">{error}</div>}

      <div className="dashboard-grid">
        <div className="info-card">
          <h2>Business profile</h2>
          <p><strong>Name:</strong> {user?.business.name}</p>
          <p><strong>Subdomain:</strong> {user?.business.subdomain}.klarpath.com</p>
        </div>
        <div className="info-card">
          <h2>Quick overview</h2>
          <p><strong>Clients:</strong> {clients.length}</p>
          <p><strong>Bookings:</strong> {bookings.length}</p>
          <p><strong>Messages:</strong> {messages.length}</p>
        </div>
      </div>

      <section className="cards-stack">

        <div className="list-card">
          <h3>Recent bookings</h3>
          <ul>
            {bookings.slice(0, 6).map((booking) => (
              <li key={booking.id}>
                <strong>{booking.service?.name}</strong> for {booking.client.first_name} {booking.client.last_name}
                <span>{new Date(booking.booked_at).toLocaleString()}</span>
              </li>
            ))}
            {bookings.length === 0 && <li>No bookings yet.</li>}
          </ul>
        </div>

        <div className="list-card">
          <h3>Recent clients</h3>
          <ul>
            {clients.slice(0, 6).map((client) => (
              <li key={client.id}>
                {client.first_name} {client.last_name}
                <span>{client.email || client.phone || 'No contact'}</span>
              </li>
            ))}
            {clients.length === 0 && <li>No clients yet.</li>}
          </ul>
        </div>

        <div className="list-card full-width">
          <h3>Recent messages</h3>
          <ul>
            {messages.slice(0, 8).map((message) => (
              <li key={message.id}>
                <div>{message.content}</div>
                <span>{message.client.first_name} {message.client.last_name}</span>
              </li>
            ))}
            {messages.length === 0 && <li>No messages yet.</li>}
          </ul>
        </div>
      </section>
    </div>
  )
}
