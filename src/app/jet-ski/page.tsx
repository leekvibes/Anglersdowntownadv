import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  HERO_VIDEO_URL,
  HERO_FALLBACK_IMAGE,
  ADDRESS,
  ADDRESS_URL,
  SITE_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/components/StructuredData";
import { InteractiveMap } from "@/components/InteractiveMap";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { StatusPill } from "@/components/primitives/StatusPill";
import { StatStrip } from "@/components/primitives/StatStrip";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Jet Ski Rental Ocean City MD | Guided Tours from $129/hr | Book Online",
  description:
    "Book a 1-hour guided jet ski tour on Assateague Bay in Ocean City, Maryland. Brand-new jet skis, see wild horses & dolphins, ages 5+. From $129/hr. Certified guides, life vests included, free parking downtown. Book online today.",
  keywords: [
    "jet ski rental ocean city md",
    "jet ski tour assateague bay",
    "ocean city jet ski",
    "guided jet ski ride ocean city",
    "jet ski near me ocean city",
    "waverunner rental ocean city md",
    "ocean city maryland jet ski tour",
    "jet ski rental near me",
    "water sports ocean city md",
    "jet ski ocean city bay",
  ],
  alternates: { canonical: `${SITE_URL}/jet-ski` },
  openGraph: {
    title: "Jet Ski Rental in Ocean City, MD | Guided Tours from $129/hr",
    description:
      "1-hour guided jet ski tours on Assateague Bay. Brand-new jet skis, wild horses, dolphins. Book online.",
    url: `${SITE_URL}/jet-ski`,
    type: "website",
    images: ["/og-logo.png"],
  },
};

const SIGHTS = [
  {
    code: "01",
    title: "Wild Horses",
    desc: "See the famous Assateague horses grazing on the shore — a once-in-a-lifetime encounter from the water.",
    image: IMAGES.scenery4,
    alt: "Wild horses of Assateague Island viewed from a guided jet ski tour in Ocean City MD",
  },
  {
    code: "02",
    title: "Dolphins",
    desc: "Bottlenose dolphins regularly swim alongside riders through the bay and inlet.",
    image: IMAGES.scenery3,
    alt: "Bottlenose dolphins in Assateague Bay near Angler Watersports jet ski route Ocean City",
  },
  {
    code: "03",
    title: "Throttle Time",
    desc: "Wide-open bay water across 50+ square miles — clear lanes, no idle zones, full speed.",
    image: IMAGES.scenery1,
    alt: "Wide open bay water for jet ski tours Ocean City Maryland",
  },
  {
    code: "04",
    title: "Golden Hour",
    desc: "Book a late run and watch Assateague Bay light up in stunning sunset color.",
    image: IMAGES.scenery2,
    alt: "Sunset view over Assateague Bay from a guided jet ski tour Ocean City MD",
  },
];

const FEATURES = [
  { label: "Brand-New Fleet", desc: "2026 jet skis inspected daily", code: "FLEET" },
  { label: "Certified Guides", desc: "Expert-led on every ride", code: "GUIDE" },
  { label: "Safety Briefing", desc: "Full orientation before launch", code: "BRIEF" },
  { label: "Life Vests Included", desc: "All sizes provided at no cost", code: "GEAR" },
  { label: "Free Parking", desc: "Right at our downtown dock", code: "PARK" },
  { label: "No Experience Needed", desc: "First-timers welcome", code: "LEVEL" },
];

const INCLUDED = [
  "1-hour guided ride",
  "Up to 3 riders per ski",
  "Brand-new equipment",
  "Life vests included",
  "Ages 5+ welcome",
  "Certified guide every ride",
];

const BRING = ["Sunscreen", "Towel", "Sunglasses (at own risk)", "Water bottle", "Waterproof phone case"];
const REQUIREMENTS = [
  "Driver: 16+ with photo ID",
  "Passengers: ages 5+",
  "Max weight: 450 lbs / ski",
  "No alcohol before riding",
  "Arrive 15 min early",
];

const faqs = [
  { q: "How old do you have to be?", a: "Passengers must be at least 5 years old. Drivers must be at least 16 with a valid photo ID. All children must be accompanied by an adult." },
  { q: "How many people per jet ski?", a: "Up to 3 people (two adults and one child maximum). Three adults is not recommended. Weight capacity is approximately 450 lbs." },
  { q: "Do I need experience?", a: "No experience necessary. Our guides provide a full instructional review before you hit the water, and they accompany you throughout the entire ride." },
  { q: "Are life vests provided?", a: "Yes. Life vests are mandatory for all riders and are provided at no extra cost." },
  { q: "Can I bring my phone?", a: "You can, but at your own risk. We recommend a waterproof phone case or pouch. OC Yacht Shots also captures professional photos of your ride." },
  { q: "How long is the ride?", a: "Each rental is 1 hour of ride time. A Maryland-certified guide accompanies all rentals for your safety." },
  { q: "What if the weather is bad?", a: "If we cancel due to weather, you'll receive a full refund or reschedule. Safety always comes first." },
];

