import { useEffect } from 'react'
import { useReveals } from '../hooks'
import { useCurtain } from '../motion/Curtain'
import SplitReveal from '../motion/SplitReveal'
import { ArrowRight } from '../components/icons'
import Footer from '../components/Footer'

const META = [
  ['Client', 'Confidential — Fintech'],
  ['Industry', 'Payments'],
  ['Services', 'AI Integration, Platform Engineering'],
  ['Year', '2026'],
]
const SCOPE = ['Payments Engineering', 'Real-time Fraud AI', 'Cloud Architecture', 'Observability', 'CI/CD', 'Performance & Security']

// scroll-progress badge, ported from the static .scrollpct
function ScrollPct() {
  useEffect(() => {
    const el = document.getElementById('scrollpct')
    if (!el) return
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      el.textContent = (h > 0 ? Math.round((scrollY / h) * 100) : 0) + '%'
    }
    addEventListener('scroll', upd, { passive: true })
    addEventListener('resize', upd)
    upd()
    return () => {
      removeEventListener('scroll', upd)
      removeEventListener('resize', upd)
    }
  }, [])
  return (
    <div
      id="scrollpct"
      aria-hidden="true"
      className="fixed right-[22px] top-4 z-[200] rounded-[10px] bg-accent px-3 py-2 font-mono text-[12px] tracking-[0.06em] text-white"
    >
      0%
    </div>
  )
}

function Frame({ img, className = '', full = false }) {
  return (
    <div
      className={`reveal ${className} group overflow-hidden rounded-lg bg-surface ${full ? 'col-span-full aspect-[16/9]' : 'aspect-[4/3]'}`}
    >
      <img
        src={`/uploads/${img}`}
        alt=""
        className="h-full w-full object-cover grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100"
      />
    </div>
  )
}

export default function CaseStudy() {
  useReveals()
  const { go } = useCurtain()

  return (
    <main>
      <ScrollPct />

      {/* hero */}
      <section className="pt-[clamp(140px,20vh,240px)]">
        <div className="shell">
          <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-dim before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">
            Fintech · AI Integration
          </p>
          <SplitReveal
            Tag="h1"
            className="mt-[26px] text-[clamp(40px,7.5vw,128px)] font-medium leading-[0.95] tracking-[-0.03em]"
            segments={[{ text: 'Payment Processing Platform' }]}
            stagger={0.04}
            play="mount"
          />

          <div className="mt-[clamp(48px,7vw,90px)] grid grid-cols-1 gap-6 border-t border-line pt-[26px] min-[621px]:grid-cols-2 min-[1081px]:grid-cols-4">
            {META.map(([k, v]) => (
              <div key={k}>
                <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{k}</div>
                <div className="text-[17px] text-text">{v}</div>
              </div>
            ))}
          </div>

          <div className="group mt-[clamp(40px,5vw,72px)] aspect-[16/9] overflow-hidden rounded-lg bg-surface">
            <img
              src="/uploads/pasted-1781868421009-0.png"
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="py-[clamp(90px,13vh,190px)]">
        <div className="shell">
          <div className="grid grid-cols-1 items-start gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-2">
            <span className="reveal font-mono text-[12px] uppercase tracking-[0.12em] text-dim">Overview</span>
            <div>
              <p className="reveal m-0 text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.01em]">
                A scalable, secure payment platform with real-time intelligence. Transactions had to clear fast, stay safe and survive spikes without flinching.
              </p>
              <p className="reveal d1 mt-7 text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.01em] text-dim">
                We re-architected the pipeline and wired in a real-time fraud model — reducing transaction times by 40% and increasing throughput 3×, with detection that flags risk in milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* images */}
      <section className="pb-[clamp(90px,13vh,190px)] pt-0">
        <div className="shell">
          <div className="grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2">
            <Frame img="pasted-1781868361394-0.png" full />
            <Frame img="pasted-1781868367116-0.png" />
            <Frame img="pasted-1781868408069-0.png" className="d1" />
          </div>
        </div>
      </section>

      {/* outcome */}
      <section className="pb-[clamp(90px,13vh,190px)] pt-0">
        <div className="shell">
          <div className="grid grid-cols-1 items-start gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-2">
            <span className="reveal font-mono text-[12px] uppercase tracking-[0.12em] text-dim">Outcome</span>
            <div>
              <p className="reveal m-0 text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.01em]">
                Built for production. The result is a platform that scales under load without losing reliability or compliance.
              </p>
              <p className="reveal d1 mt-7 text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.01em] text-dim">
                A system that gives the business room to grow while keeping operations observable, secure and easy to maintain.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(56px,9vw,140px)] grid grid-cols-3 items-center border-t border-line pt-[22px] font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
            <span className="flex items-center gap-2.5 before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">Scope</span>
            <span className="text-center">(01/01)</span>
            <span className="text-right">Delivered</span>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {SCOPE.map((s) => (
              <span key={s} className="rounded-[7px] bg-chip px-[11px] py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* next project */}
      <section className="pt-0">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-[30px] border-t border-line py-[clamp(40px,5vw,70px)]">
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-mute">Next project</div>
              <button
                onClick={() => go('/work/onpoint', 'Telehealth Solution')}
                data-cursor="View"
                className="group mt-2 inline-flex items-center gap-6 text-[clamp(40px,7vw,110px)] font-medium leading-none tracking-[-0.03em]"
              >
                Telehealth Solution
                <ArrowRight className="h-[clamp(34px,5vw,72px)] w-auto transition-transform duration-[350ms] ease-brand group-hover:translate-x-4" />
              </button>
            </div>
          </div>
        </div>

        <Footer tight />
      </section>
    </main>
  )
}
