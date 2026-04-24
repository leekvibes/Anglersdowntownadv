/* Ambient backdrop for hero / section backgrounds.
   Renders two offset radial glows + a fine grid overlay.
   Place inside a relatively-positioned parent. */

interface GradientMeshProps {
  variant?: "hero" | "panel" | "subtle";
  grid?: boolean;
  className?: string;
}

export function GradientMesh({
  variant = "hero",
  grid = true,
  className = "",
}: GradientMeshProps) {
  const intensity =
    variant === "hero"
      ? { a: "bg-accent/20", b: "bg-accent/10", c: "bg-accent-hi/15" }
      : variant === "panel"
        ? { a: "bg-accent/10", b: "bg-accent/5", c: "bg-accent-hi/8" }
        : { a: "bg-accent/6", b: "bg-accent/3", c: "bg-accent/4" };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Top-left glow */}
      <div
        className={`absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full blur-[140px] ${intensity.a}`}
      />
      {/* Center-right glow */}
      <div
        className={`absolute top-1/4 -right-1/4 w-[600px] h-[500px] rounded-full blur-[160px] ${intensity.c}`}
      />
      {/* Bottom glow */}
      <div
        className={`absolute -bottom-1/4 left-1/3 w-[500px] h-[400px] rounded-full blur-[120px] ${intensity.b}`}
      />
      {grid && <div className="absolute inset-0 grid-bg opacity-60" />}
      {/* Top-to-bottom vignette to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
    </div>
  );
}
