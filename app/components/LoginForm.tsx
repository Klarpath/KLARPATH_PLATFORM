'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [userType, setUserType] = useState<'business' | 'admin'>('admin')
  const [email, setEmail] = useState('admin@klarpath.com')
  const [password, setPassword] = useState('AdminPass123!')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function handleUserTypeChange(type: 'business' | 'admin') {
    setUserType(type)
    if (type === 'admin') {
      setEmail('admin@klarpath.com')
      setPassword('AdminPass123!')
    } else {
      setEmail('owner@hvac.kp')
      setPassword('OwnerPass123!')
    }
    setError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const response = await fetch('/api/auth/unified-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, userType }),
    })

    setLoading(false)
    const result = await response.json()

    if (!response.ok) {
      setError(result.error || 'Login failed')
      return
    }

    router.push(userType === 'admin' ? '/admin/dashboard' : '/dashboard')
  }

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="/klarpath_logo.png" alt="KlarPath" />
        </div>

        <div className="auth-type-selector">
          <button
            type="button"
            className={`auth-type-button ${userType === 'business' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('business')}
          >
            Business
          </button>
          <button
            type="button"
            className={`auth-type-button ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('admin')}
          >
            Admin
          </button>
        </div>

        <h1>{userType === 'business' ? 'Business Login' : 'Admin Login'}</h1>
        <p>
          {userType === 'business'
            ? 'Sign in to your business dashboard and manage bookings, clients and messages.'
            : 'Sign in to manage all businesses, bookings, clients and analytics.'}
        </p>

        {userType === 'business' && (
          <p className="form-note">Use the preloaded HVAC demo credentials to test.</p>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
            />
          </label>
          <label>
            Password
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="button primary" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </section>
  )
}
