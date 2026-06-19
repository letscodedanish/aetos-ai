import { useEffect, useState } from 'react'
import { useReveals } from '../hooks'
import SplitReveal from '../motion/SplitReveal'
import { ArrowRight } from '../components/icons'
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

const fieldCls = 'w-full rounded-[10px] border border-line bg-surface-2 px-4 py-3.5 text-[16px] text-text placeholder:text-mute outline-none transition-colors duration-200 focus:border-line-2'
const labelCls = 'mb-2.5 block text-[15px] text-text'

const CONTACT_ROWS = [
  ['Email', <a key="e" href="mailto:hello@aetos.ai" className="text-text hover:text-dim" data-cursor="↗">hello@aetos.ai</a>],
  ['Demo', <a key="d" href="#" className="text-text hover:text-dim" data-cursor="↗">Book a 30-min walkthrough</a>],
  ['Follow', <a key="f" href="#" className="text-text hover:text-dim" data-cursor="↗">@aetosai</a>],
]

export default function Contact() {
  useReveals()
  const [sent, setSent] = useState(false)

  return (
    <main>
      <ScrollPct />

      <section className="relative pt-[clamp(140px,20vh,240px)]">
        <div className="shell">
          <div className="grid grid-cols-1 gap-[clamp(40px,6vw,90px)] min-[1081px]:grid-cols-2">
            {/* left — heading + details */}
            <div className="flex flex-col">
              <SplitReveal
                Tag="h1"
                play="mount"
                className="m-0 text-[clamp(48px,7vw,110px)] font-medium leading-[0.98] tracking-[-0.03em]"
                segments={[{ text: 'Get in touch' }]}
              />
              <div className="mt-8 border-t border-line pt-8">
                <p className="m-0 max-w-[440px] text-[clamp(16px,1.4vw,20px)] leading-[1.45] text-dim">
                  Use the contact form for general enquiries, or book a demo to see how Aetos AI could put intelligent systems to work in your business.
                </p>
              </div>

              <dl className="mt-auto flex flex-col pt-[clamp(40px,6vw,90px)]">
                {CONTACT_ROWS.map(([k, v]) => (
                  <div key={k} className="flex items-center gap-4 border-t border-line py-6 text-[17px]">
                    <dt className="text-dim">{k}</dt>
                    <dd className="m-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* right — form */}
            <form
              className="reveal flex flex-col gap-6 rounded-[16px] bg-surface p-[clamp(24px,3vw,40px)]"
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              <div className="grid grid-cols-1 gap-6 min-[621px]:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" className={fieldCls} placeholder="Your name" required />
                </div>
                <div>
                  <label className={labelCls} htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" className={fieldCls} placeholder="Email address" required />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="c-reason">Reason for enquiry</label>
                <div className="relative">
                  <select id="c-reason" name="reason" defaultValue="" className={`${fieldCls} appearance-none pr-10`}>
                    <option value="" disabled>Select a reason</option>
                    <option>New project</option>
                    <option>Software + AI integration</option>
                    <option>Workflow automation</option>
                    <option>AI analytics</option>
                    <option>General enquiry</option>
                  </select>
                  <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows={5} className={`${fieldCls} resize-y`} placeholder="How can I help?" />
              </div>

              <label className="flex items-center gap-3 text-[15px] text-text">
                <input type="checkbox" required className="h-4 w-4 rounded border-line-2 bg-surface-2 accent-accent" />
                I accept the <a href="#" className="text-text underline-offset-2 hover:underline" data-cursor="↗">Terms &amp; Conditions</a>
              </label>

              <button
                type="submit"
                data-cursor="↗"
                className="group mt-2 flex items-center justify-between rounded-[12px] border border-line bg-surface-2 px-6 py-5 font-mono text-[12px] uppercase tracking-[0.14em] text-text transition-colors duration-300 ease-brand hover:border-text hover:bg-[rgba(237,233,225,0.04)]"
              >
                {sent ? 'Thanks — I’ll be in touch' : 'Send enquiry'}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        {/* faint map backdrop */}
        <div aria-hidden="true" className="pointer-events-none mt-[clamp(60px,8vw,120px)] h-[260px] w-full opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(237,233,225,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(237,233,225,0.6) 1px, transparent 1px), linear-gradient(115deg, transparent 48%, rgba(237,233,225,0.8) 49%, rgba(237,233,225,0.8) 50%, transparent 51%)',
            backgroundSize: '60px 60px, 60px 60px, 100% 100%',
          }}
        />
      </section>

      <Footer tight />
    </main>
  )
}
