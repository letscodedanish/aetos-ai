import MetaRow from './MetaRow'

const INDUSTRIES = [
  ['01', 'Healthcare', 'HIPAA-grade systems, telehealth and clinical data intelligence.'],
  ['02', 'Finance', 'Secure payments, fraud detection and regulatory-ready platforms.'],
  ['03', 'Retail', 'Omnichannel experiences, demand forecasting and personalization.'],
  ['04', 'Manufacturing', 'IoT monitoring, predictive maintenance and supply-chain optimization.'],
]

export default function Industries() {
  return (
    <section id="industries" className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Industries" center="(—)" right="Sectors we serve" />

        <h3 className="reveal mt-[clamp(40px,6vw,80px)] text-[clamp(30px,4.6vw,66px)] font-medium leading-none tracking-[-0.02em]">
          Tailored intelligence for diverse sectors
        </h3>

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-5 min-[621px]:grid-cols-2 min-[1081px]:grid-cols-4">
          {INDUSTRIES.map(([n, name, body], i) => (
            <div key={name} className={`reveal d${i} flex min-h-[260px] flex-col rounded-[14px] bg-surface px-[26px] pb-[28px] pt-[26px] transition-colors duration-[400ms] ease-brand hover:bg-surface-2`}>
              <span className="self-start font-mono text-[13px] tracking-[0.1em] text-mute">{n}</span>
              <div className="mt-auto">
                <h4 className="mb-3 text-[clamp(20px,1.7vw,26px)] font-medium tracking-[-0.01em]">{name}</h4>
                <p className="m-0 text-[15px] leading-[1.45] text-dim">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
