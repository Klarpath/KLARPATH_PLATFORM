'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type DashboardData = {
  summary: {
    adminCount: number
    businessCount: number
    activeBusinesses: number
    businessOwnerCount: number
    clientCount: number
    bookingCount: number
    pendingBookings: number
    messageCount: number
    unreadMessages: number
  }
  recentBookings: any[]
  recentMessages: any[]
}

type TableData = {
  table: string
  count: number
  data: any[]
}

const TABLES = ['admins', 'businesses', 'business_owners', 'clients', 'bookings', 'messages', 'services']

export default function AdminDashboardPage() {
  const router = useRouter()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'database' | 'register'>('overview')
  const [selectedTable, setSelectedTable] = useState<string>('businesses')
  const [tableData, setTableData] = useState<TableData | null>(null)
  const [tableLoading, setTableLoading] = useState(false)

  // Register form states
  const [registerType, setRegisterType] = useState<'admin' | 'business'>('business')
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    businessName: '',
    businessEmail: '',
    subdomain: '',
    phone: '',
    firstName: '',
    lastName: '',
    role: 'moderator',
    industry: 'hvac',
  })
  const [registerLoading, setRegisterLoading] = useState(false)
  const [registerMessage, setRegisterMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/admin/dashboard')
        if (!res.ok) throw new Error('Unauthorized')
        const body = await res.json()
        setData(body)
      } catch (err) {
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [router])

  async function loadTableData(tableName: string) {
    setTableLoading(true)
    try {
      const res = await fetch(`/api/admin/db/${tableName}`)
      if (res.ok) {
        const body = await res.json()
        setTableData(body)
      }
    } catch (err) {
      console.error('Error loading table:', err)
    } finally {
      setTableLoading(false)
    }
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setRegisterLoading(true)
    setRegisterMessage(null)

    try {
      const res = await fetch('/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: registerType, ...registerData }),
      })

      const body = await res.json()

      if (res.ok) {
        setRegisterMessage({ type: 'success', text: `${registerType === 'admin' ? 'Admin' : 'Business'} registered successfully!` })
        setRegisterData({
          email: '',
          password: '',
          businessName: '',
          businessEmail: '',
          subdomain: '',
          phone: '',
          firstName: '',
          lastName: '',
          role: 'moderator',
          industry: 'hvac',
        })
        // Reload dashboard data
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else {
        setRegisterMessage({ type: 'error', text: body.error || 'Registration failed' })
      }
    } catch (err) {
      setRegisterMessage({ type: 'error', text: 'An error occurred' })
    } finally {
      setRegisterLoading(false)
    }
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="page-shell">
        <div className="loading-card">Loading admin dashboard…</div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Admin Dashboard</p>
          <h1>Platform Control Center</h1>
          <p className="section-copy">Monitor all businesses, bookings, clients and database.</p>
        </div>
        <button className="button secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          Overview
        </button>
        <button className={`tab-button ${activeTab === 'database' ? 'active' : ''}`} onClick={() => setActiveTab('database')}>
          Database
        </button>
        <button className={`tab-button ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>
          Register
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && data && (
        <>
          <div className="dashboard-grid">
            <div className="info-card">
              <h3>Total Admins</h3>
              <p className="stat">{data.summary.adminCount}</p>
            </div>
            <div className="info-card">
              <h3>Businesses</h3>
              <p className="stat">{data.summary.businessCount}</p>
              <p className="stat-sub">({data.summary.activeBusinesses} active)</p>
            </div>
            <div className="info-card">
              <h3>Business Owners</h3>
              <p className="stat">{data.summary.businessOwnerCount}</p>
            </div>
            <div className="info-card">
              <h3>Total Clients</h3>
              <p className="stat">{data.summary.clientCount}</p>
            </div>
            <div className="info-card">
              <h3>Bookings</h3>
              <p className="stat">{data.summary.bookingCount}</p>
              <p className="stat-sub">({data.summary.pendingBookings} pending)</p>
            </div>
            <div className="info-card">
              <h3>Messages</h3>
              <p className="stat">{data.summary.messageCount}</p>
              <p className="stat-sub">({data.summary.unreadMessages} unread)</p>
            </div>
          </div>

          <div className="cards-stack">
            <div className="list-card">
              <h3>Recent Bookings</h3>
              {data.recentBookings.length === 0 ? (
                <p className="empty-state">No recent bookings</p>
              ) : (
                <ul>
                  {data.recentBookings.slice(0, 8).map((booking) => (
                    <li key={booking.id}>
                      <div>
                        <strong>{booking.client.first_name} {booking.client.last_name}</strong>
                        <p className="text-muted">{booking.service.name} • {booking.business.name}</p>
                      </div>
                      <span className={`status-badge ${booking.status}`}>{booking.status}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="list-card">
              <h3>Recent Messages</h3>
              {data.recentMessages.length === 0 ? (
                <p className="empty-state">No recent messages</p>
              ) : (
                <ul>
                  {data.recentMessages.slice(0, 8).map((msg) => (
                    <li key={msg.id}>
                      <div>
                        <strong>{msg.client.first_name} {msg.client.last_name}</strong>
                        <p className="text-muted">{msg.business.name}</p>
                      </div>
                      <span className={`read-badge ${msg.is_read ? 'read' : 'unread'}`}>
                        {msg.is_read ? 'Read' : 'Unread'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}

      {/* Database Tab */}
      {activeTab === 'database' && (
        <>
          <div className="database-viewer">
            <div className="db-sidebar">
              <h3>Tables</h3>
              <div className="table-list">
                {TABLES.map((table) => (
                  <button
                    key={table}
                    className={`table-item ${selectedTable === table ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedTable(table)
                      loadTableData(table)
                    }}
                  >
                    {table}
                  </button>
                ))}
              </div>
            </div>

            <div className="db-content">
              {tableLoading ? (
                <div className="loading-state">Loading table data…</div>
              ) : tableData ? (
                <>
                  <div className="table-header">
                    <h2>{tableData.table}</h2>
                    <span className="record-count">{tableData.count} records</span>
                  </div>
                  {tableData.data.length === 0 ? (
                    <p className="empty-state">No records in this table</p>
                  ) : (
                    <div className="table-scroll">
                      <table>
                        <thead>
                          <tr>
                            {Object.keys(tableData.data[0]).map((key) => (
                              <th key={key}>{key}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.data.map((row, idx) => (
                            <tr key={idx}>
                              {Object.values(row).map((val: any, colIdx) => (
                                <td key={colIdx}>
                                  {typeof val === 'string' ? (
                                    val.length > 50 ? `${val.substring(0, 50)}…` : val
                                  ) : typeof val === 'object' ? (
                                    <code>{JSON.stringify(val).substring(0, 30)}…</code>
                                  ) : (
                                    String(val)
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              ) : (
                <div className="empty-state">Select a table to view data</div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Register Tab */}
      {activeTab === 'register' && (
        <div className="register-container">
          <div className="register-card">
            <h2>Register New {registerType === 'admin' ? 'Admin' : 'Business'}</h2>

            <div className="register-type-selector">
              <button
                type="button"
                className={`register-type-btn ${registerType === 'admin' ? 'active' : ''}`}
                onClick={() => setRegisterType('admin')}
              >
                Admin
              </button>
              <button
                type="button"
                className={`register-type-btn ${registerType === 'business' ? 'active' : ''}`}
                onClick={() => setRegisterType('business')}
              >
                Business
              </button>
            </div>

            {registerMessage && (
              <div className={`form-message ${registerMessage.type}`}>{registerMessage.text}</div>
            )}

            <form onSubmit={handleRegister} className="auth-form">
              {registerType === 'admin' ? (
                <>
                  <label>
                    Email
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                    />
                  </label>
                  <label>
                    Password
                    <input
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                    />
                  </label>
                  <label>
                    Role
                    <select
                      value={registerData.role}
                      onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                    >
                      <option value="moderator">Moderator</option>
                      <option value="superadmin">Superadmin</option>
                    </select>
                  </label>
                </>
              ) : (
                <>
                  <div className="form-section">
                    <h4>Business Information</h4>
                    <label>
                      Business Name
                      <input
                        type="text"
                        value={registerData.businessName}
                        onChange={(e) => setRegisterData({ ...registerData, businessName: e.target.value })}
                        required
                      />
                    </label>
                    <label>
                      Business Email
                      <input
                        type="email"
                        value={registerData.businessEmail}
                        onChange={(e) => setRegisterData({ ...registerData, businessEmail: e.target.value })}
                        required
                      />
                    </label>
                    <label>
                      Subdomain
                      <input
                        type="text"
                        value={registerData.subdomain}
                        onChange={(e) => setRegisterData({ ...registerData, subdomain: e.target.value })}
                        placeholder="example"
                        required
                      />
                    </label>
                    <label>
                      Industry
                      <select
                        value={registerData.industry}
                        onChange={(e) => setRegisterData({ ...registerData, industry: e.target.value })}
                      >
                        <option value="hvac">HVAC</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <label>
                      Phone (Optional)
                      <input
                        type="tel"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      />
                    </label>
                  </div>

                  <div className="form-section">
                    <h4>Owner Information</h4>
                    <label>
                      Owner Email
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                      />
                    </label>
                    <label>
                      Password
                      <input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                      />
                    </label>
                    <label>
                      First Name
                      <input
                        type="text"
                        value={registerData.firstName}
                        onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                      />
                    </label>
                    <label>
                      Last Name
                      <input
                        type="text"
                        value={registerData.lastName}
                        onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                      />
                    </label>
                  </div>
                </>
              )}

              <button type="submit" className="button primary" disabled={registerLoading}>
                {registerLoading ? 'Registering...' : `Register ${registerType === 'admin' ? 'Admin' : 'Business'}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
