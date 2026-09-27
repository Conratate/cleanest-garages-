'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CircleCheck, LoaderCircle } from 'lucide-react'
import { garageSizes, serviceOptions, timeframes } from '@/lib/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const labelClass = 'block text-sm font-semibold text-navy-900'
const baseFieldClass =
  'mt-2 block w-full rounded-xl border-0 bg-white px-4 py-3 text-navy-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
const fieldClass = `${baseFieldClass} h-12`
const textareaClass = baseFieldClass

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [wantsToSell, setWantsToSell] = useState(false)
  const [firstName, setFirstName] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Netlify Forms keeps one value per field name, so the checkboxes are sent as one list.
    const body = new URLSearchParams()
    for (const [key, value] of data) {
      if (key !== 'service' && typeof value === 'string') body.append(key, value)
    }
    body.set('services', data.getAll('service').join(', '))

    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Form submission failed with ${response.status}`)
      setFirstName(String(data.get('name') ?? '').trim().split(/\s+/)[0])
      setStatus('sent')
      setWantsToSell(false)
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-2xl bg-slate-50 p-10 text-center ring-1 ring-slate-200">
        <CircleCheck className="mx-auto size-12 text-green-600" />
        <h3 className="mt-4 font-expanded text-2xl font-extrabold tracking-tight text-navy-900">
          Request received{firstName ? `, ${firstName}` : ''}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Thanks for reaching out. We&apos;ll review your details and get back to you soon with next steps and
          your price.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-600"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      name="quote"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="zip" className={labelClass}>
            ZIP code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            maxLength={5}
            title="5-digit ZIP code"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="garage_size" className={labelClass}>
            Garage size
          </label>
          <select id="garage_size" name="garage_size" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose one
            </option>
            {garageSizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>What do you need?</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-inset ring-slate-300 transition has-checked:ring-2 has-checked:ring-blue-600"
              >
                <input
                  type="checkbox"
                  name="service"
                  value={option}
                  className="size-4 accent-blue-600"
                  onChange={option === 'Sell us items' ? (event) => setWantsToSell(event.target.checked) : undefined}
                />
                <span className="text-sm font-medium text-navy-900">{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {wantsToSell && (
          <div className="sm:col-span-2">
            <label htmlFor="items_to_sell" className={labelClass}>
              What would you like to sell?
            </label>
            <textarea
              id="items_to_sell"
              name="items_to_sell"
              rows={3}
              placeholder="e.g. cordless drill set, camera with two lenses, box of sports cards"
              className={textareaClass}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="timeframe" className={labelClass}>
            When do you need it done?
          </label>
          <select id="timeframe" name="timeframe" defaultValue={timeframes[0]} className={fieldClass}>
            {timeframes.map((timeframe) => (
              <option key={timeframe}>{timeframe}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Tell us about your garage <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="How full is it? Anything heavy or unusual? What days work best for you?"
            className={textareaClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <LoaderCircle className="size-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Get my free quote <ArrowRight className="size-5" />
          </>
        )}
      </button>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200">
          Something went wrong sending your request. Please try again in a minute.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-slate-500">
        We only use your info to respond to your request. See our{' '}
        <a href="/privacy" className="underline hover:text-slate-700">
          privacy policy
        </a>
        .
      </p>
    </form>
  )
}
