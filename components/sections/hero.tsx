import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { BeforeAfter } from '../before-after'
import { ButtonLink } from '../ui'
import { packages } from '@/lib/content'

const highlights = ['Upfront pricing', 'Cash offers on valuables', 'We haul it all away']

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(60% 70% at 85% 15%, rgba(37, 99, 235, 0.35), transparent 70%), radial-gradient(40% 50% at 0% 100%, rgba(250, 204, 21, 0.08), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-yellow-300 ring-1 ring-inset ring-white/15">
            <Sparkles className="size-4" />
            Garage cleanouts from ${packages[0].price}
          </p>
          <h1 className="mt-6 font-expanded text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Get your garage <span className="text-blue-500">back.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 text-pretty">
            We sort it, buy what&apos;s worth selling, haul away the rest, and leave it spotless. One crew,
            upfront pricing, and no wasted weekend.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#quote" className="px-7 py-4 text-base">
              Get a free quote <ArrowRight className="size-5" />
            </ButtonLink>
            <ButtonLink href="#pricing" variant="secondary" className="px-7 py-4 text-base">
              See pricing
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm font-medium text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-blue-600/25 text-blue-400">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2rem] bg-blue-600/20 blur-2xl" />
          <BeforeAfter
            beforeSrc="/illustrations/garage-before.svg"
            afterSrc="/illustrations/garage-after.svg"
            beforeAlt="Illustration of a cluttered, dirty garage"
            afterAlt="Illustration of the same garage, cleaned and organized"
          />
          <p className="mt-4 text-center text-sm text-slate-400">Drag the slider to see the difference</p>
        </div>
      </div>
    </section>
  )
}
