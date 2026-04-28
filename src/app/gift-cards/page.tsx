import Image from "next/image";
import { Metadata } from "next";
import {
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  ADDRESS_URL,
  SITE_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Gift Cards | Angler Watersports Ocean City MD",
  description:
    "Give the gift of a day on Assateague Bay. Angler Watersports gift cards work for jet ski tours and pontoon rentals — any amount, delivered instantly, never expires.",
  keywords: [
    "Angler Watersports gift card",
    "ocean city md jet ski gift card",
    "pontoon boat rental gift ocean city",
    "watersports gift card maryland",
    "experience gift ocean city md",
  ],
  alternates: { canonical: `${SITE_URL}/gift-cards` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Gift Cards | Angler Watersports",
    description:
      "Give the gift of a day on Assateague Bay. Any amount, delivered instantly, never expires.",
    url: `${SITE_URL}/gift-cards`,
  },
};

const PERKS = [
  "Any dollar amount",
  "Delivered instantly via email",
  "Valid for jet ski + pontoon rentals",
  "Never expires",
];

const HOW = [
  {
    code: "01",
    title: "Pick an Amount",
    desc: "Choose any dollar value. Cover a 1-hour jet ski run, a half-day pontoon, or anything in between.",
  },
  {
    code: "02",
    title: "We Email It",
    desc: "Sent instantly to the recipient (or to you, to forward later). Branded card, redemption code, no waiting on shipping.",
  },
  {
    code: "03",
    title: "They Book When Ready",
    desc: "Recipient calls or books online and applies the code. Works for any rental we offer, any time during the season.",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.scenery2}
          alt="Sunset on Assateague Bay — Angler Watersports gift cards"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="GIFT" label="ADVENTURE" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            The gift of<br />
            <span className="text-accent-hi">open water.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Give a day on Assateague Bay. Any amount, delivered instantly, never expires.
          </p>
        </div>
      </section>

      {/* GIFT CARD SHOWCASE */}
      <section className="relative py-20 md:py-24 bg-bg-deep border-y border-border overflow-hidden">
        <GradientMesh variant="panel" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <TerminalKicker prefix="HOW" label="IT_WORKS" className="mb-5" />
              <h2 className="text-3xl md:text-5xl font-bold text-ink mb-5 tracking-tight leading-[1.05]">
                For the person<br />
                <span className="text-accent-hi">who has everything.</span>
              </h2>
              <p className="text-ink-dim text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Birthdays, anniversaries, Father&apos;s Day, last-minute, the
                kid going to college. An Angler Watersports gift card lands as
                an experience, not a thing. Recipient picks the date, the
                duration, the boat.
              </p>
              <ul className="space-y-2.5 mb-8">
                {PERKS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink">
                    <span className="mono-num text-accent-hi">◦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors"
                >
                  Purchase a Gift Card
                  <span className="mono-num">→</span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 hover:bg-surface transition-colors"
                >
                  Call {PHONE}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-4 bg-accent/20 rounded-2xl blur-2xl" />
                  <div
                    className="relative rounded-2xl p-7 border border-accent/40 shadow-2xl aspect-[8/5] flex flex-col justify-between overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0F1729 0%, #172338 100%)" }}
                  >
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <div className="relative flex justify-between items-start">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                          Gift Card
                        </p>
                        <p className="text-2xl font-bold text-ink leading-tight">Angler</p>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-hi">
                          Watersports
                        </p>
                      </div>
                      <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/40 flex items-center justify-center">
                        <span className="mono-num text-accent-hi text-xs font-bold">AWS</span>
                      </div>
                    </div>
                    <div className="relative flex justify-between items-end">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute mb-1">
                          Amount
                        </p>
                        <p className="mono-num text-3xl font-bold text-ink">You Choose</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute">
                          Ocean City · MD
                        </p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute">
                          Jet Ski · Pontoon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="PROCESS" label="3_STEPS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Send in Under a Minute
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {HOW.map((item, i) => (
              <ScrollReveal key={item.code} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 h-full hover:border-accent/40 transition-colors">
                  <p className="mono-num text-3xl font-bold text-accent-hi mb-4">{item.code}</p>
                  <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
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
              Purchase Gift Card
              <span className="mono-num">→</span>
            </a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
              Questions? <a href={`mailto:${EMAIL}`} className="text-accent-hi hover:underline">{EMAIL}</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image
          src={IMAGES.scenery5}
          alt="Ocean City MD bay water for Angler Watersports gift cards"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="GIVE" label="THE_RUN" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Ready to<br />
              <span className="text-accent-hi">send one?</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Any amount, instant delivery, never expires.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
            >
              Purchase a Gift Card
            </a>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
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
