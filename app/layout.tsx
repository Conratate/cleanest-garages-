import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleanest Garages',
  description: 'Professional garage cleaning services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
