import MetaRow from './MetaRow'

const ARTICLES = [
  {
    img: 'pasted-1781868401695-0.png',
    title: 'Shipping AI to production without the rip-and-replace',
    body: 'How we fuse models into the tools you already run, safely.',
    tag: 'Engineering',
    date: 'Mar 12, 2026',
    d: '',
  },
  {
    img: 'pasted-1781868408069-0.png',
    title: 'Catching churn weeks early with predictive models',
    body: 'Turning raw signals into decisions before revenue walks out.',
    tag: 'Analytics',
    date: 'Feb 18, 2026',
    d: 'd1',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Insights" center="(02/03)" right="Featured Articles" />

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-6 min-[1081px]:grid-cols-2">
          {ARTICLES.map((a) => (
            <a key={a.title} href="#" data-cursor="Read" className={`reveal ${a.d} group block`}>
              <div className="aspect-[16/11] overflow-hidden rounded-[4px] bg-surface">
                <img
                  src={`/uploads/${a.img}`}
                  alt=""
                  className="h-full w-full object-cover grayscale-[0.5] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              <h3 className="mb-2 mt-[26px] text-[clamp(20px,1.8vw,28px)] font-medium tracking-[-0.01em] transition-opacity duration-300 group-hover:opacity-60">
                {a.title}
              </h3>
              <p className="m-0 mb-[22px] text-[16px] text-dim">{a.body}</p>
              <div className="flex items-center justify-between border-t border-line pt-[18px]">
                <span className="rounded-lg bg-chip px-[13px] py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
                  {a.tag}
                </span>
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-mute">{a.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
