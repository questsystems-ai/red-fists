import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Red Fist',
  description: 'Poster + contact + PDF links',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
