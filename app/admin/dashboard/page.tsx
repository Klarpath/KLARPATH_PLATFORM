'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type BusinessSummary = {
  id: string
  name: string
  email: string
  subdomain: string
  status: string
}

type SummaryData = {
  summary: {
    businessCount: number
    clientCount: number
    bookingCount: number
    pendingBookingCount: number
    unreadMessages: number
  }
  latestBusinesses: BusinessSummary[]
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [data, setData] = useState<SummaryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetch('/api/admin/summary')
      if (!response.ok) {
        router.push('/admin/login')
        return
      }
      const body = await response.json()
      setData(body)
      setLoading(false)
    }

    loadData()
  }, [router])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (loading) {
    return <div className="page-shell"><div className="loading-card">Loading admin dashboard…</div></div>
  }

  return (
    <div className="page-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Admin Dashboard</p>
          <h1>Platform insights</h1>
          <p className="section-copy">Monitor all businesses, bookings and messages from the admin control panel.</p>
        </div>
        <button className="button secondary" onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-grid">
        <div className="info-card">
          <h2>Total businesses</h2>
          <p>{data?.summary.businessCount}</p>
        </div>
        <div className="info-card">
          <h2>Total clients</h2>
          <p>{data?.summary.clientCount}</p>
        </div>
        <div className="info-card">
          <h2>Bookings</h2>
          <p>{data?.summary.bookingCount} ({data?.summary.pendingBookingCount} pending)</p>
        </div>
        <div className="info-card">
          <h2>Unread messages</h2>
          <p>{data?.summary.unreadMessages}</p>
        </div>
      </div>

      <div className="cards-stack full-width">
        <div className="list-card">
          <h3>Newest businesses</h3>
          <ul>
            {data?.latestBusinesses.map((business) => (
              <li key={business.id}>
                <strong>{business.name}</strong> ({business.subdomain})
                <span>{business.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
