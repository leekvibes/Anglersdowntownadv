import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  IMAGES,
  PHONE,
  PHONE_HREF,
  EMAIL,
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
  title: "Pontoon Boat Rental Ocean City MD | Bay Cruises from $329 | Reserve by Phone",
  description:
    "Rent a pontoon boat in Ocean City, Maryland — self-captained 2-8 hour cruises on Assateague Bay. See wild horses, anchor at sandbars, bring your own food and drinks. Up to 10 guests. Brand-new boats, free parking downtown. Call (443) 664-6300 to reserve.",
  keywords: [
    "pontoon boat rental ocean city md",
    "boat rental ocean city maryland",
    "pontoon cruise ocean city",
    "bay cruise ocean city md",
    "boat ride ocean city",
    "rent a boat ocean city md",
    "self guided boat rental ocean city",
    "assateague bay boat tour",
    "ocean city pontoon boat",
    "boat rental near me ocean city",
    "pontoon boat cruise maryland",
    "family boat rental ocean city md",
    "party boat rental ocean city",
    "sunset cruise ocean city md",
    "fishing boat rental ocean city",
  ],
  alternates: { canonical: `${SITE_URL}/pontoon` },
  openGraph: {
    title: "Pontoon Boat Rental in Ocean City, MD | From $329 · Reserve by Phone",
    description:
      "Self-captained pontoon cruises on Assateague Bay. Wild horses, sandbars, sunsets. Up to 10 guests. Call to reserve.",
    url: `${SITE_URL}/pontoon`,
    type: "website",
    images: ["/og-logo.png"],
  },
};

const SIGHTS = [
  {
    code: "01",
    title: "Wild Horses",
    desc: "Anchor near Assateague Island and watch the famous wild horses graze feet from the water.",
    image: IMAGES.scenery4,
    alt: "Wild horses on Assateague Island viewed from a pontoon boat rental Ocean City MD",
  },
  {
    code: "02",
    title: "Hidden Sandbars",
    desc: "Drop anchor at secluded sandbars for swimming, wading, and sunbathing.",
    image: IMAGES.scenery1,
    alt: "Pontoon boat anchored at a sandbar on Assateague Bay Ocean City Maryland",
  },
  {
    code: "03",
    title: "Dolphins & Birds",
    desc: "Bottlenose dolphins, ospreys, and blue herons are bay regulars. Keep your camera ready.",
    image: IMAGES.scenery3,
    alt: "Bottlenose dolphins in Assateague Bay near Angler Watersports pontoon route",
  },
  {
    code: "04",
    title: "Golden Hour",
    desc: "Book a late departure and catch the sunset cruise photo that shore can't give you.",
    image: IMAGES.scenery2,
    alt: "Sunset cruise on a pontoon boat rental Assateague Bay Ocean City MD",
  },
];

const ITINERARY = [
  { time: "0:00", step: "Depart the dock", desc: "Quick orientation, safety gear, then south through the bay." },
  { time: "0:30", step: "Waterfront cruise", desc: "Waterfront homes, local marinas, open bay ahead." },
  { time: "1:00", step: "Anchor at Assateague", desc: "Watch wild horses along the shoreline up close." },
  { time: "2:00", step: "Swim + sandbars", desc: "Jump in, wade, or just soak up the sun on a bar." },
  { time: "3:00", step: "Scenic return", desc: "Head back as the afternoon light hits the water." },
  { time: "4:00", step: "Back at dock", desc: "Arrive at Talbot Street with a full memory card." },
];

const PRICING = [
  { hours: "2 Hours", price: "$329", popular: false },
  { hours: "3 Hours", price: "$419", popular: false },
  { hours: "4 Hours", price: "$479", popular: true },
  { hours: "5 Hours", price: "$529", popular: false },
  { hours: "6 Hours", price: "$659", popular: false },
  { hours: "8 Hours", price: "$859", popular: false },
];

