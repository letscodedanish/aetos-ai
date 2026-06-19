import { useReveals } from '../hooks'
import SplitReveal from '../motion/SplitReveal'
import MetaRow from '../components/MetaRow'
import Stats from '../components/Stats'
import Closing from '../components/Closing'

const VALUES = [
  ['01', 'Innovation-Driven', 'We work at the frontier — constantly exploring new models and methods, and treating hard problems as opportunities to create impact.'],
  ['02', 'Speed & Efficiency', 'An optimised delivery process gets high-quality systems to market faster, without compromising quality or performance.'],
  ['03', 'Deep Technical Expertise', 'Industry veterans across cloud architecture and machine learning bring the right expertise to your specific challenges.'],
  ['04', 'Client-Focused Approach', 'Through active listening and collaboration we build a deep understanding of your objectives, and deliver tangible results.'],
]

const ABOUT_STATS = [
  ['97%', 'Client satisfaction'],
  ['10+', 'Projects delivered'],
  ['2+', 'Years experience'],
  ['24/7', 'Support'],
]

export default function About() {
  useReveals()

  return (
    <main>
      {/* hero */}
      <section className="pt-[clamp(130px,18vh,220px)]">
        <div className="shell">
          <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-dim before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">
            About Aetos AI
          </p>
          <SplitReveal
            Tag="h1"
            play="mount"
            className="mt-6 text-[clamp(40px,6vw,104px)] font-medium leading-[0.98] tracking-[-0.025em]"
            segments={[
              { text: 'A partner that ships,', className: 'text-text' },
              { text: 'not just advises.', className: 'text-dim' },
            ]}
          />

          <div className="mt-[clamp(30px,4vw,56px)] grid grid-cols-1 items-stretch gap-[clamp(30px,5vw,80px)] min-[1081px]:grid-cols-2">
            {/* portrait / studio image placeholder — drop one at /uploads/portrait.jpg */}
            <div className="aspect-[3/4] overflow-hidden rounded-[6px] bg-surface">
              <img
                src="/uploads/portrait.jpg"
                alt="Aetos AI"
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            <div className="flex flex-col">
              <p className="m-0 text-[clamp(22px,2.4vw,38px)] font-medium leading-[1.15] tracking-[-0.015em]">
                We pair expert engineering with a pragmatic, ROI-driven approach to AI.{' '}
                <span className="text-dim">Security and compliance are built in from day one, and a genuine commitment to your success runs through every engagement.</span>
              </p>

              <div id="recognition" className="mt-auto grid grid-cols-1 gap-5 pt-[50px] min-[621px]:grid-cols-2">
                <div className="reveal flex min-h-[280px] flex-col rounded-[14px] bg-surface p-[26px]">
                  <h4 className="m-0 text-[22px] font-medium">Proven Delivery</h4>
                  <p className="mt-auto pt-6 text-[15px] leading-[1.45] text-dim">
                    An expert team with a track record of moving from first call to production in weeks, not quarters.
                  </p>
                </div>
                <div className="reveal d1 flex min-h-[280px] flex-col rounded-[14px] bg-surface p-[26px]">
                  <h4 className="m-0 text-[22px] font-medium">Security & Compliance</h4>
                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-6 font-mono text-[11px] uppercase tracking-[0.06em] text-mute">
                    <span>HIPAA-ready</span>
                    <span>SOC 2 practices</span>
                    <span>Built in from day one</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="pt-[clamp(70px,9vw,120px)]">
        <Stats items={ABOUT_STATS} />
      </section>

      {/* statement + values */}
      <section className="pb-[clamp(90px,13vh,190px)] pt-0">
        <div className="shell">
          <SplitReveal
            Tag="h2"
            className="m-0 max-w-[1400px] text-[clamp(30px,4.6vw,78px)] font-medium leading-[1.04] tracking-[-0.02em]"
            segments={[
              { text: 'We are an AI-native engineering studio —' },
              { text: 'pairing clear strategy with craft so intelligent systems can be trusted in production.', className: 'text-dim' },
            ]}
          />

          <MetaRow left="Why us" center="(01/02)" right="How we work" />

          <div className="mt-[clamp(50px,6vw,88px)] grid grid-cols-1 gap-5 min-[1081px]:grid-cols-2">
            {VALUES.map(([n, title, body], i) => (
              <div key={n} className={`reveal d${i} flex min-h-[300px] flex-col rounded-[14px] bg-surface px-[30px] pb-[34px] pt-[30px] transition-colors duration-[400ms] ease-brand hover:bg-surface-2`}>
                <span className="self-start font-mono text-[13px] tracking-[0.1em] text-mute">{n}</span>
                <div className="mt-auto">
                  <h3 className="mb-3.5 text-[clamp(24px,2.2vw,34px)] font-medium tracking-[-0.01em]">{title}</h3>
                  <p className="m-0 max-w-[420px] text-[16px] leading-[1.45] text-dim">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Closing />
    </main>
  )
}
