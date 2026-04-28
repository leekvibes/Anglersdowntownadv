import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";
import { faqSchema, breadcrumbSchema } from "@/components/StructuredData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "FAQ | Jet Ski & Pontoon Boat Rental Questions | Ocean City MD",
  description:
    "Got questions about jet ski or pontoon boat rentals in Ocean City, MD? Find answers about booking, age requirements, cancellation policy, safety, parking, and more. Angler Watersports.",
  keywords: [
    "jet ski rental FAQ ocean city md",
    "pontoon boat rental questions ocean city",
    "ocean city boat rental policy",
    "jet ski age requirement ocean city",
    "pontoon boat rental rules ocean city md",
    "ocean city water sports FAQ",
    "boat rental cancellation policy ocean city",
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "FAQ | Jet Ski & Pontoon Boat Rental Questions | Ocean City MD",
    description:
      "Got questions about jet ski or pontoon boat rentals in Ocean City, MD? Answers here.",
    url: `${SITE_URL}/faq`,
  },
};

const sections = [
  {
    code: "BOOK",
    title: "Booking & Reservations",
    faqs: [
      { q: "Do I need to make a reservation?", a: "We highly recommend booking online in advance to guarantee your preferred date and time. Walk-ins are accepted based on availability, but weekends and peak season fill up fast." },
      { q: "How do I book?", a: "Book directly through our website by clicking any Book Now button — it takes you to our secure booking system where you can choose your activity, date, and time. You can also call us at (443) 664-6300." },
      { q: "What is your cancellation policy?", a: "We recommend canceling at least 24 hours before your scheduled rental for a full refund. Cancellations within 24 hours may be subject to a fee. If weather forces a cancellation, we'll work with you to reschedule." },
      { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome. However, availability is not guaranteed — especially during peak summer weekends. Booking ahead is your best bet." },
      { q: "What payment methods do you accept?", a: "All major credit cards. Payment is processed at the time of booking through our secure online system." },
      { q: "Can I book for a large group?", a: "Absolutely. For groups needing multiple jet skis or pontoon boats, contact us directly and we'll coordinate your adventure." },
    ],
  },
  {
    code: "JET",
    title: "Jet Ski Rentals",
    faqs: [
      { q: "How old do you have to be to ride a jet ski?", a: "Passengers must be at least 5 years old. Drivers must be at least 16 with a valid photo ID. Drivers under 18 need a parent or guardian signature." },
      { q: "How many people fit on a jet ski?", a: "Up to 3 people — two adults and one child maximum. Weight capacity is approximately 450 lbs." },
      { q: "Do I need experience?", a: "No experience needed. Our guides provide a complete safety and instructional briefing before every ride. They accompany you on the water the entire time." },
      { q: "Do I need a boater's license?", a: "No boater's license required. Maryland regulations require a certified guide to accompany all jet ski rentals, which we provide." },
      { q: "Are life vests provided?", a: "Yes — life vests are mandatory for all riders and provided free of charge in all sizes." },
      { q: "How long is the ride?", a: "Each jet ski rental is 1 hour of ride time. Arrive 15-20 minutes early for check-in and safety briefing." },
      { q: "How fast do the jet skis go?", a: "Our brand-new jet skis can reach 40+ mph depending on conditions and rider weight." },
    ],
  },
  {
    code: "PON",
    title: "Pontoon Boat Rentals",
    faqs: [
      { q: "How old do you have to be to drive a pontoon?", a: "The driver must be at least 21 years old with a valid driver's license. No boating experience required — we provide full orientation before departure." },
      { q: "How many people fit on a pontoon boat?", a: "Up to 10 people per pontoon boat. All ages welcome." },
      { q: "Are pontoon boats self-guided?", a: "Yes. Unlike jet skis, pontoon boats are self-captained. You're the captain — explore the bay at your own pace." },
      { q: "Can we bring alcohol?", a: "Yes, alcohol is permitted on pontoon boats. The driver must remain sober at all times — no exceptions." },
      { q: "Can we anchor at Assateague Island?", a: "Yes. You can anchor near Assateague Island to watch wild horses, swim at sandbars, or just relax. This is one of the highlights of a pontoon rental." },
      { q: "What's included in the rental?", a: "Each rental includes the pontoon boat with canopy, life vests in all sizes, a full safety orientation, and free parking at our location." },
    ],
  },
  {
    code: "SAF",
    title: "Safety & Weather",
    faqs: [
      { q: "What safety measures do you have?", a: "Safety is our top priority. All jet ski rides include a certified guide. Life vests are mandatory for jet ski riders and available for all pontoon passengers. Our equipment is inspected daily." },
      { q: "What happens if the weather is bad?", a: "We monitor conditions closely. If conditions are unsafe, we'll contact you to reschedule at no additional cost. Light rain typically doesn't affect operations — we're open rain or shine unless conditions are dangerous." },
      { q: "Can I ride a jet ski if I've been drinking?", a: "Absolutely not. You may not operate a jet ski or pontoon under the influence of alcohol or any other substance. Strictly enforced for everyone's safety." },
    ],
  },
  {
    code: "GEN",
    title: "General",
    faqs: [
      { q: "Where are you located?", a: "312 Talbot Street, Ocean City, MD 21842 — right in the heart of downtown Ocean City, on the bay side." },
      { q: "Is parking free?", a: "Yes. Free parking right at our location. No meters, no hassle." },
      { q: "What are your hours?", a: "Monday through Sunday, 8:30 AM to 8:30 PM during the season." },
      { q: "How early should I arrive?", a: "Arrive 15-20 minutes before your scheduled time to complete check-in and safety briefing." },
      { q: "Can I get photos of my ride?", a: "Yes. Our affiliated photography service, OC Yacht Shots, captures professional photos of your adventure. Visit ocyachtshots.com after your ride to find and purchase your images." },
    ],
  },
];

const ALL_FAQS = sections.flatMap((s) => s.faqs);

export default function FaqPage() {
  let qNumber = 0;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(ALL_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "FAQ", url: `${SITE_URL}/faq` },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery3} alt="Assateague Bay view Ocean City Maryland" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="ANSWERS" label="FAQ" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Questions,<br />
            <span className="text-accent-hi">answered.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Everything you need to know before your adventure.
          </p>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-4xl mx-auto px-4 space-y-12">
          {sections.map((section, sIdx) => (
            <ScrollReveal key={section.title} delay={sIdx * 40}>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  &gt; {section.code}
                </span>
                <div className="flex-1 h-px bg-border" />
                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-2">
                {section.faqs.map((faq) => {
                  qNumber += 1;
                  const n = qNumber;
                  return (
                    <details
                      key={faq.q}
                      className="group bg-surface/40 border border-border rounded-lg hover:border-accent/40 transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-ink">
                        <span className="flex items-center gap-3">
                          <span className="mono-num text-[11px] uppercase tracking-[0.16em] text-accent">
                            Q{String(n).padStart(2, "0")}
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
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-8">
            <TerminalKicker prefix="EXPLORE" label="RELATED" className="mb-4 justify-center" />
            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">
              Explore More
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Jet Ski", href: "/jet-ski", desc: "From $129/hr" },
              { label: "Pontoon", href: "/pontoon", desc: "From $329" },
              { label: "Gift Cards", href: "/gift-cards", desc: "Give the run" },
              { label: "Contact", href: "/contact", desc: "Get in touch" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-surface/40 rounded-lg p-4 border border-border hover:border-accent/40 hover:bg-surface transition-colors text-center"
              >
                <p className="font-bold text-ink group-hover:text-accent-hi transition-colors">{link.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City MD" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="STILL" label="NEED_HELP" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Still have<br />
              <span className="text-accent-hi">questions?</span>
            </h2>
            <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
              We&apos;re happy to help. Give us a call or book your adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={PHONE_HREF}
                className="px-10 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                <span className="mono-num normal-case text-base">Call {PHONE}</span>
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
              >
                Book Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