const FEATURES = [
  { label: "Canopy Shade", desc: "Built-in canopy stays cool all day", code: "SHADE" },
  { label: "Bluetooth Ready", desc: "Bring a speaker, play your music", code: "AUDIO" },
  { label: "BYOB Friendly", desc: "Bring a cooler, food, and drinks", code: "BYOB" },
  { label: "Life Vests", desc: "All sizes provided for every guest", code: "GEAR" },
  { label: "Free Parking", desc: "Right at the downtown dock", code: "PARK" },
  { label: "No Experience", desc: "Full orientation before departure", code: "LEVEL" },
];

const OCCASIONS = [
  { title: "Birthday Parties", desc: "Celebrate with up to 10 guests", image: IMAGES.group4 },
  { title: "Bachelor / Bachelorette", desc: "Pre-wedding adventure on the bay", image: IMAGES.group3 },
  { title: "Family Reunions", desc: "Quality time on the water with the crew", image: IMAGES.group2 },
  { title: "Sunset Cruises", desc: "Golden-hour views you can't get from shore", image: IMAGES.scenery2 },
];

const BRING = [
  "Sunscreen & sunglasses",
  "Cooler with drinks & snacks",
  "Towel and swimwear",
  "Bluetooth speaker",
  "Fishing gear (optional)",
  "Camera for the horses",
];

const REQUIREMENTS = [
  "Driver: 21+ with valid license",
  "All ages welcome as guests",
  "Bay access only (no ocean)",
  "Driver must stay sober",
  "Arrive 15 min before departure",
];

const faqs = [
  { q: "How old do you have to be to drive?", a: "The driver must be at least 21 years old with a valid driver's license. No prior boating experience is needed — we'll give you a full orientation before you depart." },
  { q: "How many people can fit?", a: "Up to 10 people per pontoon boat. All ages are welcome, including kids." },
  { q: "Is it self-guided?", a: "Yes. Unlike our jet skis, pontoon boats are self-guided. You're the captain — go where you want within the bay area." },
  { q: "Can we bring alcohol?", a: "Yes, alcohol is permitted on pontoon boats. However, the driver must remain completely sober — no drinking and driving on the water." },
  { q: "Are life vests required?", a: "Life vests are available but not required for adults. Children must wear life vests and stay with adults at all times." },
  { q: "Where can we go?", a: "You can explore all of Assateague Bay — cruise past wild horses on Assateague Island, anchor at sandbars, or relax on the open water. Bay only — ocean access is not permitted for safety." },
  { q: "What if the weather is bad?", a: "If we cancel due to weather, you'll receive a full refund or the option to reschedule. Safety always comes first." },
  { q: "Can we fish from the pontoon?", a: "Absolutely. You're welcome to bring fishing gear and drop a line. Maryland fishing regulations apply — make sure you have a valid fishing license." },
];

const GALLERY = [
  { src: IMAGES.pontoon1, alt: "Pontoon boat rental cruising Assateague Bay in Ocean City MD" },
  { src: IMAGES.pontoon2, alt: "Group of friends on a pontoon boat rental in Ocean City Maryland" },
  { src: IMAGES.pontoon3, alt: "Pontoon boat anchored near Assateague Island wild horses Ocean City" },
  { src: IMAGES.pontoon4, alt: "Family pontoon boat cruise at sunset on Assateague Bay" },
  { src: IMAGES.pontoon5, alt: "Self-captained pontoon boat adventure on the bay Ocean City MD" },
  { src: IMAGES.pontoon6, alt: "Pontoon boat rental with canopy on Assateague Bay Maryland" },
  { src: IMAGES.scenery1, alt: "Scenic view of Assateague Bay from a pontoon boat rental" },
  { src: IMAGES.scenery2, alt: "Sunset pontoon cruise on the bay in Ocean City Maryland" },
];

