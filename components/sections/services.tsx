import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '../ui'
import { services } from '@/lib/content'

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Four services. One crew."
          description="Most garages need more than one thing. We handle all of it, so you're not calling three different companies."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <service.icon className="size-6" />
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-900">
                  {service.priceLabel}
                </span>
              </div>
              <h3 className="mt-6 font-expanded text-xl font-bold tracking-tight text-navy-900">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-blue-600" strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href={service.link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-600"
                >
                  {service.link.label}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
