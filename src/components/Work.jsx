import MetaRow from './MetaRow'
import { useCurtain } from '../motion/Curtain'

const PROJECTS = [
  { img: 'pasted-1781868421009-0.png', name: 'Payment Processing Platform', ind: 'Fintech', tags: ['−40% latency', '3× throughput'], tall: false, d: '' },
  { img: 'pasted-1781868353946-0.png', name: 'Telehealth Solution', ind: 'Healthcare', tags: ['HIPAA', '+200% patients'], tall: false, d: 'd1' },
  { img: 'pasted-1781868408069-0.png', name: 'E-commerce Transformation', ind: 'Retail', tags: ['Microservices', '−30% cost'], tall: false, d: 'd2' },
  { img: 'pasted-1781868400474-1.png', name: 'Fraud Detection System', ind: 'Finance', tags: ['Real-time', '87% reduction'], tall: true, d: '' },
  { img: 'pasted-1781868361394-0.png', name: 'IoT Predictive Maintenance', ind: 'Manufacturing', tags: ['IoT', '−73% downtime'], tall: true, d: 'd1' },
  { img: 'pasted-1781868367116-0.png', name: 'Intelligent Intake Pipeline', ind: 'Logistics', tags: ['Automation', '3 days → mins'], tall: true, d: 'd2' },
]

export default function Work() {
  const { go } = useCurtain()

  return (
    <section id="work" className="pb-[clamp(90px,13vh,190px)] pt-0">
      <div className="shell">
        <MetaRow flush left="Portfolio" center="(03/03)" right="Selected Work" />

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[1081px]:grid-cols-3">
          {PROJECTS.map((p) => (
            <button
              key={p.name}
              onClick={() => go('/work/onpoint', p.name)}
              data-cursor="View"
              className={`reveal ${p.d} group flex flex-col text-left`}
            >
              <div className={`overflow-hidden rounded-[6px] bg-surface ${p.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <img
                  src={`/uploads/${p.img}`}
                  alt=""
                  className="h-full w-full object-cover grayscale-[0.55] brightness-90 transition-[filter,transform] duration-700 ease-brand group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              <div className="mt-[18px] flex items-baseline justify-between gap-4">
                <h4 className="m-0 text-[clamp(18px,1.5vw,22px)] font-medium tracking-[-0.01em]">{p.name}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{p.ind}</span>
              </div>
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