export default function PontoonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Pontoon Boat Rental Ocean City MD",
              description:
                "Self-captained pontoon boat rental on Assateague Bay in Ocean City, Maryland. 2-8 hour cruises for up to 10 guests. See wild horses on Assateague Island, anchor at sandbars, BYOB friendly. Brand-new boats, free parking downtown.",
              url: `${SITE_URL}/pontoon`,
              price: "329",
              image: IMAGES.pontoon1,
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
              { name: "Pontoon Boat Rentals", url: `${SITE_URL}/pontoon` },
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
        <GradientMesh variant="hero" grid />

        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto py-16">
          <div className="flex justify-center mb-5">
            <StatusPill tone="success" label="Now Booking 2026 Season" />
          </div>

          <TerminalKicker prefix="RENTALS" label="PONTOON // SELF_CAPTAINED" className="mb-4 justify-center" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 tracking-tight">
            Your bay.<br />
            <span className="text-accent-hi">Your rules.</span>
          </h1>

          <p className="text-base md:text-lg text-ink-dim mb-8 max-w-2xl mx-auto leading-relaxed">
            Captain your own pontoon across Assateague Bay. Wild horses, sandbars,
            sunsets. 2 to 8 hours, up to 10 guests, on your schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={PHONE_HREF}
              className="px-8 py-4 bg-accent text-bg font-bold text-base rounded-md hover:bg-accent-hi transition-all shadow-[0_0_40px_rgba(212,160,23,0.25)] hover:scale-[1.02]"
            >
              Call to Book — From $329
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
          { value: "$329", label: "Starting Rate" },
          { value: "2–8 HR", label: "Choose Duration" },
          { value: "UP TO 10", label: "Guests / Boat" },
          { value: "SELF", label: "Captained" },
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
              <TerminalKicker prefix="EXPERIENCE" label="THE_DAY" className="mb-5" />
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                You&apos;re the<br />
                <span className="text-accent-hi">captain.</span>
              </h2>
              <div className="text-ink-dim text-base md:text-lg leading-relaxed space-y-4 max-w-lg">
                <p>
                  Cruise the calm waters of Assateague Bay with your crew. Anchor
                  along Assateague Island and watch wild horses graze feet from the
                  water. Pull up to a sandbar and swim. Drop a fishing line. Play your
                  music. Pour a drink. It&apos;s your day.
                </p>
                <p>
                  Up to 10 people on board. No boating experience required. Full
                  orientation before you leave the dock. 2 to 8 hours, you pick.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src={IMAGES.pontoon1}
                  alt="Group on a self-captained pontoon boat rental cruising Assateague Bay Ocean City MD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 via-transparent to-transparent" />
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ITINERARY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-bg-deep border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="SAMPLE" label="4HR_ROUTE" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              A Sample 4-Hour Run
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4">
              Every trip is different. Here&apos;s one way to fill the afternoon.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-[22px] md:left-[32px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />
            <div className="space-y-4">
              {ITINERARY.map((item, i) => (
                <ScrollReveal key={item.time} delay={i * 60}>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative z-10 flex-shrink-0 w-11 h-11 md:w-16 md:h-16 rounded-full bg-bg border border-accent/60 flex items-center justify-center">
                      <span className="mono-num text-[11px] md:text-sm font-bold text-accent-hi">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 bg-surface/40 border border-border rounded-lg p-5 hover:border-accent/40 transition-colors">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="mono-num text-[10px] uppercase tracking-[0.18em] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-ink font-bold text-lg">{item.step}</h3>
                      </div>
                      <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU'LL SEE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="ROUTE" label="SIGHTS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What You&apos;ll See
            </h2>
            <p className="text-ink-dim text-lg mt-4">
              The bay is full of surprises. Here&apos;s what to expect.
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
          THE RIDING AREA (MAP)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10 max-w-2xl mx-auto">
            <TerminalKicker prefix="MAP" label="OPEN_WATER" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Your Bay to Explore
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              50+ sq mi of open water. Anchor anywhere — sandbars, wild horse shores,
              sunset spots. No fixed route. You captain the day.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <InteractiveMap variant="pontoon" />
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              DOCK
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              HORSES
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
              SANDBARS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#F97316" }} />
              SUNSETS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "#06B6D4" }} />
              BEACHES
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OCCASIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="OCCASIONS" label="PICK_ONE" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Built for Groups
            </h2>
            <p className="text-ink-dim text-lg mt-4">
              Pontoon rentals are the go-to for crews celebrating on the water.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OCCASIONS.map((occ, i) => (
              <ScrollReveal key={occ.title} delay={i * 80}>
                <a
                  href={PHONE_HREF}
                  className="group block"
                >
                  <div className="relative h-64 rounded-xl overflow-hidden border border-border group-hover:border-accent/50 transition-colors">
                    <Image
                      src={occ.image}
                      alt={occ.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/50 to-transparent" />
                    <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                      0{i + 1}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-ink font-bold text-base leading-tight tracking-tight">
                        {occ.title}
                      </h3>
                      <p className="text-ink-dim text-xs mt-1">{occ.desc}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRICING + WHAT'S INCLUDED
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="PRICING" label="DURATIONS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Pick Your Duration
            </h2>
            <p className="text-ink-dim text-lg mt-4">
              From a 2-hour cruise to a full-day run. Up to 10 guests on every boat.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Pricing table */}
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden border border-border">
                {PRICING.map((p, i) => (
                  <div
                    key={p.hours}
                    className={`flex items-center justify-between px-6 py-5 ${
                      p.popular ? "bg-accent/10 border-l-2 border-l-accent" : "bg-surface/40"
                    } ${i < PRICING.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="mono-num text-[11px] uppercase tracking-[0.16em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink font-semibold text-lg">{p.hours}</span>
                      {p.popular && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-hi border border-accent/40 bg-accent/10 px-2 py-0.5 rounded">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <span
                      className={`mono-num text-2xl font-bold ${
                        p.popular ? "text-accent-hi" : "text-ink"
                      }`}
                    >
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                + tax · Up to 10 guests per boat · BYOB permitted
              </p>
            </ScrollReveal>

            {/* Book card */}
            <ScrollReveal className="lg:col-span-2" delay={120}>
              <div className="bg-surface/60 border border-accent/40 rounded-xl p-6 backdrop-blur-sm sticky top-24">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
                  &gt; Ready to book
                </p>
                <p className="mono-num text-4xl md:text-5xl font-bold text-accent-hi leading-none mb-1">
                  $329
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim mb-6">
                  Starting rate · 2 hours · up to 10 guests
                </p>
                <a
                  href={PHONE_HREF}
                  className="block w-full py-3.5 bg-accent text-bg text-center font-bold rounded-md hover:bg-accent-hi transition-colors shadow-[0_0_24px_rgba(212,160,23,0.2)]"
                >
                  Call {PHONE}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Features */}
          <div className="mt-16">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-3">
                <TerminalKicker prefix="STANDARD" label="INCLUDED" />
                <div className="flex-1 h-px bg-border" />
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FEATURES.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 50}>
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
          </div>

          {/* Bring + Requirements */}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU CAN EXPECT
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="STANDARDS" label="EVERY_PONTOON" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What You Can Expect
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              Every pontoon rental from Angler comes the same way.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                code: "01",
                title: "Latest-Model Pontoons",
                desc: "Brand-new boats with built-in canopies, Bluetooth audio, and clean upholstery. Inspected before every departure.",
              },
              {
                code: "02",
                title: "Full Orientation",
                desc: "Complete walk-through before you leave the dock. No prior boating experience needed — you'll know the boat by departure.",
              },
              {
                code: "03",
                title: "Captain Your Day",
                desc: "Self-captained: anchor at sandbars, beach near wild horses, cruise into sunset. Up to 10 guests. BYOB. Your call.",
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
              Pontoon Gallery
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
            Want something faster?{" "}
            <Link href="/jet-ski" className="text-accent-hi font-semibold hover:underline">
              Guided jet ski tours
            </Link>{" "}
            run daily.
            See{" "}
            <Link href="/promotions" className="text-accent-hi font-semibold hover:underline">
              current deals
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
          alt="Sunset over Assateague Bay — pontoon boat rentals in Ocean City Maryland"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" grid />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="READY_TO_CRUISE" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Ready to<br />
              <span className="text-accent-hi">captain the day?</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Reserve your pontoon. 2 to 8 hours, up to 10 guests, BYOB friendly.
              Free parking right at the downtown dock.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={PHONE_HREF}
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
              >
                Call to Book
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Pontoon%20Booking%20Inquiry`}
                className="px-8 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                Email Us
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
