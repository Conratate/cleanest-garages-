export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M3 13.5 16 4l13 9.5V29H3z" fill="currentColor" />
      <rect x="8" y="15.5" width="16" height="13.5" rx="1" fill="#fff" />
      <path d="M8 19h16M8 22.5h16M8 26h16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M27 1.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="#facc15" />
    </svg>
  )
}

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="size-8 text-blue-600" />
      <span
        className={`font-expanded text-lg font-extrabold tracking-tight ${tone === 'dark' ? 'text-white' : 'text-navy-900'}`}
      >
        Cleanest<span className="text-blue-500"> Garages</span>
      </span>
    </span>
  )
}
