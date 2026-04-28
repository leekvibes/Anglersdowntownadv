import Image from "next/image";
import { Metadata } from "next";
import {
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  ADDRESS,
  ADDRESS_URL,
  HOURS,
  SITE_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Find Us | 312 Talbot St, Ocean City MD | Jet Ski & Boat Rental Location",
  description:
    "Visit Angler Watersports at 312 Talbot Street, Ocean City, MD 21842. Free parking, right in downtown on the bay. Get directions to the best jet ski and pontoon boat rental in Ocean City.",
  keywords: [
    "Angler Watersports location",
    "312 Talbot Street Ocean City MD",
    "ocean city jet ski directions",
    "pontoon boat rental location ocean city",
    "boat rental downtown ocean city maryland",
    "free parking jet ski ocean city",
  ],
  alternates: { canonical: `${SITE_URL}/find-us` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Find Us | 312 Talbot St, Ocean City MD",
    description:
      "Visit Angler Watersports at 312 Talbot Street, Ocean City, MD. Free parking, right downtown.",
    url: `${SITE_URL}/find-us`,
  },
};

const ARRIVAL_CHECKLIST = [
  {
    code: "01",
    title: "Arrive 15–20 Min Early",
    desc: "Give yourself time for check-in and safety briefing before hitting the water.",
  },
  {
    code: "02",
    title: "Bring Valid ID",
    desc: "Jet ski drivers need a valid photo ID. Pontoon drivers must be 21+ with a valid license.",
  },
  {
    code: "03",
    title: "Wear What Gets Wet",
    desc: "You will get splashed. Swimwear or clothes you don't mind soaking. Sunscreen is a must.",
  },
];

export default function FindUsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery5} alt="Ocean City downtown waterfront jet ski and pontoon boat dock" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="LOCATION" label="DOWNTOWN_OC" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Find<br />
            <span className="text-accent-hi">the dock.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            312 Talbot Street, right in the heart of downtown Ocean City. Free parking.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Map */}
            <ScrollReveal className="lg:col-span-3">
              <div className="relative rounded-xl overflow-hidden border border-border h-[400px] md:h-[520px]">
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
                <div className="pointer-events-none absolute top-4 left-4 px-3 py-1.5 bg-bg/90 backdrop-blur-md border border-accent/40 rounded font-mono text-[10px] uppercase tracking-[0.18em] text-accent-hi">
                  ● DOCK · 38.3318°N 75.0897°W
                </div>
              </div>
            </ScrollReveal>

            {/* Info panel */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-surface/40 border border-border rounded-xl p-6 md:p-8 h-full">
                <TerminalKicker prefix="DOCK" label="312_TALBOT" className="mb-5" />
                <div className="space-y-5">
                  <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="block group">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Address</h3>
                    <p className="text-ink font-semibold group-hover:text-accent-hi transition-colors">{ADDRESS}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mt-1">Get Directions →</p>
                  </a>

                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Hours</h3>
                    <p className="text-ink font-semibold">{HOURS}</p>
                    <p className="text-ink-dim text-xs mt-1">Open daily during the season</p>
                  </div>

                  <a href={PHONE_HREF} className="block group">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-1">Phone</h3>
                    <p className="mono-num text-ink font-semibold text-lg group-hover:text-accent-hi transition-colors">{PHONE}</p>
                  </a>

                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/40">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
                      ● FREE PARKING
                    </p>
                    <p className="text-ink-dim text-sm leading-relaxed">
                      Right at the dock. No meters, no hassle. Pull up, check in, get on the water.
                    </p>
                  </div>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors text-center"
                  >
                    Book Your Adventure
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR DOCK */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="PHOTOS" label="ON_ARRIVAL" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              What You&apos;ll See
            </h2>
            <p className="text-ink-dim text-base md:text-lg mt-4">
              Here&apos;s what the dock looks like when you roll up.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { src: IMAGES.pontoon4, alt: "Pontoon boats docked at 312 Talbot Street Ocean City MD" },
              { src: IMAGES.group3, alt: "Guests preparing for jet ski rental at our downtown Ocean City dock" },
              { src: IMAGES.pontoon5, alt: "Pontoon boat rental launch area on Assateague Bay" },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="DRIVE" label="DIRECTIONS" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Getting Here
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                tag: "N",
                title: "From the North (Boardwalk Area)",
                desc: "Head south on Philadelphia Ave (Coastal Hwy) toward downtown. Turn right onto Talbot Street. 312 Talbot is on the bay side.",
              },
              {
                tag: "S",
                title: "From the South (Rt 50 / West OC)",
                desc: "Cross the Route 50 bridge into Ocean City. Talbot Street is one of the first streets downtown. Turn right, head toward the bay.",
              },
            ].map((d, i) => (
              <ScrollReveal key={d.tag} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 h-full hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/40 flex items-center justify-center">
                      <span className="mono-num text-accent-hi text-base font-bold">{d.tag}</span>
                    </div>
                    <h3 className="text-ink font-bold text-lg tracking-tight">{d.title}</h3>
                  </div>
                  <p className="text-ink-dim text-sm leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARRIVAL CHECKLIST */}
      <section className="py-20 md:py-24 bg-bg-deep border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <TerminalKicker prefix="CHECKLIST" label="ON_ARRIVAL" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Before You Arrive
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {ARRIVAL_CHECKLIST.map((item, i) => (
              <ScrollReveal key={item.code} delay={i * 100}>
                <div className="bg-surface/40 border border-border rounded-xl p-6 h-full hover:border-accent/40 transition-colors">
                  <p className="mono-num text-3xl font-bold text-accent-hi mb-4">{item.code}</p>
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
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland boat rental" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="SEE_YOU_SOON" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              See you<br />
              <span className="text-accent-hi">on the water.</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              Book your adventure and come visit us in downtown Ocean City.
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
