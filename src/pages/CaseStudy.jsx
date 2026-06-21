import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useReveals } from '../hooks'
import { useCurtain } from '../motion/Curtain'
import SplitReveal from '../motion/SplitReveal'
import { ArrowRight } from '../components/icons'
import Footer from '../components/Footer'
import { getProject, nextProject } from '../data/projects'

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

function Frame({ src, className = '', full = false }) {
  return (
    <div
      className={`reveal ${className} group overflow-hidden rounded-lg bg-surface ${full ? 'col-span-full aspect-[16/9]' : 'aspect-[4/3]'}`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover object-top grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100"
      />
    </div>
  )
}

export default function CaseStudy() {
  useReveals()
  const { go } = useCurtain()
  const { slug } = useParams()
  const p = getProject(slug)

  // unknown slug → bounce back to the work index
  if (!p) return <Navigate to="/work" replace />

  const next = nextProject(p.slug)
  const meta = [
    ['Client', p.satisfaction.org],
    ['Industry', p.ind],
    ['Services', p.services],
    ['Year', p.year],
  ]

  return (
    <main key={p.slug}>
      <ScrollPct />

      {/* hero */}
      <section className="pt-[clamp(140px,20vh,240px)]">
        <div className="shell">
          <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-dim before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">
            {p.ind} · {p.services}
          </p>
          <SplitReveal
            Tag="h1"
            className="mt-[26px] text-[clamp(40px,7.5vw,128px)] font-medium leading-[0.95] tracking-[-0.03em]"
            segments={[{ text: p.name }]}
            stagger={0.04}
            play="mount"
          />

          <div className="mt-[clamp(48px,7vw,90px)] grid grid-cols-1 gap-6 border-t border-line pt-[26px] min-[621px]:grid-cols-2 min-[1081px]:grid-cols-4">
            {meta.map(([k, v]) => (
              <div key={k}>
                <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{k}</div>
                <div className="text-[17px] text-text">{v}</div>
              </div>
            ))}
          </div>

          <div className="group mt-[clamp(40px,5vw,72px)] aspect-[16/9] overflow-hidden rounded-lg bg-surface">
            <img
              src={p.img}
              alt={p.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
            />
          </div>

          {/* live + source links */}
          <div className="mt-[clamp(28px,4vw,44px)] flex flex-wrap gap-3.5">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="group inline-flex items-center gap-3 rounded-[12px] bg-accent px-[22px] py-[15px] font-mono text-[12px] uppercase tracking-[0.12em] text-white transition-opacity duration-300 hover:opacity-90"
            >
              Visit live site
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-brand group-hover:translate-x-1.5" />
            </a>
            {p.gh && (
              <a
                href={p.gh}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="group inline-flex items-center gap-3 rounded-[12px] border border-line-2 px-[22px] py-[15px] font-mono text-[12px] uppercase tracking-[0.12em] text-text transition-colors duration-300 hover:border-text"
              >
                View source
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-brand group-hover:translate-x-1.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="py-[clamp(90px,13vh,190px)]">
        <div className="shell">
          <div className="grid grid-cols-1 items-start gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-2">
            <span className="reveal font-mono text-[12px] uppercase tracking-[0.12em] text-dim">Overview</span>
            <div>
              {p.overview.map((para, i) => (
                <p
                  key={i}
                  className={`reveal ${i ? 'd1 mt-7 text-dim' : ''} m-0 text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.01em]`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* impact metrics */}
          <div className="mt-[clamp(56px,8vw,120px)] grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-line bg-line min-[621px]:grid-cols-3">
            {p.impact.map((m) => (
              <div key={m.label} className="reveal bg-bg p-[clamp(24px,3vw,40px)]">
                <div className="text-[clamp(34px,4vw,58px)] font-medium leading-none tracking-[-0.02em]">{m.value}</div>
                <div className="mt-3 text-[15px] text-dim">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="pb-[clamp(90px,13vh,190px)] pt-0">
        <div className="shell">
          <div className="grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2">
            <Frame src={p.img} full />
            {p.gallery.map((g, i) => (
              <Frame key={g} src={g} className={i ? 'd1' : ''} />
            ))}
          </div>
        </div>
      </section>

      {/* client satisfaction */}
      <section className="pb-[clamp(90px,13vh,190px)] pt-0">
        <div className="shell">
          <div className="grid grid-cols-1 items-start gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-[1fr_2fr]">
            <div className="reveal">
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-dim">Client satisfaction</span>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[clamp(48px,6vw,84px)] font-medium leading-none tracking-[-0.02em]">{p.satisfaction.score}</span>
                <span className="font-mono text-[14px] text-mute">/ 5.0</span>
              </div>
              <div className="mt-3 text-[15px] text-accent">★★★★★</div>
            </div>
            <div>
              <p className="reveal m-0 text-[clamp(22px,2.4vw,38px)] font-medium leading-[1.25] tracking-[-0.01em]">
                “{p.satisfaction.quote}”
              </p>
              <div className="reveal d1 mt-8 border-t border-line pt-[18px]">
                <div className="text-[16px] text-text">{p.satisfaction.author}</div>
                <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-mute">{p.satisfaction.org}</div>
              </div>
            </div>
          </div>

          {/* tech stack */}
          <div className="mt-[clamp(56px,9vw,140px)] grid grid-cols-3 items-center border-t border-line pt-[22px] font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
            <span className="flex items-center gap-2.5 before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">Stack</span>
            <span className="text-center">(01/01)</span>
            <span className="text-right">Delivered</span>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {p.tech.map((s) => (
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
                onClick={() => go(`/work/${next.slug}`, next.name)}
                data-cursor="View"
                className="group mt-2 inline-flex items-center gap-6 text-[clamp(40px,7vw,110px)] font-medium leading-none tracking-[-0.03em]"
              >
                {next.name}
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
