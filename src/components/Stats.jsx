// Big-number stat band, styled to match the portfolio's mono meta language.
export default function Stats({ items, topRule = true }) {
  return (
    <section className="pb-[clamp(60px,9vw,120px)] pt-0">
      <div className="shell">
        <div className={`grid grid-cols-2 gap-8 min-[1081px]:grid-cols-4 ${topRule ? 'border-t border-line pt-[clamp(40px,5vw,72px)]' : ''}`}>
          {items.map(([value, label], i) => (
            <div key={label} className={`reveal d${i}`}>
              <div className="text-[clamp(34px,4vw,56px)] font-medium leading-none tracking-[-0.02em] text-text">{value}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
