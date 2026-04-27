import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_URL,
  IMAGES,
  HERO_VIDEO_URL,
  HERO_FALLBACK_IMAGE,
  PHONE,
  PHONE_HREF,
  ADDRESS,
  ADDRESS_URL,
  SITE_NAME,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AutoScrollGallery } from "@/components/AutoScrollGallery";
import { EmailSignup } from "@/components/EmailSignup";
import { WeatherBar } from "@/components/WeatherBar";
import { InteractiveMap } from "@/components/InteractiveMap";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { StatusPill } from "@/components/primitives/StatusPill";
import { AnimatedCounter } from "@/components/primitives/AnimatedCounter";
import { GradientMesh } from "@/components/primitives/GradientMesh";

/* ── Gallery image lists ── */
const GALLERY_ROW_1 = [
  { src: IMAGES.jetski1, alt: "Jet ski rental riders on Assateague Bay Ocean City MD" },
  { src: IMAGES.pontoon1, alt: "Pontoon boat rental cruise on the bay Ocean City Maryland" },
  { src: IMAGES.scenery2, alt: "Golden sunset over Assateague Bay boat rental area" },
  { src: IMAGES.jetski4, alt: "Guided jet ski adventure near Assateague Island" },
  { src: IMAGES.group1, alt: "Group jet ski tour with Angler Watersports" },
  { src: IMAGES.pontoon3, alt: "Pontoon boat near Assateague Island wild horses" },
  { src: IMAGES.scenery1, alt: "Scenic bay views from jet ski tour Ocean City" },
  { src: IMAGES.jetski6, alt: "Riding jet ski through waves on Assateague Bay" },
  { src: IMAGES.group3, alt: "Friends enjoying boat rental in Ocean City MD" },
  { src: IMAGES.pontoon5, alt: "Pontoon boat adventure on Assateague Bay" },
  { src: IMAGES.scenery4, alt: "Wild horses on Assateague Island from pontoon boat" },
];

const GALLERY_ROW_2 = [
  { src: IMAGES.jetski2, alt: "Jet ski rental on open water Ocean City Maryland" },
  { src: IMAGES.pontoon2, alt: "Group pontoon boat cruise Ocean City MD" },
  { src: IMAGES.scenery3, alt: "Dolphins in Ocean City bay near boat rentals" },
  { src: IMAGES.jetski7, alt: "Jet ski guided tour rider Ocean City" },
  { src: IMAGES.group2, alt: "Family boat rental adventure Ocean City MD" },
  { src: IMAGES.pontoon4, alt: "Pontoon boat at sunset Ocean City Maryland" },
  { src: IMAGES.jetski3, alt: "Jet ski tour on Assateague Bay" },
  { src: IMAGES.scenery5, alt: "Assateague Bay wildlife viewing from boat" },
  { src: IMAGES.group4, alt: "Group water sports fun Ocean City MD" },
  { src: IMAGES.jetski8, alt: "Thrilling jet ski experience Ocean City" },
  { src: IMAGES.pontoon6, alt: "Pontoon boat group outing Ocean City Maryland" },
];

const EXPERIENCES = [
  {
    code: "01",
    title: "Wild Horses",
    desc: "Assateague Island is home to herds of wild horses that have roamed freely for centuries. Encounter them from the water on a guided jet ski run or a slow pontoon cruise.",
    image: IMAGES.scenery4,
    alt: "Wild horses on Assateague Island seen from jet ski tour Ocean City MD",
  },
  {
    code: "02",
    title: "Bottlenose Dolphins",
    desc: "Dolphins run the bay and the inlet daily. Watch them surface and play alongside your rental in their natural habitat.",
    image: IMAGES.scenery3,
    alt: "Dolphins spotted during boat rental on Assateague Bay Ocean City",
  },
  {
    code: "03",
    title: "Golden Hour",
    desc: "Unobstructed western-bay sunsets. Book a late slot for the light show that photographs don't do justice.",
    image: IMAGES.scenery2,
    alt: "Stunning sunset from pontoon boat cruise on Assateague Bay",
  },
  {
    code: "04",
    title: "Assateague Island",
    desc: "A 37-mile stretch of untouched national seashore. Beach the pontoon, walk the sand, experience coastal wilderness on your terms.",
    image: IMAGES.jetski1,
    alt: "Jet ski tour approaching Assateague Island Ocean City Maryland",
  },
];

