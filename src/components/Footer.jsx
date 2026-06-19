import { Link } from 'react-router-dom'

// Internal hash targets resolve to the home route; About stays a static page.
const PRIMARY = [
  ['About', { pathname: '/about' }],
  ['Industries', { pathname: '/', hash: '#industries' }],
  ['Software + AI Integration', { pathname: '/services/ai-integration' }],
  ['Workflow Automation', { pathname: '/', hash: '#services' }],
  ['AI Analytics', { pathname: '/', hash: '#services' }],
]
const SECONDARY = [
  ['Why Us', { pathname: '/about' }],
  ['Work', { pathname: '/work' }],
  ['Insights', { pathname: '/', hash: '#insights' }],
  ['Contact', { pathname: '/contact' }],
]

const linkCls = 'w-max text-[17px] text-text transition-colors duration-200 hover:text-dim'

function FootLink({ label, to }) {
  if (to.external) {
    return <a href={to.external} className={linkCls} data-cursor="↗">{label}</a>
  }
  return <Link to={to} className={linkCls} data-cursor="↗">{label}</Link>
}

export default function Footer({ tight = false }) {
  return (
    <footer className={tight ? 'pt-0' : 'pt-[clamp(80px,11vh,150px)]'}>
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 min-[1081px]:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="m-0 max-w-[360px] text-[16px] leading-[1.5] text-dim">
              Aetos AI — from development to deployment. We design, build and ship intelligent systems that move the metrics that matter.
            </p>
            <div className="mt-10">
              <div className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-mute">Get in touch</div>
              <a href="mailto:hello@aetos.ai" className="block text-[17px] text-text hover:text-dim" data-cursor="↗">hello@aetos.ai</a>
              <a href="/contact" className="block text-[17px] text-text hover:text-dim" data-cursor="↗">Book a demo</a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3.5">
            {PRIMARY.map(([t, to]) => <FootLink key={t} label={t} to={to} />)}
          </nav>
          <nav aria-label="Footer secondary" className="flex flex-col gap-3.5">
            {SECONDARY.map(([t, to]) => <FootLink key={t} label={t} to={to} />)}
          </nav>
        </div>

        <div className="mt-[clamp(50px,7vw,110px)]" aria-hidden="true">
          <svg viewBox="0 0 1200 210" preserveAspectRatio="xMidYMid meet" className="block h-auto w-full">
            <text x="0" y="172" fontSize="240" textLength="1200" lengthAdjust="spacingAndGlyphs" letterSpacing="-8" className="fill-dim font-medium [font-family:var(--font-sans)]">
              AETOS AI
            </text>
          </svg>
        </div>

        <div className="mt-[30px] flex flex-wrap items-center justify-between gap-5 border-t border-line px-0 pb-10 pt-[26px] font-mono text-[12px] uppercase tracking-[0.1em] text-mute">
          <span>© 2026 Aetos AI. All rights reserved.</span>
          <span className="flex items-center gap-2.5 before:h-[7px] before:w-[7px] before:animate-pulse before:rounded-full before:bg-emerald-400 before:content-['']">
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
