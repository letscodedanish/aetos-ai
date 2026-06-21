import MetaRow from './MetaRow'
import { useCurtain } from '../motion/Curtain'
import { PROJECTS } from '../data/projects'

export default function Work() {
  const { go } = useCurtain()

  return (
    <section id="work" className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Portfolio" center="(03/03)" right="Selected Work" />

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[1081px]:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => go(`/work/${p.slug}`, p.name)}
              data-cursor="View"
              className={`reveal ${i % 3 === 1 ? 'd1' : i % 3 === 2 ? 'd2' : ''} group flex flex-col text-left`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-surface">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              <div className="mt-[18px] flex items-baseline justify-between gap-4">
                <h4 className="m-0 text-[clamp(18px,1.5vw,22px)] font-medium tracking-[-0.01em]">{p.name}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{p.ind}</span>
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.5] text-dim">{p.short}</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-[7px] bg-chip px-[11px] py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
