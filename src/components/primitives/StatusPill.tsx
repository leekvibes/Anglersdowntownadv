/* Pulsing-dot status indicator.
   Tone: "success" = green, "warn" = amber, "danger" = red, "accent" = gold. */

interface StatusPillProps {
  tone?: "success" | "warn" | "danger" | "accent";
  label: string;
  className?: string;
}

const TONE_MAP = {
  success: { dot: "bg-success", ring: "bg-success", text: "text-success" },
  warn: { dot: "bg-warn", ring: "bg-warn", text: "text-warn" },
  danger: { dot: "bg-danger", ring: "bg-danger", text: "text-danger" },
  accent: { dot: "bg-accent", ring: "bg-accent", text: "text-accent-hi" },
} as const;

export function StatusPill({ tone = "success", label, className = "" }: StatusPillProps) {
  const c = TONE_MAP[tone];
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-border backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c.ring} opacity-60`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${c.dot}`} />
      </span>
      <span className={`font-mono text-[10px] uppercase tracking-[0.14em] ${c.text}`}>
        {label}
      </span>
    </span>
  );
}
