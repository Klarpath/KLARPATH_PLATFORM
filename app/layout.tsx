'use cache'

import './styles/globals.css'
import Topbar from './components/Topbar'

export const metadata = {
  title: 'Klarpath CRM',
  description: 'Klarpath CRM for bookings, messaging, and client management',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Topbar />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  )
}
