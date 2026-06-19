import { motion } from 'motion/react'
import { ArrowRight } from './icons'
import SplitReveal from '../motion/SplitReveal'
import { useMagnetic } from '../motion/useMagnetic'
import Footer from './Footer'

export default function Closing() {
  const mag = useMagnetic(0.3)

  return (
    <section id="contact" className="pt-[clamp(90px,12vh,170px)]">
      <div className="shell">
        <div className="flex flex-col flex-wrap items-start justify-between gap-[50px] min-[1081px]:flex-row">
          <SplitReveal
            Tag="h2"
            className="m-0 max-w-[1080px] text-[clamp(28px,4vw,64px)] font-medium leading-[1.06] tracking-[-0.02em]"
            segments={[
              { text: 'Ready to put AI to work in your business?' },
              { text: 'From development to deployment, we ship intelligent systems that move the metrics that matter.', className: 'text-dim' },
            ]}
          />
          <motion.a
            ref={mag.ref}
            style={mag.style}
            onMouseMove={mag.onMouseMove}
            onMouseLeave={mag.onMouseLeave}
            href="mailto:hello@aetos.ai"
            data-cursor="↗"
            className="flex w-full min-w-[320px] flex-none items-end justify-between gap-[30px] self-stretch rounded-2xl border border-line p-[26px] font-mono text-[12px] uppercase tracking-[0.14em] text-dim transition-colors duration-300 ease-brand hover:border-text hover:bg-[rgba(237,233,225,0.04)] hover:text-text min-[1081px]:w-auto"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      <Footer />
    </section>
  )
}
