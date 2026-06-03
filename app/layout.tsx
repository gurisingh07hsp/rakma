import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rakma Global — Real Estate for Everyone',
  description:
    'Invest in premium Canadian and global real estate from just $100. Earn monthly rental income. Build generational wealth.',
  keywords: ['real estate', 'fractional investing', 'Canada', 'property investment', 'passive income'],
  openGraph: {
    title: 'Rakma Global — Real Estate for Everyone',
    description: 'Invest in premium properties from $100. Monthly income. No barriers.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
