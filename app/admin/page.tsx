import Link from 'next/link'

export default function AdminRootPage() {
  return (
    <div className="page-shell">
      <div className="hero">
        <div>
          <p className="eyebrow">Admin area</p>
          <h1>Admin tools for Klarpath CRM</h1>
          <p className="hero-copy">Access the admin dashboard for platform-wide business, booking and messaging oversight.</p>
          <div className="button-row">
            <Link href="/admin/login" className="button primary">Admin Login</Link>
            <Link href="/admin/dashboard" className="button secondary">Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
