'use client'

import Image from 'next/image'
import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { MoveHorizontal } from 'lucide-react'

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt }: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  function moveTo(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    moveTo(event.clientX)
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragging.current) moveTo(event.clientX)
  }

  function stopDragging() {
    dragging.current = false
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 10 : 5
    const next: Record<string, number> = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      Home: 0,
      End: 100,
    }
    if (!(event.key in next)) return
    event.preventDefault()
    setPosition(clamp(next[event.key]))
  }

  const sizes = '(min-width: 1024px) 50vw, 100vw'

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-2xl bg-slate-800 shadow-2xl ring-1 ring-white/10"
    >
      <Image src={afterSrc} alt={afterAlt} fill sizes={sizes} loading="eager" draggable={false} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeSrc} alt={beforeAlt} fill sizes={sizes} loading="eager" draggable={false} className="object-cover" />
      </div>

      <span
        className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white transition-opacity"
        style={{ opacity: position > 15 ? 1 : 0 }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white transition-opacity"
        style={{ opacity: position < 85 ? 1 : 0 }}
      >
        After
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_16px_rgba(0,0,0,0.45)]"
        style={{ left: `${position}%` }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`Showing ${Math.round(position)}% of the before picture`}
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-xl ring-4 ring-white/40 outline-none focus-visible:ring-yellow-400"
        style={{ left: `${position}%` }}
      >
        <MoveHorizontal className="size-5" />
      </div>
    </div>
  )
}
