import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/archivo/wdth.css'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { packages } from '@/lib/content'
import { siteName, siteUrl } from '@/lib/site'

const title = `${siteName} | Garage Cleanouts, Junk Removal & Cash for Your Stuff`
const description = `Garage cleanouts from $${packages[0].price}. We sort it, buy what's worth selling, haul away the rest, and pressure wash the floor. Get a free quote.`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${siteName}` },
  description,
  openGraph: { type: 'website', siteName, title, description, url: '/' },
  twitter: { card: 'summary_large_image', title, description },
}

export const viewport: Viewport = {
  themeColor: '#050b18',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-700">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
