import Link from 'next/link'

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Klarpath CRM</p>
          <h1>Small business marketing CRM for London trades</h1>
          <p className="hero-copy">
            A modern Next.js CRM using App Router, Prisma, JWT auth, role-based access,
            and web booking APIs that work with your static service sites.
          </p>
          <div className="button-row">
            <Link href="/login" className="button primary">Business Login</Link>
            <Link href="/register" className="button secondary">Register Business</Link>
            <Link href="/admin/login" className="button tertiary">Admin Login</Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>Startup-ready CRM stack</h2>
          <ul>
            <li>JWT authentication and multi-tenant business access</li>
            <li>Bookings, clients, messages, services, and analytics</li>
            <li>Public booking API for static website integration</li>
            <li>Prisma Studio, Docker Compose, and deployable production scripts</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
