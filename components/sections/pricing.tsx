import { Check, Droplets } from 'lucide-react'
import { ButtonLink, SectionHeading } from '../ui'
import { floorCleaning, packages } from '@/lib/content'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, upfront pricing"
          description="Pick the package that fits your garage. You'll get an exact price before we start, and anything we buy from you can come off the total."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center">
          {packages.map((pkg) => {
            const featured = pkg.featured
            return (
              <div
                key={pkg.name}
                className={
                  featured
                    ? 'relative flex flex-col rounded-2xl bg-navy-900 p-8 text-white shadow-2xl ring-2 ring-blue-500 lg:py-12'
                    : 'relative flex flex-col rounded-2xl bg-white p-8 ring-1 ring-slate-200'
                }
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                    Recommended
                  </span>
                )}
                <h3 className={`font-expanded text-xl font-bold tracking-tight ${featured ? 'text-white' : 'text-navy-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-1 text-sm ${featured ? 'text-slate-300' : 'text-slate-500'}`}>{pkg.bestFor}</p>
                <p className={`mt-6 text-sm font-medium ${featured ? 'text-slate-300' : 'text-slate-500'}`}>Starting at</p>
                <p className={`font-expanded text-5xl font-extrabold tracking-tight ${featured ? 'text-white' : 'text-navy-900'}`}>
                  ${pkg.price}
                </p>
                <ul className={`mt-8 space-y-3 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${featured ? 'text-yellow-400' : 'text-blue-600'}`}
                        strokeWidth={3}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ButtonLink href="#quote" variant={featured ? 'primary' : 'outline'} className="w-full">
                    Get a quote
                  </ButtonLink>
                </div>
              </div>
            )
          })}
        </div>

        <div
          id="floor-cleaning"
          className="mt-16 scroll-mt-24 overflow-hidden rounded-2xl ring-1 ring-slate-200 lg:grid lg:grid-cols-5"
        >
          <div className="bg-slate-50 p-8 lg:col-span-2 lg:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-blue-600 text-white">
              <Droplets className="size-6" />
            </span>
            <h3 className="mt-6 font-expanded text-2xl font-bold tracking-tight text-navy-900">
              Floor &amp; Deep Cleaning
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Already cleared out, or just want the floor done? Book it on its own. We pressure wash, degrease,
              and rinse the whole floor.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              The floor needs to be mostly clear. If it isn&apos;t, pair this with a cleanout package.
            </p>
          </div>
          <div className="grid gap-8 p-8 sm:grid-cols-2 lg:col-span-3 lg:p-10">
            <PriceList title="Pressure wash & degrease" items={floorCleaning.sizes} />
            <PriceList title="Add-ons" items={floorCleaning.addOns} prefix="+" />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          Prices are starting points for a typical garage. Your final price depends on size, how much we haul,
          and any heavy or bulky items, and you&apos;ll always get it upfront, before we start.
        </p>
      </div>
    </section>
  )
}

function PriceList({
  title,
  items,
  prefix = '',
}: {
  title: string
  items: { label: string; price: number }[]
  prefix?: string
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">{title}</h4>
      <dl className="mt-3 divide-y divide-slate-200">
        {items.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-slate-700">{item.label}</dt>
            <dd className="font-expanded text-lg font-bold text-navy-900">
              {prefix}${item.price}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
