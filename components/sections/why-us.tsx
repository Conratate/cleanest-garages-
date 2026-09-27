import { SectionHeading } from '../ui'
import { perfectFor, values } from '@/lib/content'

export function WhyUs() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Cleanest Garages"
            title="It's in the name."
            description="Cleanest Garages is a local, owner-operated business built on a simple idea: clearing out a garage shouldn't take three companies and a whole weekend."
          />
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We sort everything with you, make offers on what&apos;s worth selling, haul away what&apos;s left, and
            clean the space until it feels brand new. That&apos;s the whole job, done by one crew.
          </p>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-slate-500">Perfect for</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {perfectFor.map((item) => (
              <li
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-navy-900"
              >
                <item.icon className="size-4 text-blue-600" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title} className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <span className="grid size-12 place-items-center rounded-xl bg-yellow-400 text-navy-950">
                <value.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{value.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
