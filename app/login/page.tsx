'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('owner@hvac.kp')
  const [password, setPassword] = useState('OwnerPass123!')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    setLoading(false)
    const result = await response.json()

    if (!response.ok) {
      setError(result.error || 'Login failed')
      return
    }

    router.push('/dashboard')
  }

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <h1>Business login</h1>
        <p>Sign in to your business dashboard and manage bookings, clients and messages.</p>
        <p className="form-note">Use the preloaded HVAC demo credentials to test external website messages.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
          </label>
          <label>
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required />
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
