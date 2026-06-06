'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [subdomain, setSubdomain] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessName, subdomain, email, password }),
    })

    setLoading(false)
    const result = await response.json()

    if (!response.ok) {
      setError(result.error || 'Registration failed')
      return
    }

    router.push('/login')
  }

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <h1>Register your business</h1>
        <p>Create a business account with a unique subdomain for bookings and CRM access.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Business name
            <input value={businessName} onChange={(event) => setBusinessName(event.target.value)} required />
          </label>
          <label>
            Subdomain
            <input value={subdomain} onChange={(event) => setSubdomain(event.target.value)} required placeholder="example" />
          </label>
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
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>
      </div>
    </section>
  )
}
