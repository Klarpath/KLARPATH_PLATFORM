'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Topbar() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <header className="topbar">
      <Link href="/login" className="topbar-brand">
        <img src="/klarpath_logo.png" alt="KlarPath" className="brand-logo" />
        <div>
          <p className="brand-title">Klarpath CRM</p>
          <p className="brand-subtitle">Business owner and admin dashboard</p>
        </div>
      </Link>
      <nav className="topnav">
        <Link href="/login">Login</Link>
      </nav>
    </header>
  )
}
