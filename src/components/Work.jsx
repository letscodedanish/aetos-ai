import MetaRow from './MetaRow'
import { ArrowRight } from './icons'

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

// Real shipped products. Screenshots live in /public/uploads/portfolio;
// the two deploys that are currently down fall back to themed imagery.
const PROJECTS = [
  {
    img: '/uploads/portfolio/finance.png',
    name: 'FinTrack',
    ind: 'Fintech',
    desc: 'A multi-bank dashboard that aggregates accounts through Plaid and moves money via Dwolla. Gave our fintech client a single source of truth and cut manual reconciliation to near zero.',
    tags: ['Plaid + Dwolla', 'Next.js'],
    live: 'https://bank-client-sigma.vercel.app/sign-in',
    gh: 'https://github.com/letscodedanish/Finance-Tracker-SaaS',
    d: '',
  },
  {
    img: '/uploads/portfolio/automation.png',
    name: 'ZapFlow',
    ind: 'Automation',
    desc: 'A drag-and-drop automation builder wiring Slack, Drive and Notion together with AI steps. Replaced hours of repetitive ops work every week for the teams running it.',
    tags: ['AI Workflows', 'No-code'],
    live: 'https://ai-automation-builder.vercel.app',
    gh: 'https://github.com/letscodedanish/AI-Automation-Builder',
    d: 'd1',
  },
  {
    img: UNSPLASH('photo-1526378722484-bd91ca387e72'),
    name: 'AI Email Client',
    ind: 'Productivity',
    desc: 'A Superhuman-style email client with OpenAI drafting and Pinecone semantic search. Helped users clear inboxes faster with AI triage and context-aware replies.',
    tags: ['OpenAI + RAG', 'Stripe'],
    live: 'https://superhuman-xi.vercel.app',
    gh: 'https://github.com/letscodedanish/Email-Client-SaaS',
    d: 'd2',
  },
  {
    img: UNSPLASH('photo-1505751172876-fa1923c5c528'),
    name: 'SehatSathi',
    ind: 'Healthcare',
    desc: 'A telemedicine platform bringing virtual consultations and Ayurvedic care to remote Indian communities — expanding access for patients far from any clinic.',
    tags: ['Telemedicine', 'React Query'],
    live: 'https://hack-sapiens-llgt35glb-letscodedanishs-projects.vercel.app/',
    gh: 'https://github.com/letscodedanish/Sehat-Sathi',
    d: '',
  },
  {
    img: '/uploads/portfolio/ide.png',
    name: 'Advance IDE',
    ind: 'DevTools',
    desc: 'A browser-based IDE running each project in isolated Docker / Kubernetes containers with live collaboration. Zero-setup onboarding for distributed engineering teams.',
    tags: ['Cloud IDE', 'Kubernetes'],
    live: 'https://ide-frontend-git-main-letscodedanishs-projects.vercel.app/',
    gh: 'https://github.com/letscodedanish/IDE-K8S',
    d: 'd1',
  },
  {
    img: '/uploads/portfolio/dynish.png',
    name: 'Dynish',
    ind: 'SaaS',
    desc: 'A streamlined client-onboarding app with OTP phone auth and a guided flow — reducing drop-off and getting new customers active in minutes, not days.',
    tags: ['Onboarding', 'OTP Auth'],
    live: 'https://dynish-client-app.vercel.app/',
    gh: '',
    d: 'd2',
  },
]

export default function Work() {
  return (
    <section id="work" className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Portfolio" center="(03/03)" right="Selected Work" />

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[1081px]:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.name} className={`reveal ${p.d} group flex flex-col`}>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Live ↗"
                className="block aspect-[4/3] overflow-hidden rounded-[6px] bg-surface"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100"
                />
              </a>
              <div className="mt-[18px] flex items-baseline justify-between gap-4">
                <h4 className="m-0 text-[clamp(18px,1.5vw,22px)] font-medium tracking-[-0.01em]">{p.name}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{p.ind}</span>
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.5] text-dim">{p.desc}</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-[7px] bg-chip px-[11px] py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-[18px] flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.1em]">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/l inline-flex items-center gap-1.5 text-text transition-opacity duration-300 hover:opacity-60"
                >
                  Live Demo
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 ease-brand group-hover/l:translate-x-1" />
                </a>
                {p.gh && (
                  <a
                    href={p.gh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-mute transition-colors duration-300 hover:text-text"
                  >
                    GitHub
                    <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
