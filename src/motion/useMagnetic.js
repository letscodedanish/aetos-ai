import { useRef } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'motion/react'

// True only on devices with a precise pointer (mouse/trackpad).
export const finePointer = () =>
  typeof window !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Magnetic pull: the element drifts toward the cursor while hovered and
 * springs back on leave. Returns motion style + handlers to spread onto a
 * `motion.*` element. No-ops on coarse pointers / reduced motion.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const enabled = !reduce && finePointer()

  const onMouseMove = (e) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, style: { x: sx, y: sy }, onMouseMove, onMouseLeave }
}
