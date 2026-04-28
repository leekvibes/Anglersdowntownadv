import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PARTNERS, PHONE, PHONE_HREF, EMAIL, SITE_URL, ADDRESS, ADDRESS_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Local Partners | Ocean City MD Restaurants & Businesses | Angler Watersports",
  description:
    "Angler Watersports partners with the best local restaurants and businesses in Ocean City, MD. Exclusive deals for our jet ski and pontoon boat rental guests.",
  keywords: [
    "ocean city md local businesses",
    "Angler Watersports partners",
    "ocean city restaurant deals",
    "ocean city md water sports partners",
    "things to do ocean city maryland",
  ],
  alternates: { canonical: `${SITE_URL}/partners` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Local Partners | Ocean City MD | Angler Watersports",
    description:
      "Exclusive deals from our local partners in Ocean City, MD. Restaurants, activities, and more for our guests.",
    url: `${SITE_URL}/partners`,
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.group2} alt="Friends enjoying jet ski and boat rental adventures in Ocean City MD" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="NETWORK" label="LOCAL_PARTNERS" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Our<br />
            <span className="text-accent-hi">Partners.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            We team up with the best local businesses in Ocean City to make your visit
            unforgettable. Stop by any of these before or after your run.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-5xl mx-auto px-4 space-y-6">
          {PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 80}>
              <div className="bg-surface/40 border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Logo panel */}
                  <div className="bg-bg-deep border-r border-border flex items-center justify-center p-10 md:p-12">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={120}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
                      &gt; PARTNER · 0{i + 1}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 tracking-tight">
                      {partner.name}
                    </h2>
                    <p className="text-ink-dim leading-relaxed mb-5">
                      {partner.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm mb-6">
                      <div className="flex items-center gap-2 text-ink-dim">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">LOC</span>
                        {partner.address}
                      </div>
                      <div className="flex items-center gap-2 text-ink-dim">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">HRS</span>
                        {partner.hours}
                      </div>
                    </div>

                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors text-sm"
                    >
                      Visit Website
                      <span className="mono-num">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-surface/40 border border-border rounded-xl p-8 md:p-12 text-center">
              <TerminalKicker prefix="OPEN" label="PARTNERSHIPS" className="mb-5 justify-center" />
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight">
                Want to Partner With Us?
              </h2>
              <p className="text-ink-dim text-base md:text-lg mb-8 max-w-xl mx-auto">
                Own a local business in Ocean City? We&apos;re always looking for great
                partners to team up with. Send us a note and let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`mailto:${EMAIL}?subject=Partnership%20Inquiry`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors"
                >
                  Email Us
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 hover:bg-surface transition-colors"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="ADVENTURE" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Ready for<br />
              <span className="text-accent-hi">your adventure?</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Book your ride and explore what makes Ocean City special — on and off the water.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
            >
              Book Now
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
