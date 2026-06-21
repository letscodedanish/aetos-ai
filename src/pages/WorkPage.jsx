import { useEffect, useRef } from 'react'
import { useReveals } from '../hooks'
import SplitReveal from '../motion/SplitReveal'
import Footer from '../components/Footer'

const PROJECTS = [
  { img: 'finance', name: 'FinTrack', ind: 'Fintech', tags: ['Next.js', 'Plaid · Dwolla'], url: 'https://bank-client-sigma.vercel.app/sign-in', type: 'live' },
  { img: 'automation', name: 'ZapFlow', ind: 'Automation', tags: ['Next.js 14', 'Drag-and-drop'], url: 'https://ai-automation-builder.vercel.app', type: 'live' },
  { img: 'email', name: 'AI Email Client', ind: 'Productivity', tags: ['OpenAI', 'Stripe'], url: 'https://github.com/letscodedanish/Email-Client-SaaS', type: 'code' },
  { img: 'sehat', name: 'SehatSathi', ind: 'Healthcare', tags: ['React · Node', 'Telemedicine'], url: 'https://github.com/letscodedanish/Sehat-Sathi', type: 'code' },
  { img: 'ide', name: 'Advance IDE', ind: 'DevTools', tags: ['Kubernetes', 'Monaco · Docker'], url: 'https://ide-frontend-git-main-letscodedanishs-projects.vercel.app/', type: 'live' },
  { img: 'dynish', name: 'Dynish', ind: 'Onboarding', tags: ['React', 'Client portal'], url: 'https://dynish-client-app.vercel.app/', type: 'live' },
]

export default function WorkPage() {
  useReveals()
  const rail = useRef(null)

  // wheel-to-horizontal + pointer drag
  useEffect(() => {
    const el = rail.current
    if (!el) return

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1
      // only hijack when there's room to scroll horizontally
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    let down = false, startX = 0, startScroll = 0, moved = false
    const onDown = (e) => { down = true; moved = false; startX = e.clientX; startScroll = el.scrollLeft; el.classList.add('cursor-grabbing') }
    const onMove = (e) => {
      if (!down) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 3) moved = true
      el.scrollLeft = startScroll - dx
    }
    const onUp = () => { down = false; el.classList.remove('cursor-grabbing') }
    const onClickCapture = (e) => { if (moved) { e.preventDefault(); e.stopPropagation() } }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('pointerdown', onDown)
    addEventListener('pointermove', onMove)
    addEventListener('pointerup', onUp)
    el.addEventListener('click', onClickCapture, true)
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('pointerdown', onDown)
      removeEventListener('pointermove', onMove)
      removeEventListener('pointerup', onUp)
      el.removeEventListener('click', onClickCapture, true)
    }
  }, [])

  return (
    <main>
      <section className="pt-[clamp(140px,20vh,240px)]">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SplitReveal
              Tag="h1"
              play="mount"
              className="m-0 text-[clamp(48px,8vw,140px)] font-medium leading-[0.95] tracking-[-0.03em]"
              segments={[{ text: 'Selected Work' }]}
            />
            <p className="reveal d1 mb-2 font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
              Scroll / drag horizontally →
            </p>
          </div>
        </div>

        {/* horizontal rail */}
        <div
          ref={rail}
          data-cursor="Drag"
          className="no-scrollbar mt-[clamp(40px,5vw,72px)] flex cursor-grab gap-8 overflow-x-auto px-[clamp(22px,5vw,88px)] pb-4"
        >
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor={p.type === 'code' ? 'Code ↗' : 'Live ↗'}
              className="group flex w-[min(78vw,720px)] flex-none flex-col text-left"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-surface">
                <img
                  src={`/uploads/portfolio/${p.img}.png`}
                  alt={`${p.name} preview`}
                  className="h-full w-full select-none object-cover object-top grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100"
                  draggable="false"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h4 className="m-0 text-[clamp(20px,1.8vw,28px)] font-medium tracking-[-0.01em]">{p.name}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{p.ind}</span>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-[7px] bg-chip px-[11px] py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-[clamp(70px,10vw,140px)]">
        <Footer tight />
      </div>
    </main>
  )
}
