import { Fragment, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

const EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

/**
 * Headline reveal: each word rises out of a clipping mask, staggered.
 * `segments` is an array of { text, className } — each renders as its own
 * block (a line), so colour shifts (text → dim) sit on separate rows.
 *
 * The motion is a plain CSS transform/transition toggled by an
 * IntersectionObserver (the same reliable mechanism as the site's reveal hook)
 * with a safety timeout — so a heading can never get stuck hidden.
 * `play="mount"` reveals immediately.
 */
export default function SplitReveal({
  segments,
  className = '',
  Tag = 'h2',
  stagger = 0.045,
  base = 0,
  duration = 0.72,
  play = 'view',
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (reduce || play === 'mount') {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    let done = false
    const reveal = () => { if (!done) { done = true; setShown(true) } }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { reveal(); io.disconnect() } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    io.observe(el)
    const t = setTimeout(reveal, 1600) // safety net
    return () => { io.disconnect(); clearTimeout(t) }
  }, [reduce, play])

  if (reduce) {
    return (
      <Tag ref={ref} className={className}>
        {segments.map((seg, si) => (
          <span key={si} className={`block ${seg.className || ''}`}>{seg.text}</span>
        ))}
      </Tag>
    )
  }

  let idx = 0
  return (
    <Tag ref={ref} className={className}>
      {segments.map((seg, si) => {
        const words = seg.text.split(' ')
        return (
          <span key={si} className={`block ${seg.className || ''}`}>
            {words.map((word, wi) => {
              const delay = base + idx++ * stagger
              return (
                <Fragment key={wi}>
                  <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <span
                      className="inline-block will-change-transform"
                      style={{
                        transform: shown ? 'translateY(0)' : 'translateY(115%)',
                        transition: `transform ${duration}s ${EASE}`,
                        transitionDelay: `${shown ? delay : 0}s`,
                      }}
                    >
                      {word}
                    </span>
                  </span>
                  {wi < words.length - 1 ? ' ' : ''}
                </Fragment>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
