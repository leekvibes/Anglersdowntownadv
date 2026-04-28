import Image from "next/image";
import { Metadata } from "next";
import {
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  EMAIL,
  HOURS,
  SOCIAL,
  ADDRESS,
  ADDRESS_URL,
  SITE_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Contact Us | Jet Ski & Boat Rental Ocean City MD | Angler Watersports",
  description:
    "Contact Angler Watersports for jet ski and pontoon boat rentals in Ocean City, MD. Call (443) 664-6300, email, or message us. Open daily 8:30 AM – 8:30 PM. Free parking downtown.",
  keywords: [
    "contact ocean city jet ski rental",
    "Angler Watersports phone number",
    "ocean city boat rental contact",
    "jet ski rental phone ocean city md",
    "pontoon boat rental inquiry ocean city",
    "book jet ski ocean city maryland",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Contact Us | Jet Ski & Boat Rental Ocean City MD",
    description:
      "Contact Angler Watersports for jet ski and pontoon boat rentals in Ocean City, MD.",
    url: `${SITE_URL}/contact`,
  },
};

const METHODS = [
  {
    code: "TEL",
    label: "Phone",
    value: PHONE,
    href: PHONE_HREF,
    sub: "Call or text during business hours",
  },
  {
    code: "@",
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    sub: "Reply within a few hours",
  },
  {
    code: "LOC",
    label: "Location",
    value: ADDRESS,
    href: ADDRESS_URL,
    sub: "Get directions →",
    external: true,
  },
  {
    code: "HRS",
    label: "Hours",
    value: HOURS,
    sub: "Open daily during the season",
  },
];

const QUESTIONS = [
  {
    title: "Group Bookings",
    desc: "Planning a big outing? Call us directly for special group rates on rentals for parties of 6 or more.",
    code: "01",
  },
  {
    title: "Weather Cancellations",
    desc: "If weather forces a cancellation, we'll contact you to reschedule at no extra cost. Safety always comes first.",
    code: "02",
  },
  {
    title: "Same-Day Bookings",
    desc: "Need a ride today? Call to check availability. Walk-ins are welcome but peak times fill up fast.",
    code: "03",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="REACH_OUT" label="CONTACT" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Get in<br />
            <span className="text-accent-hi">touch.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Questions about rentals, groups, or anything else — we&apos;re here.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS + FORM */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Methods */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <TerminalKicker prefix="METHODS" label="CHANNELS" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight leading-[1.05]">
                Reach us any way.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed mb-8">
                Whether you want to plan a group outing, ask about availability, or
                just say hi — pick a channel.
              </p>

              <div className="space-y-3">
                {METHODS.map((m) => {
                  const content = (
                    <div className="bg-surface/40 border border-border rounded-lg p-4 flex items-start gap-4 group hover:border-accent/40 transition-colors">
                      <div className="mono-num text-[10px] uppercase tracking-[0.18em] text-accent w-10 flex-shrink-0 mt-1">
                        {m.code}
                      </div>
                      <div className="flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-0.5">
                          {m.label}
                        </p>
                        <p className="text-ink font-semibold group-hover:text-accent-hi transition-colors break-all">
                          {m.value}
                        </p>
                        <p className="text-ink-dim text-xs mt-1">{m.sub}</p>
                      </div>
                    </div>
                  );
                  return m.href ? (
                    <a
                      key={m.code}
                      href={m.href}
                      target={m.external ? "_blank" : undefined}
                      rel={m.external ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={m.code}>{content}</div>
                  );
                })}
              </div>

              {/* Socials — hidden until Angler accounts are live */}
              {(SOCIAL.instagram || SOCIAL.facebook || SOCIAL.tiktok) && (
                <div className="mt-6 flex gap-2">
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
                      className="w-11 h-11 border border-border rounded-md flex items-center justify-center font-mono text-[11px] font-bold tracking-widest text-ink-dim hover:text-accent-hi hover:border-accent/50 hover:bg-accent/5 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-surface/40 border border-border rounded-xl p-6 md:p-10">
                <TerminalKicker prefix="MESSAGE" label="COMPOSE" className="mb-5" />
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3 tracking-tight">
                  Send Us a Message
                </h3>
                <p className="text-ink-dim text-sm mb-8">
                  Fill this out and we&apos;ll respond as soon as we can.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="FAQ" label="COMMON" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {QUESTIONS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 h-full hover:border-accent/40 transition-colors">
                  <p className="mono-num text-2xl font-bold text-accent-hi mb-4">{item.code}</p>
                  <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery1} alt="Assateague Bay boat rental launch point Ocean City MD" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="SKIP_THE_LINE" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Skip the wait.<br />
              <span className="text-accent-hi">Book online.</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Reserve your jet ski or pontoon in a couple clicks.
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
