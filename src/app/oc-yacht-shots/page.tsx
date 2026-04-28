import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, SITE_URL, PHONE, PHONE_HREF, ADDRESS, ADDRESS_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "OC Yacht Shots | Professional Jet Ski & Boat Photos | Ocean City MD",
  description:
    "Get professional photos of your jet ski and pontoon boat adventure in Ocean City, MD. Action-packed images captured on the water — purchase and download high-quality photos of your ride.",
  keywords: [
    "ocean city adventure photos",
    "jet ski photos ocean city md",
    "pontoon boat photos ocean city",
    "OC Yacht Shots",
    "water sports photography ocean city maryland",
  ],
  alternates: { canonical: `${SITE_URL}/oc-yacht-shots` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "OC Yacht Shots | Professional Adventure Photos | Ocean City MD",
    description:
      "Professional photos of your jet ski and pontoon boat adventure in Ocean City, MD.",
    url: `${SITE_URL}/oc-yacht-shots`,
  },
};

const SAMPLES = [
  { src: IMAGES.jetski1, alt: "Jet ski riders captured by on-water photographer on Assateague Bay" },
  { src: IMAGES.group1, alt: "Group jet ski tour photo Ocean City Maryland" },
  { src: IMAGES.pontoon2, alt: "Pontoon boat cruise photography Ocean City MD" },
  { src: IMAGES.jetski3, alt: "Action shot of jet ski rental on the bay" },
  { src: IMAGES.scenery3, alt: "Scenic Assateague Bay view from boat rental" },
  { src: IMAGES.pontoon4, alt: "Pontoon boat adventure photo at sunset Ocean City" },
];

export default function OcYachtShotsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Professional on-water photography for jet ski and boat rentals Ocean City MD" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="ADD-ON" label="YACHT_SHOTS" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Your run,<br />
            <span className="text-accent-hi">captured.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Professional photographers ride the bay and catch every boat at the best
            vantage points. Download high-res photos after your run.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <TerminalKicker prefix="PROCESS" label="3_STEPS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              How It Works
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4 leading-relaxed">
              You ride, they shoot, you download. That&apos;s it.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Ride & Smile", desc: "Enjoy your adventure while the photographers capture the action from the water." },
              { step: "02", title: "Find Your Photos", desc: "After your ride, visit ocyachtshots.com to browse your images." },
              { step: "03", title: "Download & Share", desc: "Purchase favorites for print or digital download. Share with everyone." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 h-full hover:border-accent/40 transition-colors">
                  <p className="mono-num text-3xl font-bold text-accent-hi mb-4">{item.step}</p>
                  <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <a
              href="https://www.ocyachtshots.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors shadow-[0_0_40px_rgba(212,160,23,0.2)]"
            >
              Find Your Photos
              <span className="mono-num">↗</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* SAMPLE PHOTOS */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="SAMPLES" label="SHOT_LIST" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Sample Photos
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SAMPLES.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery1} alt="Ocean City MD jet ski pontoon boat rental on Assateague Bay" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="THE_RIDE_FIRST" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Book the ride.<br />
              <span className="text-accent-hi">Keep the memory.</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Reserve your jet ski or pontoon and let the photographers do the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
              >
                Book Your Ride
              </a>
              <a
                href="https://www.ocyachtshots.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                Find Your Photos ↗
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
              <a href={`tel:${PHONE_HREF}`} className="hover:text-accent-hi transition-colors">
                ◆ {PHONE}
              </a>
              <span className="mx-2">·</span>
              <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hi transition-colors">
                {ADDRESS}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
