/* Small monospace label used as a section eyebrow.
   Example: <TerminalKicker prefix="RENTALS" label="JET_SKI" /> renders
            > RENTALS // JET_SKI
*/

interface TerminalKickerProps {
  prefix?: string;
  label: string;
  className?: string;
}

export function TerminalKicker({ prefix, label, className = "" }: TerminalKickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] ${className}`}
    >
      <span className="text-accent">&gt;</span>
      {prefix && <span className="text-ink-dim">{prefix}</span>}
      {prefix && <span className="text-ink-mute">//</span>}
      <span className="text-accent-hi">{label}</span>
    </span>
  );
}
