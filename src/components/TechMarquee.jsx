const TECH = ['OpenAI', 'AWS', 'Azure', 'Google Cloud', 'React', 'Python', 'Kubernetes', 'Docker', 'TensorFlow', 'PostgreSQL', 'Kafka', 'Next.js']
const MASK = 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)'

// Reuses the hero marquee animation, swapped for the AI/cloud stack as pills.
export default function TechMarquee() {
  const row = [...TECH, ...TECH]
  return (
    <section className="pb-[clamp(90px,13vh,190px)] pt-0">
      <p className="shell mb-9 font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
        The modern AI &amp; cloud stack we build on
      </p>
      <div className="group relative overflow-hidden" style={{ WebkitMaskImage: MASK, maskImage: MASK }}>
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span key={i} className="flex-none rounded-full border border-line bg-surface px-[22px] py-[13px] font-mono text-[13px] tracking-[0.04em] text-dim">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
