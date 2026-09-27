import { QuoteForm } from '../quote-form'
import { SectionHeading } from '../ui'

const nextSteps = [
  'We review your request.',
  'We reach out for a few photos of your garage.',
  'You get a clear price. No obligation, no pressure.',
]

export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Free quote"
            title="Let's get your garage back"
            description="Tell us a little about your garage and what you need. It takes about a minute."
          />
          <h3 className="mt-10 font-bold text-navy-900">What happens next</h3>
          <ol className="mt-4 space-y-4">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-4 text-slate-700">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-xl bg-yellow-50 p-4 text-sm leading-relaxed text-yellow-900 ring-1 ring-yellow-200">
            <strong>Just want to sell something?</strong> Check &ldquo;Sell us items&rdquo; and tell us what
            you&apos;ve got. No cleanout needed.
          </p>
        </div>
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
