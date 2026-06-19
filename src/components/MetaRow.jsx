// The mono eyebrow row: label · (nn/nn) · right-label, with a top rule.
export default function MetaRow({ left, center, right, flush = false }) {
  return (
    <div
      className={`grid grid-cols-3 items-center border-t border-line pt-[22px] font-mono text-[12px] uppercase tracking-[0.14em] text-mute ${
        flush ? 'mt-0' : 'mt-[clamp(56px,9vw,140px)]'
      }`}
    >
      <span className="flex items-center gap-2.5 before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent before:content-['']">
        {left}
      </span>
      <span className="text-center">{center}</span>
      <span className="text-right">{right}</span>
    </div>
  )
}