const OCCASIONS = [
  { title: "Family Day", desc: "All-ages on the water", image: IMAGES.group1 },
  { title: "Bachelor / Bachelorette", desc: "Celebrate on the bay", image: IMAGES.group3 },
  { title: "Date Night", desc: "Sunset runs built for two", image: IMAGES.scenery2 },
  { title: "Corporate Outing", desc: "Team building, reset", image: IMAGES.group2 },
  { title: "Birthday", desc: "A day they won't forget", image: IMAGES.group4 },
];

const COMPARE_ROWS = [
  { feature: "Downtown Location", us: true, them: false },
  { feature: "Free Parking", us: true, them: false },
  { feature: "Brand-New Equipment", us: true, them: false },
  { feature: "Guided Jet Ski Tours", us: true, them: false },
  { feature: "Professional On-Water Photos", us: true, them: false },
  { feature: "Assateague Bay Access", us: true, them: true },
  { feature: "Partner Restaurant Deals", us: true, them: false },
  { feature: "Same-Day Booking Available", us: true, them: false },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_FALLBACK_IMAGE}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Layered dark gradient + accent mesh + grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/75 via-bg/55 to-bg" />
        <GradientMesh variant="hero" grid />

        <div className="relative z-10 text-center text-ink px-4 max-w-5xl mx-auto flex flex-col items-center py-16">
          {/* Status row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <StatusPill tone="success" label="Now Booking 2026 Season" />
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/60 border border-border backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
              <span className="text-accent">●</span> Brand-New Fleet · 312 Talbot St
            </span>
          </div>

          <TerminalKicker prefix="OCEAN CITY · MD" label="JET SKI // PONTOON" className="mb-4" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-5 tracking-tight">
            The Bay,
            <br />
            <span className="text-accent-hi">Engineered</span> For You.
          </h1>

          <p className="text-sm md:text-base text-ink-dim mb-6 max-w-xl mx-auto leading-relaxed">
            Brand-new jet skis and private pontoons on Assateague Bay. Downtown dock,
            free parking, professional guides. 50+ square miles of open water.
          </p>

          <a
            href={ADDRESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim hover:text-accent-hi transition-colors"
          >
            <span className="text-accent">◆</span>
            {ADDRESS}
          </a>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-bg font-bold text-base rounded-md hover:bg-accent-hi transition-all shadow-[0_0_40px_rgba(212,160,23,0.25)] hover:shadow-[0_0_60px_rgba(212,160,23,0.4)] hover:scale-[1.02]"
            >
              Book Your Session
            </a>
            <a
              href="#adventures"
              className="px-6 py-4 bg-surface/60 backdrop-blur-sm text-ink font-semibold text-base rounded-md border border-border hover:border-accent/50 hover:bg-surface transition-all"
            >
              Explore Rentals
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink-mute">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIVE WEATHER BAR
      ═══════════════════════════════════════════════════════ */}
      <WeatherBar />

      {/* ═══════════════════════════════════════════════════════
          JET SKI SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="adventures" className="scroll-mt-16 relative py-24 md:py-32 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <TerminalKicker prefix="RENTALS" label="JET_SKI" className="mb-5" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                High-speed runs.<br />
                <span className="text-accent-hi">Guided every time.</span>
              </h2>
              <p className="text-ink-dim text-lg leading-relaxed mb-8 max-w-lg">
                Brand-new jet skis on the largest riding area on the coast. Certified
                guides, full safety briefing, and a route that puts you within eyeshot
                of wild horses and dolphins in their habitat.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors"
                >
                  Book Jet Skis
                </a>
                <Link
                  href="/jet-ski"
                  className="px-6 py-3.5 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 hover:bg-surface transition-colors"
                >
                  Spec Sheet →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src={IMAGES.scenery1}
                  alt="Jet ski rental guided tour on Assateague Bay Ocean City MD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 via-transparent to-transparent" />
                {/* Corner tag */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-bg/80 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.16em] text-accent-hi">
                  FLEET · 2026
                </div>
                {/* Bottom spec strip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 bg-bg/80 backdrop-blur-md border border-border rounded">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                    ASSATEAGUE BAY
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    50+ SQ MI
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FULL-BLEED PHOTO DIVIDER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[480px] overflow-hidden border-y border-border">
        <Image
          src={IMAGES.scenery5}
          alt="Assateague Bay — 50+ square miles of open water for jet ski and pontoon boat rentals in Ocean City MD"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-bg-deep/70 to-transparent" />
        <div className="absolute inset-0 grid-bg-fine opacity-40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <ScrollReveal direction="left">
              <TerminalKicker prefix="BAY" label="ASSATEAGUE" className="mb-4" />
              <p className="mono-num text-5xl md:text-7xl lg:text-8xl font-bold text-ink tracking-tight leading-[0.9]">
                <AnimatedCounter value={50} suffix="+" />
              </p>
              <p className="text-lg md:text-xl text-ink-dim font-mono uppercase tracking-[0.16em] mt-2">
                Sq miles of open water
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PONTOON SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <GradientMesh variant="panel" grid={false} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src={IMAGES.pontoon1}
                  alt="Group on self-guided pontoon boat rental cruise on Assateague Bay Ocean City MD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-bg/80 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.16em] text-accent-hi">
                  PRIVATE · SELF-CAPTAINED
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 bg-bg/80 backdrop-blur-md border border-border rounded">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                    UP TO 10 GUESTS
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    BYOB
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <TerminalKicker prefix="RENTALS" label="PONTOON" className="mb-5" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                Your bay.<br />
                <span className="text-accent-hi">Your rules.</span>
              </h2>
              <p className="text-ink-dim text-lg leading-relaxed mb-8 max-w-lg">
                Captain your own pontoon across Assateague Bay. Beach at wild horse
                shores, anchor on sandbars, catch sunset on the water. 2 to 8 hours —
                your schedule, your crew.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="px-8 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors"
                >
                  Call to Book
                </a>
                <Link
                  href="/pontoon"
                  className="px-6 py-3.5 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 hover:bg-surface transition-colors"
                >
                  Spec Sheet →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-12 md:py-16 bg-bg-deep border-y border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: 60, suffix: "", label: "MIN GUIDED RUN", sub: "JET SKI TOUR" },
              { value: 50, suffix: "+", label: "SQ MI OF WATER", sub: "RIDING AREA" },
              { value: 10, suffix: "", label: "MAX GUESTS", sub: "PER PONTOON" },
              { value: 100, suffix: "%", label: "NEW FLEET", sub: "2026 EQUIPMENT" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-start md:items-center text-left md:text-center">
                <p className="mono-num text-4xl md:text-5xl lg:text-6xl font-bold text-accent-hi leading-none tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                  {stat.label}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU'LL SEE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="EXPERIENCE" label="SIGHTS" className="mb-5" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
              Not a rental.<br />
              <span className="text-accent-hi">A route.</span>
            </h2>
            <p className="text-ink-dim text-lg mt-5 leading-relaxed">
              Every run crosses one of the East Coast&apos;s most alive waterways.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 120}>
                <div className="group relative h-80 md:h-[420px] rounded-xl overflow-hidden border border-border">
                  <Image
                    src={exp.image}
                    alt={exp.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/50 to-transparent" />
                  <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {exp.code} · {exp.title.toUpperCase()}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3 tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-ink-dim text-sm md:text-base leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTERACTIVE BAY MAP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <TerminalKicker prefix="MAP" label="RIDING_AREA" className="mb-5" />
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              Know the Route
            </h2>
            <p className="text-ink-dim text-lg mt-4 max-w-2xl mx-auto">
              50+ square miles of Assateague Bay. Wild horses, dolphins, sandbars, and
              the best sunsets on the coast. Tap any pin for detail.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <InteractiveMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OCCASIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" />
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="OCCASIONS" label="PICK_ONE" className="mb-5" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
              Built for<br />
              <span className="text-accent-hi">any occasion.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {OCCASIONS.map((occ, i) => (
              <ScrollReveal key={occ.title} delay={i * 80}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative h-56 md:h-64 rounded-xl overflow-hidden border border-border group-hover:border-accent/50 transition-colors">
                    <Image
                      src={occ.image}
                      alt={occ.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/50 to-transparent" />
                    <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.18em] text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-ink font-bold text-sm md:text-base leading-tight">
                        {occ.title}
                      </h3>
                      <p className="text-ink-dim text-xs mt-1 hidden md:block">
                        {occ.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — Feature matrix
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="COMPARE" label="FEATURE_MATRIX" className="mb-5" />
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-ink-dim text-lg mt-4">
              A direct comparison to standard Ocean City rental operators.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="grid grid-cols-3">
                <div className="p-4 md:p-5 bg-surface font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute border-b border-border">
                  FEATURE
                </div>
                <div className="p-4 md:p-5 bg-accent/10 border-x border-accent/30 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-hi text-center border-b border-accent/30">
                  {SITE_NAME.toUpperCase()}
                </div>
                <div className="p-4 md:p-5 bg-surface font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute text-center border-b border-border">
                  OTHERS
                </div>

                {COMPARE_ROWS.map((row, i) => {
                  const isLast = i === COMPARE_ROWS.length - 1;
                  return (
                    <div key={row.feature} className="contents">
                      <div
                        className={`p-4 md:p-5 text-sm text-ink ${
                          i % 2 === 0 ? "bg-surface/40" : "bg-transparent"
                        } ${!isLast ? "border-b border-border" : ""}`}
                      >
                        {row.feature}
                      </div>
                      <div
                        className={`p-4 md:p-5 text-center bg-accent/5 border-x border-accent/30 ${
                          !isLast ? "border-b border-accent/30" : ""
                        }`}
                      >
                        <span
                          className={`mono-num text-lg font-bold ${
                            row.us ? "text-success" : "text-ink-mute"
                          }`}
                        >
                          {row.us ? "✓" : "—"}
                        </span>
                      </div>
                      <div
                        className={`p-4 md:p-5 text-center ${
                          i % 2 === 0 ? "bg-surface/40" : "bg-transparent"
                        } ${!isLast ? "border-b border-border" : ""}`}
                      >
                        <span
                          className={`mono-num text-lg font-bold ${
                            row.them ? "text-success" : "text-ink-mute"
                          }`}
                        >
                          {row.them ? "✓" : "—"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <TerminalKicker prefix="PROCESS" label="3_STEPS" className="mb-5" />
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            {[
              { step: "01", title: "Reserve", desc: "Pick your rental, pick your slot. Instant confirmation, secure payment." },
              { step: "02", title: "Check In", desc: "Arrive at 312 Talbot. Free parking. Safety briefing, life vests, keys." },
              { step: "03", title: "Run the Bay", desc: "Wild horses. Dolphins. Sunsets. Memory made on Assateague." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="text-center relative">
                  <div className="mx-auto mb-6 w-16 h-16 relative z-10">
                    <div className="w-full h-full rounded-full bg-bg border-2 border-accent flex items-center justify-center mono-num text-lg font-bold text-accent-hi">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-bg font-bold text-base rounded-md hover:bg-accent-hi transition-all shadow-[0_0_40px_rgba(212,160,23,0.2)]"
            >
              Reserve Your Session
              <span className="mono-num">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OC YACHT SHOTS — photography add-on
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-bg-deep border-y border-border relative overflow-hidden">
        <GradientMesh variant="subtle" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { src: IMAGES.jetski1, alt: "Professional jet ski tour photo Ocean City MD" },
                  { src: IMAGES.group1, alt: "Yacht Shots group adventure photo" },
                  { src: IMAGES.pontoon2, alt: "Pontoon boat cruise captured on the water" },
                  { src: IMAGES.jetski3, alt: "Jet ski action photography Ocean City Maryland" },
                ].map((photo, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <TerminalKicker prefix="ADD-ON" label="YACHT_SHOTS" className="mb-5" />
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                Your run,<br />
                <span className="text-accent-hi">captured.</span>
              </h2>
              <p className="text-ink-dim text-lg leading-relaxed mb-8 max-w-lg">
                Professional photographers ride the bay and catch every boat at the
                best vantage points. Find your photos after the run, download in
                full resolution, share.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { step: "01", title: "Ride", desc: "We shoot" },
                  { step: "02", title: "Find", desc: "Browse online" },
                  { step: "03", title: "Keep", desc: "Download" },
                ].map((item) => (
                  <div key={item.step} className="text-center p-4 rounded-lg border border-border bg-surface/40">
                    <p className="mono-num text-accent-hi text-sm font-bold mb-2">{item.step}</p>
                    <p className="text-ink font-semibold text-sm">{item.title}</p>
                    <p className="text-ink-mute text-xs mt-0.5 font-mono uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.ocyachtshots.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-accent/50 text-accent-hi font-bold rounded-md hover:bg-accent/10 transition-colors"
              >
                Find Your Photos
                <span className="mono-num">→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AUTO-SCROLLING GALLERY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <ScrollReveal>
            <TerminalKicker prefix="FEED" label="LIVE_GALLERY" className="mb-5" />
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              Life on the Water
            </h2>
            <p className="text-ink-dim text-lg mt-3">Real runs. Real guests.</p>
          </ScrollReveal>
        </div>

        <div className="space-y-3">
          <AutoScrollGallery images={GALLERY_ROW_1} direction="left" />
          <AutoScrollGallery images={GALLERY_ROW_2} direction="right" />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 hover:bg-surface transition-colors"
          >
            Full Gallery
            <span className="mono-num">→</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROMO BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-bg-deep border-y border-border relative overflow-hidden">
        <GradientMesh variant="panel" />
        <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <ScrollReveal direction="left" className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/40 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-hi mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Limited Offer · 2026 Season
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4 tracking-tight leading-tight">
              Buy 3 Jet Ski Runs,<br />
              <span className="text-accent-hi">Get the 4th Free.</span>
            </h2>
            <p className="text-ink-dim text-lg mb-6 max-w-lg">
              Available on sunrise and sunset slots. Bring the crew, save on the ride.
            </p>
            <Link
              href="/promotions"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors"
            >
              See All Deals
              <span className="mono-num">→</span>
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" className="w-full md:w-96 flex-shrink-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
              <Image
                src={IMAGES.promo}
                alt="Buy 3 jet ski rides get 4th free promotion Ocean City MD"
                fill
                sizes="400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU CAN EXPECT
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="STANDARDS" label="EVERY_RUN" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              What You Can Expect
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              Every run with Angler Watersports follows the same standards. No
              shortcuts, no surprises, no asterisks.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                code: "01",
                title: "Brand-New Fleet",
                desc: "Every jet ski and pontoon is the latest model. Inspected daily, maintained obsessively.",
              },
              {
                code: "02",
                title: "Certified Guides",
                desc: "Maryland-certified lead on every jet ski tour. Professional safety briefing before the engine starts.",
              },
              {
                code: "03",
                title: "Largest Riding Area",
                desc: "50+ square miles of Assateague Bay — wild horse coastline, dolphin territory, sandbars, sunsets.",
              },
              {
                code: "04",
                title: "Free Parking, No Surprises",
                desc: "Pull right up to 312 Talbot. Free parking at the dock. Life vests included. No upsells.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.code} delay={i * 80}>
                <div className="bg-surface/40 p-6 rounded-xl border border-border hover:border-accent/40 hover:bg-surface transition-all h-full">
                  <p className="mono-num text-3xl font-bold text-accent-hi mb-4">{item.code}</p>
                  <h3 className="text-ink font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          EMAIL SIGNUP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-bg-deep border-y border-border relative overflow-hidden">
        <GradientMesh variant="panel" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <TerminalKicker prefix="SIGNAL" label="NEWSLETTER" className="mb-5 justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3 tracking-tight">
            Early Access to Deals
          </h2>
          <p className="text-ink-dim text-lg mb-8">
            Sunset slot drops, season promos, early-booking windows.
          </p>
          <EmailSignup />
          <p className="text-ink-mute font-mono text-[10px] uppercase tracking-[0.14em] mt-5">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        <Image
          src={IMAGES.scenery2}
          alt="Ocean City Maryland sunset over Assateague Bay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" grid />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="READY_WHEN_YOU_ARE" className="mb-6 justify-center" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Ready for<br />
              <span className="text-accent-hi">your run?</span>
            </h2>
            <p className="text-lg md:text-xl text-ink-dim mb-10 max-w-2xl mx-auto">
              Reserve your jet ski or pontoon today. 2026 fleet, certified guides, the
              largest riding area on the coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)] hover:scale-[1.02]"
              >
                Book Now
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-6 py-4 text-ink font-mono text-sm uppercase tracking-[0.14em] border border-border rounded-md hover:border-accent/50 transition-colors"
              >
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="mono-num normal-case text-base">{PHONE}</span>
              </a>
            </div>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
              <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hi transition-colors">
                ◆ {ADDRESS}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
