import type { ReactNode } from 'react'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2'

const buttonVariants = {
  primary:
    'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 focus-visible:outline-blue-500',
  secondary:
    'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15 focus-visible:outline-white',
  outline:
    'bg-white text-navy-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600',
}

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
}: {
  href: string
  variant?: keyof typeof buttonVariants
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${dark ? 'text-yellow-400' : 'text-blue-600'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-expanded text-3xl font-extrabold tracking-tight text-balance sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-pretty ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
