import { useEffect } from 'react'
import { useReveals } from '../hooks'
import SplitReveal from '../motion/SplitReveal'
import Footer from '../components/Footer'

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
    return () => { removeEventListener('scroll', upd); removeEventListener('resize', upd) }
  }, [])
  return (
    <div id="scrollpct" aria-hidden="true" className="fixed right-[22px] top-4 z-[200] rounded-[10px] bg-accent px-3 py-2 font-mono text-[12px] tracking-[0.06em] text-white">0%</div>
  )
}

const SUB = ['Workflow Automation', 'AI Chatbots & Assistants', 'Predictive Analytics', 'CRM Automation', 'Voice AI & Call Tracking', 'Custom AI Integrations']
const INDUSTRIES = ['Healthcare', 'Finance', 'Retail', 'Manufacturing']

const chip = 'rounded-[8px] bg-chip px-[14px] py-2.5 font-mono text-[12px] text-dim'

export default function ServiceDetail() {
  useReveals()

  return (
    <main>
      <ScrollPct />

      {/* hero */}
      <section className="pt-[clamp(140px,20vh,240px)]">
        <div className="shell">
          <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-dim before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">
            Service · AI & Automation
          </p>
          <SplitReveal
            Tag="h1"
            play="mount"
            className="mt-[26px] text-[clamp(40px,7vw,120px)] font-medium leading-[0.95] tracking-[-0.03em]"
            segments={[{ text: 'Software + AI Integration' }]}
          />

          <div className="reveal group mt-[clamp(40px,5vw,72px)] aspect-[16/9] overflow-hidden rounded-[12px] bg-bg-deep">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="h-full w-full object-cover grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
            />
          </div>
        </div>
      </section>

      {/* body — sticky label + copy */}
      <section className="pt-[clamp(60px,9vw,120px)]">
        <div className="shell grid grid-cols-1 gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="sticky top-[110px] inline-block w-max rounded-lg bg-chip px-[14px] py-2.5 font-mono text-[12px] text-dim">
              Approach to this service
            </span>
          </div>

          <div>
            <h2 className="reveal m-0 text-[clamp(26px,3vw,44px)] font-medium tracking-[-0.015em]">Fuse AI into the tools you already run</h2>
            <p className="reveal d1 mt-6 max-w-[68ch] text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-dim">
              We integrate battle-tested AI engines into the systems you already run — CRM, booking, operations — automating complex workflows and predicting customer behaviour. Future-proofed performance, with no rip-and-replace.
            </p>
            <p className="reveal d1 mt-5 max-w-[68ch] text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-dim">
              Every integration is shaped around your data, your stack and your goals, with usability weighted as heavily as capability. The result is software that feels immediate and quietly does the heavy lifting.
            </p>

            <h2 className="reveal mt-[clamp(56px,7vw,90px)] m-0 text-[clamp(26px,3vw,44px)] font-medium tracking-[-0.015em]">Built for production</h2>
            <p className="reveal d1 mt-6 max-w-[68ch] text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-dim">
              AI is not a demo — it has to run reliably under load. We build fast, observable, well-structured systems that scale and stay easy to maintain.
            </p>
            <p className="reveal d1 mt-5 max-w-[68ch] text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-dim">
              We monitor, measure and tune in production so the system keeps getting smarter — with security and compliance built in from day one.
            </p>

            <div className="reveal group mt-[clamp(40px,5vw,64px)] aspect-[16/10] overflow-hidden rounded-[12px] bg-bg-deep">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="h-full w-full object-cover grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
              />
            </div>

            {/* sub-services */}
            <div className="reveal mt-[clamp(56px,7vw,90px)]">
              <h3 className="m-0 text-[clamp(18px,1.6vw,22px)] font-medium">Sub-Services</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {SUB.map((s) => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            {/* industries */}
            <div className="reveal mt-[clamp(40px,5vw,64px)]">
              <h3 className="m-0 text-[clamp(18px,1.6vw,22px)] font-medium">Industries</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {INDUSTRIES.map((s) => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bottom meta */}
      <section className="pt-[clamp(70px,10vw,140px)]">
        <div className="shell">
          <div className="grid grid-cols-3 items-center border-t border-line pt-[22px] font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
            <span className="flex items-center gap-2.5 before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">Process</span>
            <span className="text-center">(01/04)</span>
            <span className="text-right">Production Delivery</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
