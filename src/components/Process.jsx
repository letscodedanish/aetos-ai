import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, IcoSearch, IcoGlobe, IcoBulb, IcoPen, IcoCode, IcoRocket } from './icons'
import SplitReveal from '../motion/SplitReveal'

const STEPS = [
  { n: '01', Ico: IcoSearch, title: 'Discovery', body: 'We map your goals, systems and bottlenecks in focused working sessions — no guesswork.', img: 'proc-discovery.jpg' },
  { n: '02', Ico: IcoBulb, title: 'Strategy', body: 'A clear roadmap: architecture, model choices, integrations and a delivery timeline.', img: 'proc-strategy.jpg' },
  { n: '03', Ico: IcoCode, title: 'Build & Integrate', body: 'Agile delivery with weekly demos, wired into your CRM, tools and data — no rip-and-replace.', img: 'proc-build.jpg' },
  { n: '04', Ico: IcoRocket, title: 'Optimize', body: 'We monitor, measure and tune in production so the system keeps getting smarter.', img: 'proc-optimize.jpg' },
]

export default function Process() {
  const rail = useRef(null)
  const [prevOff, setPrevOff] = useState(true)
  const [nextOff, setNextOff] = useState(false)

  const step = () => {
    const card = rail.current?.querySelector('[data-pcard]')
    return card ? card.getBoundingClientRect().width + 20 : 360
  }
  const syncBtns = () => {
    const el = rail.current
    if (!el) return
    setPrevOff(el.scrollLeft <= 4)
    setNextOff(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4)
  }
  const scrollByStep = (dir) => rail.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })

  useEffect(() => {
    const el = rail.current
    if (!el) return
    syncBtns()
    el.addEventListener('scroll', syncBtns, { passive: true })
    addEventListener('resize', syncBtns)

    // pointer drag
    let down = false, startX = 0, startScroll = 0, moved = false
    const onDown = (e) => {
      down = true; moved = false
      startX = e.clientX; startScroll = el.scrollLeft
      el.classList.add('cursor-grabbing', 'snap-none')
    }
    const onMove = (e) => {
      if (!down) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 3) moved = true
      el.scrollLeft = startScroll - dx
    }
    const onUp = () => { down = false; el.classList.remove('cursor-grabbing', 'snap-none') }
    const onClickCapture = (e) => { if (moved) { e.preventDefault(); e.stopPropagation() } }

    el.addEventListener('pointerdown', onDown)
    addEventListener('pointermove', onMove)
    addEventListener('pointerup', onUp)
    el.addEventListener('click', onClickCapture, true)

    return () => {
      el.removeEventListener('scroll', syncBtns)
      removeEventListener('resize', syncBtns)
      el.removeEventListener('pointerdown', onDown)
      removeEventListener('pointermove', onMove)
      removeEventListener('pointerup', onUp)
      el.removeEventListener('click', onClickCapture, true)
    }
  }, [])

  return (
    <section className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-[720px]">
            <SplitReveal
              Tag="h2"
              className="m-0 text-[clamp(32px,4.6vw,66px)] font-medium leading-none tracking-[-0.02em]"
              segments={[{ text: 'How we work' }]}
            />
            <p className="reveal d1 mt-[22px] max-w-[540px] text-[clamp(15px,1.3vw,18px)] text-dim">
              A streamlined path from idea to impact — from discovery and strategy into build, integration and continuous optimisation in production.
            </p>
          </div>
          <div className="reveal d1 flex gap-3">
            <button
              className="grid h-[58px] w-[58px] place-items-center rounded-full border border-line-2 transition-all duration-300 hover:border-text hover:bg-[rgba(237,233,225,0.06)] disabled:cursor-default disabled:opacity-30"
              aria-label="Previous"
              disabled={prevOff}
              onClick={() => scrollByStep(-1)}
            >
              <ArrowLeft className="h-[18px] w-[18px]" />
            </button>
            <button
              className="grid h-[58px] w-[58px] place-items-center rounded-full border border-line-2 transition-all duration-300 hover:border-text hover:bg-[rgba(237,233,225,0.06)] disabled:cursor-default disabled:opacity-30"
              aria-label="Next"
              disabled={nextOff}
              onClick={() => scrollByStep(1)}
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="shell">
        <div
          ref={rail}
          data-cursor="Drag"
          className="no-scrollbar mt-[clamp(40px,5vw,72px)] flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-2.5"
        >
          {STEPS.map(({ n, Ico, title, body, img }) => (
            <article
              key={n}
              data-pcard
              className="group relative flex min-h-[540px] flex-none basis-[clamp(300px,32vw,460px)] snap-start select-none flex-col rounded-[14px] bg-surface p-[14px]"
            >
              <div className="relative flex-1 overflow-hidden rounded-[10px] bg-bg-deep">
                <img
                  src={`/uploads/${img}`}
                  alt=""
                  draggable="false"
                  className="h-full w-full object-cover grayscale-[0.6] brightness-[0.8] transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100"
                />
                <span className="absolute left-3 top-3 grid h-12 w-12 place-items-center rounded-[11px] bg-bg/70 text-text backdrop-blur-sm [&_svg]:h-[22px] [&_svg]:w-[22px]">
                  <Ico />
                </span>
                <span className="absolute right-3 top-3 font-mono text-[13px] tracking-[0.1em] text-text/80">{n}</span>
              </div>
              <div className="px-3 pb-2 pt-5">
                <h4 className="mb-3 text-[clamp(24px,2vw,32px)] font-medium tracking-[-0.01em]">{title}</h4>
                <p className="m-0 text-[16px] leading-[1.45] text-dim">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
