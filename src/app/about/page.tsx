import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  ADDRESS_URL,
  HOURS,
  SOCIAL,
  HERO_VIDEO_URL,
  HERO_FALLBACK_IMAGE,
  SITE_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { StatusPill } from "@/components/primitives/StatusPill";
import { StatStrip } from "@/components/primitives/StatStrip";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "About | Premium Jet Ski & Pontoon Rentals | Angler Watersports Ocean City MD",
  description:
    "Angler Watersports is a new operator on Assateague Bay launching for the 2026 season. Brand-new fleet, certified guides, downtown dock at 312 Talbot Street, and 50+ square miles of open water.",
  keywords: [
    "ocean city md water sports",
    "jet ski rental ocean city md",
    "pontoon boat rental ocean city maryland",
    "premium boat rental ocean city",
    "Angler Watersports",
    "new jet ski rental ocean city",
    "downtown ocean city boat dock",
    "312 Talbot Street",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "About | Premium Jet Ski & Pontoon Rentals | Angler Watersports",
    description:
      "Angler Watersports is a new operator on Assateague Bay. Brand-new fleet, certified guides, downtown dock.",
    url: `${SITE_URL}/about`,
  },
};

const VALUES = [
  {
    code: "01",
    title: "Safety, Always",
    desc: "Equipment inspected daily. Maryland-certified guide on every jet ski run. Full safety briefing before every rental. No exceptions.",
  },
  {
    code: "02",
    title: "Brand-New Fleet",
    desc: "Every jet ski and pontoon in our fleet is the latest model. No old equipment dressed up as new. You ride what we'd ride ourselves.",
  },
  {
    code: "03",
    title: "Downtown Dock",
    desc: "312 Talbot Street puts you on 50+ sq miles of open bay water — direct Assateague access, free parking, no traffic to fight.",
  },
  {
    code: "04",
    title: "No Shortcuts",
    desc: "Professional guides. Premium gear. Real safety standards. The cleanest watersports experience in Ocean City — the one we'd want for ourselves.",
  },
];

