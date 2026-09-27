import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Cleanest Garages handles the information you share with us.',
}

const sections = [
  {
    heading: 'Information we collect',
    body: "When you request a quote, we collect what you enter in the form: your name, email address, phone number (if you give it), ZIP code, and details about your garage and any items you'd like to sell.",
  },
  {
    heading: 'How we use it',
    body: 'Only to respond to your request: to follow up with questions, give you a quote or an offer, and schedule service.',
  },
  {
    heading: "What we don't do",
    body: "We don't sell or rent your information, and we don't share it with anyone except as needed to run this website.",
  },
  {
    heading: 'Where it is stored',
    body: 'Form submissions are processed and stored by our website host, Netlify.',
  },
  {
    heading: 'Your choices',
    body: 'You can ask us to update or delete your information at any time. Send a request through our quote form and let us know.',
  },
  {
    heading: 'Changes to this policy',
    body: "If we update this policy, we'll post the new version on this page with a new date.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Legal</p>
        <h1 className="mt-3 font-expanded text-4xl font-extrabold tracking-tight text-navy-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: September 27, 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-navy-900">{section.heading}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
