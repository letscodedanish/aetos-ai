import MetaRow from './MetaRow'
import SplitReveal from '../motion/SplitReveal'

const SERVICES = [
  { chip: 'Integration', title: 'Software + AI Integration', body: 'Fuse battle-tested AI engines into the tools you already run — CRM, booking, ops — automating complex workflows and predicting customer behaviour. No rip-and-replace.', d: '' },
  { chip: 'Automation', title: 'Workflow Automation', body: 'Replace manual processes with intelligent pipelines that monitor, act and escalate 24/7.', d: 'd1' },
  { chip: 'Conversational', title: 'AI Chatbots & Assistants', body: 'Instant, personalised conversations across every customer touchpoint.', d: 'd2' },
  { chip: 'Analytics', title: 'AI-Powered Analytics', body: 'Turn raw data into decisions with real-time dashboards and insight.', d: '' },
  { chip: 'Reputation', title: 'Reputation Management', body: 'Automated review aggregation, sentiment analytics and smart alerts.', d: 'd1' },
  { chip: 'Predictive', title: 'Predictive Analytics Engine', body: "See tomorrow's opportunities today. AI that forecasts trends, predicts churn and surfaces hidden revenue.", d: 'd2' },
]

function ServiceCard({ chip, title, body, d }) {
  return (
    <a
      href="#contact"
      data-cursor="Explore"
      className={`reveal ${d} group relative flex min-h-[440px] flex-col rounded-[14px] bg-surface px-[30px] pb-[34px] pt-[30px] transition-colors duration-[400ms] ease-brand hover:bg-surface-2`}
    >
      <span className="self-start rounded-lg bg-chip px-[13px] py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
        {chip}
      </span>
      <div className="mt-auto">
        <h3 className="mb-3.5 text-[clamp(26px,2.4vw,38px)] font-medium tracking-[-0.01em]">{title}</h3>
        <p className="m-0 max-w-[320px] text-[16px] leading-[1.45] text-dim">{body}</p>
      </div>
      <span className="absolute bottom-[30px] right-[26px] translate-y-2 rounded-full bg-chip px-[18px] py-[11px] font-mono text-[11px] uppercase tracking-[0.1em] text-text opacity-0 transition-all duration-[400ms] ease-brand group-hover:translate-y-0 group-hover:opacity-100">
        Explore →
      </span>
    </a>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-[clamp(90px,13vh,190px)]">
      <div className="shell">
        <SplitReveal
          Tag="h2"
          className="m-0 max-w-[1400px] text-[clamp(30px,4.6vw,78px)] font-medium leading-[1.04] tracking-[-0.02em]"
          segments={[
            { text: 'We help teams ship intelligent software,' },
            { text: 'fusing AI into the tools they already run to automate the busywork and surface what grows the business.', className: 'text-dim' },
          ]}
        />

        <MetaRow left="Services" center="(01/03)" right="AI & Automation" />

        <SplitReveal
          Tag="h3"
          className="mt-[clamp(48px,7vw,96px)] text-[clamp(34px,5vw,72px)] font-medium leading-none tracking-[-0.02em]"
          segments={[{ text: 'Everything you need to ship intelligent software' }]}
        />
        <p className="reveal d1 mt-[22px] max-w-[560px] text-[clamp(16px,1.4vw,19px)] text-dim">
          One partner, end-to-end — from AI strategy to systems running in production.
        </p>

        <div className="mt-[clamp(50px,6vw,88px)] grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[1081px]:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
