import { Plus } from 'lucide-react'
import { SectionHeading } from '../ui'
import { faqs } from '@/lib/content'

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions? Answers." />
        <div className="mt-12 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="size-5 shrink-0 text-blue-600 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
