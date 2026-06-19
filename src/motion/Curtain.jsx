import { createContext, useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimationControls, useReducedMotion } from 'motion/react'

const Ctx = createContext({ go: () => {} })
export const useCurtain = () => useContext(Ctx)

const SWEEP = [0.7, 0, 0.3, 1]

/**
 * Page-transition curtain. `go(to, label)` slides a panel up to cover the
 * screen, swaps the route + scrolls to top behind it, then lifts the panel
 * away from the top — no white flash. Falls back to an instant navigate on
 * reduced motion.
 */
export function CurtainProvider({ children }) {
  const navigate = useNavigate()
  const controls = useAnimationControls()
  const reduce = useReducedMotion()
  const [origin, setOrigin] = useState('bottom')
  const [label, setLabel] = useState('')
  const [covering, setCovering] = useState(false)
  const busy = useRef(false)

  async function go(to, lbl = '') {
    if (busy.current || !to) return
    if (reduce) {
      navigate(to)
      window.scrollTo(0, 0)
      return
    }
    busy.current = true
    setLabel(lbl)
    setOrigin('bottom')
    setCovering(true)
    await controls.start({ scaleY: 1, transition: { duration: 0.5, ease: SWEEP } })

    navigate(to)
    window.scrollTo(0, 0)
    setOrigin('top')

    await controls.start({ scaleY: 0, transition: { duration: 0.6, ease: SWEEP, delay: 0.06 } })
    setCovering(false)
    busy.current = false
  }

  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={controls}
        style={{ transformOrigin: origin, pointerEvents: covering ? 'auto' : 'none' }}
        className="fixed inset-0 z-[500] flex items-center justify-center bg-bg-deep"
      >
        <motion.span
          className="font-mono text-[12px] uppercase tracking-[0.22em] text-dim"
          animate={{ opacity: covering ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </Ctx.Provider>
  )
}
