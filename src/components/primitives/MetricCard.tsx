/* Unified metric tile used for prices, durations, capacities.
   Monospace value, small uppercase label, hairline border that
   warms up on hover. */

interface MetricCardProps {
  value: string;
  label: string;
  hint?: string;
  className?: string;
}

export function MetricCard({ value, label, hint, className = "" }: MetricCardProps) {
  return (
    <div
      className={`group relative rounded-lg border border-border bg-surface/60 backdrop-blur-sm p-4 transition-colors hover:border-accent/50 hover:bg-surface-2/60 ${className}`}
    >
      <p className="mono-num text-2xl md:text-[28px] text-accent-hi leading-none tracking-tight">
        {value}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
        {label}
      </p>
      {hint && (
        <p className="mt-1 text-xs text-ink-mute">{hint}</p>
      )}
      <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