const TEAM_PHOTOS = [
  { src: IMAGES.group1, alt: "Angler Watersports team at the dock in Ocean City MD" },
  { src: IMAGES.group2, alt: "Jet ski guides with guests on Assateague Bay" },
  { src: IMAGES.group3, alt: "Preparing brand-new jet skis for rental in Ocean City" },
  { src: IMAGES.group4, alt: "Happy customers after pontoon boat rental Ocean City Maryland" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[540px] max-h-[780px] flex items-center justify-center overflow-hidden">
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
            <StatusPill tone="accent" label="Launching 2026 Season" />
          </div>
          <TerminalKicker prefix="ABOUT" label="ANGLER_WATERSPORTS" className="mb-5 justify-center" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 tracking-tight">
            A new standard<br />
            <span className="text-accent-hi">on Assateague Bay.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim mb-8 max-w-2xl mx-auto">
            Brand-new fleet. Certified guides. Downtown dock. No shortcuts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-bg font-bold text-base rounded-md hover:bg-accent-hi transition-all shadow-[0_0_40px_rgba(212,160,23,0.25)]"
            >
              Book Your Adventure
            </a>
            <a
              href={PHONE_HREF}
              className="px-6 py-4 bg-surface/60 backdrop-blur-sm text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md border border-border hover:border-accent/50 transition-all"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* BADGES STRIP */}
      <StatStrip
        stats={[
          { value: "2026", label: "Brand-New Fleet" },
          { value: "50+", label: "Sq Mi Riding Area" },
          { value: "FREE", label: "Downtown Parking" },
        ]}
        compact
      />

      {/* OUR STORY */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <TerminalKicker prefix="STORY" label="WHY_ANGLER" className="mb-5" />
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                Built<br />
                <span className="text-accent-hi">deliberately.</span>
              </h2>
              <div className="text-ink-dim text-base md:text-lg leading-relaxed space-y-4 max-w-lg">
                <p>
                  Angler Watersports launched for the 2026 season with one
                  deliberate choice: every jet ski and pontoon in the fleet is
                  the latest model, every guide is Maryland-certified, every
                  safety briefing runs before the engine starts. No shortcuts.
                  No old equipment dressed up as new.
                </p>
                <p>
                  The dock at <strong className="text-ink">312 Talbot Street</strong>{" "}
                  puts you on 50+ square miles of open bay water — Assateague
                  Island&apos;s wild horse coastline a short run away, sandbars
                  at low tide, dolphin territory through the inlet. Downtown
                  by design: free parking, fast water access, no traffic to
                  start your day.
                </p>
                <p>
                  What we offer is the run done right. A guided 1-hour jet ski
                  tour for first-timers and veterans alike, or a self-captained
                  pontoon for groups up to ten who want the bay on their own
                  terms. The cleanest watersports experience in Ocean City — the
                  one we&apos;d want for ourselves.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                {TEAM_PHOTOS.map((photo, i) => (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden border border-border ${
                      i % 2 === 1 ? "mt-8" : ""
                    }`}
                    style={{ aspectRatio: "3 / 4" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/40 to-transparent" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-28 bg-bg-deep border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="VALUES" label="WHAT_WE_STAND_FOR" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4">
              Four reasons people choose us over every other rental in Ocean City.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.code} delay={i * 80}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 md:p-8 h-full hover:border-accent/40 transition-colors">
                  <p className="mono-num text-3xl font-bold text-accent-hi mb-4">{v.code}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-ink-dim text-sm md:text-base leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="RENTALS" label="TWO_OPTIONS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal delay={0}>
              <Link href="/jet-ski" className="group block relative h-96 rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-colors">
                <Image src={IMAGES.heroJetski} alt="Jet ski rental guided tour on Assateague Bay Ocean City MD" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent" />
                <div className="absolute top-5 left-5 px-3 py-1 bg-bg/80 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.18em] text-accent-hi">
                  FROM $129/HR
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
                    &gt; JET_SKI
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2 tracking-tight">
                    Jet Ski Rentals
                  </h3>
                  <p className="text-ink-dim text-sm md:text-base mb-4">
                    1-hour guided runs on brand-new jet skis. Wild horses. Dolphins. Open water.
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-hi group-hover:gap-3 transition-all">
                    Learn More <span className="mono-num">→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Link href="/pontoon" className="group block relative h-96 rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-colors">
                <Image src={IMAGES.pontoon1} alt="Pontoon boat rental cruise on Assateague Bay Ocean City Maryland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent" />
                <div className="absolute top-5 left-5 px-3 py-1 bg-bg/80 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.18em] text-accent-hi">
                  FROM $329
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
                    &gt; PONTOON
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2 tracking-tight">
                    Pontoon Boat Rentals
                  </h3>
                  <p className="text-ink-dim text-sm md:text-base mb-4">
                    Self-captained 2–8 hour bay cruises for up to 10 guests. BYOB, fishing, more.
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-hi group-hover:gap-3 transition-all">
                    Learn More <span className="mono-num">→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 md:py-28 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="VISIT" label="DOWNTOWN_OC" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Find Us
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4">
              312 Talbot Street. Free parking. Right in downtown.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-6">
            <ScrollReveal className="lg:col-span-3">
              <div className="relative rounded-xl overflow-hidden border border-border h-[360px] md:h-[440px]">
                <iframe
                  src="https://maps.google.com/maps?q=312+Talbot+Street+Ocean+City+MD+21842&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.25) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angler Watersports Location"
                  className="absolute inset-0"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-surface/40 border border-border rounded-xl p-6 md:p-8 h-full space-y-5">
                <TerminalKicker prefix="DOCK" label="307_DORCHESTER" />

                <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Address</p>
                  <p className="text-ink font-semibold group-hover:text-accent-hi transition-colors text-sm">{ADDRESS}</p>
                </a>

                <a href={PHONE_HREF} className="block group">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Phone</p>
                  <p className="mono-num text-ink font-semibold group-hover:text-accent-hi transition-colors">{PHONE}</p>
                </a>

                <a href={`mailto:${EMAIL}`} className="block group">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Email</p>
                  <p className="text-ink font-semibold group-hover:text-accent-hi transition-colors break-all text-sm">{EMAIL}</p>
                </a>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Hours</p>
                  <p className="text-ink text-sm">{HOURS}</p>
                </div>

                {(SOCIAL.instagram || SOCIAL.facebook || SOCIAL.tiktok) && (
                  <div className="pt-2 flex gap-2">
                    {[
                      { href: SOCIAL.instagram, label: "IG" },
                      { href: SOCIAL.facebook, label: "FB" },
                      { href: SOCIAL.tiktok, label: "TT" },
                    ].filter((s) => s.href).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 border border-border rounded-md flex items-center justify-center font-mono text-[11px] font-bold tracking-widest text-ink-dim hover:text-accent-hi hover:border-accent/50 hover:bg-accent/5 transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-2xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <TerminalKicker prefix="MESSAGE" label="COMPOSE" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-ink-dim text-base mt-3">
              Questions? We&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-surface/40 border border-border rounded-xl p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery5} alt="Ocean City MD waterfront at downtown dock" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" grid />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="MEET_US_ON_THE_WATER" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Come see us<br />
              <span className="text-accent-hi">on the water.</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Book your adventure and experience what makes Ocean City special.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
              >
                Book Your Adventure
              </a>
              <a
                href={PHONE_HREF}
                className="px-8 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                <span className="mono-num normal-case text-base">{PHONE}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
