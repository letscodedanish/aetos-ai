import MetaRow from './MetaRow'

const INDUSTRIES = [
  ['01', 'Healthcare', 'HIPAA-grade systems, telehealth and clinical data intelligence.', 'photo-1576091160550-2173dba999ef'],
  ['02', 'Finance', 'Secure payments, fraud detection and regulatory-ready platforms.', 'photo-1563013544-824ae1b704d3'],
  ['03', 'Retail', 'Omnichannel experiences, demand forecasting and personalization.', 'photo-1519085360753-af0119f7cbe7'],
  ['04', 'Manufacturing', 'IoT monitoring, predictive maintenance and supply-chain optimization.', 'photo-1577563908411-5077b6dc7624'],
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
          {INDUSTRIES.map(([n, name, body, img], i) => (
            <div key={name} className={`reveal d${i} group flex min-h-[260px] flex-col overflow-hidden rounded-[14px] bg-surface p-[12px] transition-colors duration-[400ms] ease-brand hover:bg-surface-2`}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[9px] bg-bg-deep">
                <img
                  src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=1400&q=80`}
                  alt=""
                  className="h-full w-full object-cover grayscale-[0.6] brightness-[0.85] transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100"
                />
                <span className="absolute left-3 top-3 font-mono text-[12px] tracking-[0.1em] text-text/80">{n}</span>
              </div>
              <div className="mt-auto px-[14px] pb-[14px] pt-[18px]">
                <h4 className="mb-2.5 text-[clamp(20px,1.7vw,26px)] font-medium tracking-[-0.01em]">{name}</h4>
                <p className="m-0 text-[15px] leading-[1.45] text-dim">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