const GALLERY = [
  { src: IMAGES.jetski1, alt: "Jet ski rental rider accelerating across Assateague Bay Ocean City MD" },
  { src: IMAGES.jetski2, alt: "Guided jet ski tour on open water Ocean City Maryland" },
  { src: IMAGES.jetski3, alt: "Jet ski rental action shot on Assateague Bay" },
  { src: IMAGES.jetski4, alt: "Group jet ski rental with Angler Watersports Ocean City" },
  { src: IMAGES.jetski6, alt: "Brand-new jet ski cutting through waves on the bay" },
  { src: IMAGES.jetski7, alt: "Certified guide leading a jet ski tour Ocean City MD" },
  { src: IMAGES.jetski5, alt: "Family jet ski rental Ocean City Maryland" },
  { src: IMAGES.jetski8, alt: "Thrilling jet ski experience on Assateague Bay" },
];

export default function JetSkiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Jet Ski Rental Ocean City MD",
              description:
                "1-hour guided jet ski tour on Assateague Bay in Ocean City, Maryland. Brand-new jet skis with certified guide. See wild horses and dolphins. Up to 3 riders per ski, ages 5+. Life vests included, free parking.",
              url: `${SITE_URL}/jet-ski`,
              price: "129",
              image: IMAGES.heroJetski,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Jet Ski Rentals", url: `${SITE_URL}/jet-ski` },
            ])
          ),
        }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[560px] max-h-[820px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/55 to-bg" />
        <GradientMesh variant="hero" />

        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto py-16">
          <div className="flex justify-center mb-5">
            <StatusPill tone="success" label="Now Booking 2026 Season" />
          </div>

          <TerminalKicker prefix="RENTALS" label="JET_SKI // GUIDED_TOUR" className="mb-4 justify-center" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 tracking-tight">
            High-speed runs,<br />
            <span className="text-accent-hi">guided every time.</span>
          </h1>

          <p className="text-base md:text-lg text-ink-dim mb-8 max-w-2xl mx-auto leading-relaxed">
            1-hour tours on brand-new jet skis across Assateague Bay. Certified
            guides, Assateague's wild horse coastline, bottlenose dolphins, and
            50+ square miles of open water.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-bg font-bold text-base rounded-md hover:bg-accent-hi transition-all shadow-[0_0_40px_rgba(212,160,23,0.25)] hover:scale-[1.02]"
            >
              Book Your Ride — From $129
            </a>
            <a
              href={PHONE_HREF}
              className="px-6 py-4 bg-surface/60 backdrop-blur-sm text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md border border-border hover:border-accent/50 hover:bg-surface transition-all"
            >
              Call {PHONE}
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink-mute">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STAT STRIP
      ═══════════════════════════════════════════════════════ */}
      <StatStrip
        stats={[
          { value: "$129 / HR", label: "Starting Rate" },
          { value: "UP TO 3", label: "Riders / Ski" },
          { value: "AGES 5+", label: "Welcome" },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════
          THE EXPERIENCE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <TerminalKicker prefix="EXPERIENCE" label="THE_RUN" className="mb-5" />
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                Not a rental.<br />
                <span className="text-accent-hi">A route.</span>
              </h2>
              <div className="text-ink-dim text-base md:text-lg leading-relaxed space-y-4 max-w-lg">
                <p>
                  Once you clear the no-wake zone, you&apos;re running 50+ square
                  miles of bay water. Waterfront homes, open lanes, and the
                  coastline of Assateague Island — all in one hour.
                </p>
                <p>
                  Your Maryland-certified guide leads the run past wild horse
                  habitat and through dolphin territory. First-timers and
                  veterans get the same high-touch experience every time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src={IMAGES.heroJetski}
                  alt="Guided jet ski tour on Assateague Bay in Ocean City Maryland"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-bg/80 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.16em] text-accent-hi">
                  FLEET · 2026
                </div>
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
          ALONG THE ROUTE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="ROUTE" label="SIGHTS" className="mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Along the Route
            </h2>
            <p className="text-ink-dim text-lg mt-4">
              Every run is packed with unforgettable sights.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SIGHTS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group relative h-80 rounded-xl overflow-hidden border border-border">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/50 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {s.code} · {s.title.toUpperCase()}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-ink-dim text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE ROUTE (MAP)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10 max-w-2xl mx-auto">
            <TerminalKicker prefix="MAP" label="GUIDED_ROUTE" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Know the Route
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              A 1-hour loop across Assateague Bay. Dock → wild horse habitat →
              dolphin territory → back. Every ride follows the guided path with a
              certified lead.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <InteractiveMap variant="jetski" />
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              DOCK · 307 DORCHESTER ST
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              HORSES · WILDLIFE ZONE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#3B82F6" }} />
              DOLPHINS · BAY &amp; INLET
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT'S INCLUDED + GOOD TO KNOW
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto">
            <TerminalKicker prefix="INCLUDED" label="STANDARD" className="mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What&apos;s in the Box
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 60}>
                <div className="group bg-surface/40 border border-border rounded-lg p-5 hover:border-accent/40 hover:bg-surface transition-colors h-full">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
                    &gt; {f.code}
                  </p>
                  <h3 className="text-ink font-bold text-lg mb-1 tracking-tight">{f.label}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface/40 border border-border rounded-xl p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                  &gt; BRING
                </p>
                <ul className="space-y-2.5">
                  {BRING.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ink">
                      <span className="mono-num text-accent-hi text-sm">◦</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="bg-surface/40 border border-border rounded-xl p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                  &gt; REQUIREMENTS
                </p>
                <ul className="space-y-2.5">
                  {REQUIREMENTS.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ink">
                      <span className="mono-num text-accent-hi text-sm">◦</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-5 bg-surface/60 border border-border rounded-xl backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
                Starting at
              </span>
              <span className="mono-num text-3xl md:text-4xl font-bold text-accent-hi">
                $129 / HR
              </span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors text-sm"
              >
                Reserve Now
              </a>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
              Per jet ski, plus tax · {INCLUDED.length} items included
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU CAN EXPECT
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="STANDARDS" label="EVERY_RUN" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What You Can Expect
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              Every guided jet ski run with Angler follows the same standards.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                code: "01",
                title: "Maryland-Certified Lead",
                desc: "Every ride is led by a Maryland-certified guide. Full safety briefing before launch, expert routing on the water.",
              },
              {
                code: "02",
                title: "Brand-New Jet Skis",
                desc: "The latest models, inspected daily. No old equipment dressed up as new — ever.",
              },
              {
                code: "03",
                title: "Premium Route",
                desc: "1-hour loop through wild horse habitat and dolphin territory across 50+ square miles of open bay water.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.code} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 hover:border-accent/40 hover:bg-surface transition-all h-full">
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
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-3xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <TerminalKicker prefix="FAQ" label="QUESTIONS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Frequently Asked
            </h2>
          </ScrollReveal>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details className="group bg-surface/40 border border-border rounded-lg hover:border-accent/40 transition-colors">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-ink">
                    <span className="flex items-center gap-3">
                      <span className="mono-num text-[11px] uppercase tracking-[0.16em] text-accent">
                        Q{String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <svg
                      className="w-4 h-4 text-accent group-open:rotate-180 transition-transform flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-ink-dim text-sm leading-relaxed border-t border-border">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-bg-deep border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <TerminalKicker prefix="FEED" label="PHOTOS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Jet Ski Gallery
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 via-transparent to-transparent" />
              </div>
            ))}
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ALSO EXPLORE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-ink-dim text-sm md:text-base leading-relaxed">
            Prefer a slower ride?{" "}
            <Link href="/pontoon" className="text-accent-hi font-semibold hover:underline">
              Self-captained pontoon rentals
            </Link>{" "}
            fit up to 10 guests.
            See{" "}
            <Link href="/gift-cards" className="text-accent-hi font-semibold hover:underline">
              gift cards
            </Link>
            ,{" "}
            <Link href="/gallery" className="text-accent-hi font-semibold hover:underline">
              the full gallery
            </Link>
            , or{" "}
            <Link href="/contact" className="text-accent-hi font-semibold hover:underline">
              message us directly
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image
          src={IMAGES.scenery2}
          alt="Sunset over Assateague Bay — jet ski rentals in Ocean City Maryland"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="READY_TO_RIDE" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Ready to<br />
              <span className="text-accent-hi">hit the throttle?</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Reserve your 1-hour guided jet ski tour. Brand-new fleet. Certified guides.
              Free parking right at the downtown dock.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
              >
                Book Now
              </a>
              <a
                href={PHONE_HREF}
                className="px-8 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                <span className="mono-num normal-case text-base">{PHONE}</span>
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
              <a
                href={ADDRESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-hi transition-colors"
              >
                ◆ {ADDRESS}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
