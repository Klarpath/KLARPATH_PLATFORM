import './styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Klarpath CRM',
  description: 'Klarpath CRM for bookings, messaging, and client management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <header className="topbar">
            <div className="topbar-brand">
              <span className="brand-mark">K</span>
              <div>
                <p className="brand-title">Klarpath CRM</p>
                <p className="brand-subtitle">Business owner and admin dashboard</p>
              </div>
            </div>
            <nav className="topnav">
              <Link href="/">Home</Link>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
              <Link href="/admin/login">Admin</Link>
            </nav>
          </header>
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  )
}
