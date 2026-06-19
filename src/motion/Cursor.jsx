import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { finePointer } from './useMagnetic'

/**
 * Global morphing cursor. A small dot by default; reads the nearest
 * `[data-cursor]` ancestor under the pointer and swells into a labelled
 * disc ("View ↗", "Drag", …). Hidden on coarse pointers.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')
  const [down, setDown] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 })

  useEffect(() => {
    if (!finePointer()) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const hit = e.target.closest?.('[data-cursor]')
      if (hit) {
        setActive(true)
        setLabel(hit.getAttribute('data-cursor') || '')
      } else {
        setActive(false)
        setLabel('')
      }
    }
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      document.documentElement.classList.remove('cursor-none')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[400] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      style={{ x: sx, y: sy }}
      animate={{
        width: active ? 78 : down ? 12 : 16,
        height: active ? 78 : down ? 12 : 16,
        backgroundColor: active ? '#ECE8E0' : 'rgba(236,232,224,0.0)',
        border: active ? '0px solid transparent' : '1.5px solid #ECE8E0',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
    >
      <motion.span
        className="select-none font-mono text-[11px] uppercase tracking-[0.1em] text-bg"
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}
