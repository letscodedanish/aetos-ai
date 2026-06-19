import { useEffect } from 'react'

/**
 * Mirrors the original aetos.js scroll-reveal: observe every `.reveal`
 * element once and add the `in` class when it enters the viewport.
 * Runs after mount so all sections are present in the DOM.
 */
export function useReveals() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveals = document.querySelectorAll('.reveal')
    if (reduce) {
      reveals.forEach((r) => r.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    reveals.forEach((r) => io.observe(r))
    // safety net: never leave content hidden if the observer misfires
    const t = setTimeout(() => reveals.forEach((r) => r.classList.add('in')), 2000)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
}
