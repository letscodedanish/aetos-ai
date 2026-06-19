import MetaRow from './MetaRow'

const TESTIMONIALS = [
  { quote: 'Aetos AI automated our entire intake pipeline — what used to take three days now happens in minutes. The team understood our operations better than we did.', initials: 'OD', name: 'Operations Director', org: 'Logistics & Supply Chain' },
  { quote: 'Their predictive models flagged churn weeks before we would have caught it. The ROI was obvious within the first quarter.', initials: 'HG', name: 'Head of Growth', org: 'B2B SaaS' },
  { quote: 'From first call to production was under six weeks, with a seamless integration into our existing CRM. Genuinely impressive engineering.', initials: 'CT', name: 'Chief Technology Officer', org: 'Healthcare Platform' },
]

export default function Testimonials() {
  return (
    <section className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Testimonials" center="(—)" right="Trusted by teams that ship" />

        <h3 className="reveal mt-[clamp(40px,6vw,80px)] text-[clamp(30px,4.6vw,66px)] font-medium leading-none tracking-[-0.02em]">
          What it's like to build with Aetos AI
        </h3>

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-5 min-[768px]:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.initials} className={`reveal d${i} flex flex-col rounded-[14px] bg-surface p-[30px]`}>
              <div className="font-sans text-[44px] leading-none text-dim">“</div>
              <blockquote className="mt-3 text-[16px] leading-[1.55] text-text">{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3.5 border-t border-line pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-chip font-mono text-[12px] text-text">{t.initials}</span>
                <span>
                  <span className="block text-[14px] font-medium text-text">{t.name}</span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
