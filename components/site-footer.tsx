import { ArrowRight } from 'lucide-react'
import { Logo } from './logo'

const serviceLinks = [
  { href: '/#services', label: 'Garage Cleanout' },
  { href: '/#we-buy', label: 'We Buy Your Stuff' },
  { href: '/#services', label: 'Junk Removal' },
  { href: '/#floor-cleaning', label: 'Floor & Deep Cleaning' },
]

const companyLinks = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy Policy' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="hazard-stripe h-2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Garage cleanouts, cash for your valuables, junk removal, and floor cleaning. One crew for the
              whole job.
            </p>
            <a
              href="/#quote"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Get a free quote <ArrowRight className="size-4" />
            </a>
          </div>
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cleanest Garages. All rights reserved.</p>
          <p>Cleanouts · Cash for your stuff · Junk removal · Floor cleaning</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
