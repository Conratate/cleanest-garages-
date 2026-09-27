import { ArrowRight, CircleCheck, CircleX } from 'lucide-react'
import { ButtonLink, SectionHeading } from '../ui'
import { buyCategories, buyDoesNotBuy, buyLooksFor, buySteps } from '@/lib/content'

export function WeBuy() {
  return (
    <section id="we-buy" className="relative isolate scroll-mt-16 overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(50% 60% at 10% 10%, rgba(250, 204, 21, 0.12), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(37, 99, 235, 0.25), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="We buy your stuff"
            title="Turn your clutter into cash"
            description="If it has real resale value, we'll make you an offer. Take the cash, or put it toward your cleanout."
          />

          <ol className="mt-10 space-y-6">
            {buySteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-yellow-400 font-bold text-navy-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-slate-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <ButtonLink href="#quote" className="mt-10 px-7 py-4 text-base">
            Get an offer <ArrowRight className="size-5" />
          </ButtonLink>
          <p className="mt-4 text-sm text-slate-500">We may ask for a valid ID on higher-value items.</p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">What we buy</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {buyCategories.map((category) => (
              <li
                key={category.name}
                className="rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition hover:bg-white/10 sm:p-5"
              >
                <category.icon className="size-6 text-yellow-400" />
                <p className="mt-3 font-bold text-white">{category.name}</p>
                <p className="mt-1 text-sm leading-snug text-slate-400">{category.examples}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-400">
            And plenty more. If it&apos;s in good shape and people are buying it, ask us.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <CheckList title="What we look for" items={buyLooksFor} good />
            <CheckList title="What we don't buy" items={buyDoesNotBuy} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckList({ title, items, good = false }: { title: string; items: string[]; good?: boolean }) {
  const Icon = good ? CircleCheck : CircleX
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
      <h3 className="font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon className={`mt-0.5 size-4 shrink-0 ${good ? 'text-green-400' : 'text-red-400'}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
