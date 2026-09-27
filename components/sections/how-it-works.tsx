import { SectionHeading } from '../ui'
import { steps } from '@/lib/content'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From packed to spotless in four steps"
          description="No guesswork and no surprise fees. Here's exactly what to expect."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-navy-900 text-white">
                  <step.icon className="size-6" />
                </span>
                <span className="font-expanded text-4xl font-black text-slate-200" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
