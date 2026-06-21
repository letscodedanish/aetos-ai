import { motion } from 'motion/react'
import { ArrowRight } from './icons'
import SplitReveal from '../motion/SplitReveal'
import { useMagnetic } from '../motion/useMagnetic'

const W = { w1: 'w-[360px]', w2: 'w-[560px]', w3: 'w-[300px]' }

// marquee tiles: [image, width-key]
const TILES = [
  ['photo-1518770660439-4636190af475', 'w1'],
  ['photo-1581091226825-a6a2a5aee158', 'w2'],
  ['photo-1573164713988-8665fc963095', 'w3'],
  ['photo-1488590528505-98d2b5aba04b', 'w1'],
  ['photo-1531297484001-80022131f5a1', 'w2'],
  ['photo-1504384308090-c894fdcc538d', 'w3'],
]

const MASK = 'linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)'

function Tile({ img, w, hidden }) {
  return (
    <div
      className={`${W[w]} h-[300px] min-[621px]:h-[430px] flex-none overflow-hidden rounded-[4px] bg-surface`}
      aria-hidden={hidden || undefined}
    >
      <img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=1400&q=80`} alt="" className="h-full w-full object-cover" />
    </div>
  )
}

export default function Hero() {
  const mag = useMagnetic(0.35)

  return (
    <section className="pt-[clamp(150px,22vh,280px)]">
      <div className="shell">
        <SplitReveal
          Tag="h1"
          className="m-0 text-[clamp(46px,8.6vw,150px)] font-medium leading-[0.98] tracking-[-0.025em]"
          segments={[
            { text: 'From development to', className: 'text-text' },
            { text: 'deployment.', className: 'text-dim' },
          ]}
          stagger={0.05}
          play="mount"
        />

        <div className="mt-[clamp(28px,4vw,56px)] flex flex-wrap items-end justify-between gap-10">
          <p className="m-0 max-w-[560px] text-[clamp(16px,1.4vw,20px)] leading-[1.45] text-dim">
            Aetos AI is an AI-native engineering studio. We design, build and ship intelligent systems that automate the busywork and surface the insights that grow your business.
          </p>
          <motion.a
            ref={mag.ref}
            style={mag.style}
            onMouseMove={mag.onMouseMove}
            onMouseLeave={mag.onMouseLeave}
            href="#contact"
            data-cursor="↗"
            className="group inline-flex min-w-[270px] items-center justify-between gap-[38px] rounded-[14px] border border-line-2 px-[26px] py-[22px] font-mono text-[12px] uppercase tracking-[0.14em] text-text transition-colors duration-300 ease-brand hover:border-text hover:bg-[rgba(237,233,225,0.05)]"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-brand group-hover:translate-x-1.5" />
          </motion.a>
        </div>
      </div>

      {/* marquee */}
      <div
        className="group relative mt-[clamp(48px,6vw,96px)] overflow-hidden"
        aria-label="Selected work"
        style={{ WebkitMaskImage: MASK, maskImage: MASK }}
      >
        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {TILES.map(([img, w], i) => <Tile key={i} img={img} w={w} />)}
          {TILES.map(([img, w], i) => <Tile key={`b${i}`} img={img} w={w} hidden />)}
        </div>
      </div>
    </section>
  )
}
