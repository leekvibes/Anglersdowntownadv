import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, ADDRESS, ADDRESS_URL, HOURS, LOGO_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Find Us | 307 Dorchester St, Ocean City MD | Jet Ski & Boat Rental Location",
  description:
    "Visit Angler Watersports at 307 Dorchester Street, Ocean City, MD 21842. Free parking, right in downtown on the bay. Get directions to the best jet ski and pontoon boat rental in Ocean City.",
  keywords: [
    "Angler Watersports location",
    "307 Dorchester Street Ocean City MD",
    "ocean city jet ski directions",
    "pontoon boat rental location ocean city",
    "boat rental downtown ocean city maryland",
    "free parking jet ski ocean city",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/find-us",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Find Us | 307 Dorchester St, Ocean City MD",
    description:
      "Visit Angler Watersports at 307 Dorchester Street, Ocean City, MD. Free parking, right in downtown on the bay.",
    url: "https://anglerwatersports.com/find-us",
  },
};

export default function FindUsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.scenery5} alt="Ocean City downtown waterfront jet ski and pontoon boat dock" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Our Location</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">Find Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Right in the heart of downtown Ocean City — with free parking.
          </p>
        </div>
      </section>

      {/* ── MAP + INFO CARDS ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map */}
            <ScrollReveal className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.8!2d-75.0876!3d38.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d7c7b0c85c2b%3A0x1234567890!2s307+Dorchester+St%2C+Ocean+City%2C+MD+21842!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angler Watersports Location"
                  className="absolute inset-0"
                />
              </div>
            </ScrollReveal>

            {/* Info panel */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-border shadow-lg h-full">
                <Image src={LOGO_URL} alt="Angler Watersports" width={160} height={60} className="mb-6" />

                <div className="space-y-5">
                  <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="block group">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-1">Address</h3>
                    <p className="text-dark font-semibold group-hover:text-blue-brand transition-colors">{ADDRESS}</p>
                    <p className="text-blue-brand text-sm font-semibold mt-1 group-hover:text-blue-dark transition-colors">Get Directions →</p>
                  </a>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-1">Hours</h3>
                    <p className="text-dark font-semibold">{HOURS}</p>
                    <p className="text-gray-text text-sm mt-0.5">Open daily during the season</p>
                  </div>

                  <a href={PHONE_HREF} className="block group">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-1">Phone</h3>
                    <p className="text-dark font-semibold text-lg group-hover:text-blue-brand transition-colors">{PHONE}</p>
                  </a>

                  <div className="bg-yellow-brand/10 rounded-xl p-4 border border-yellow-brand/30">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="font-bold text-dark">Free Parking</h3>
                    </div>
                    <p className="text-gray-text text-sm">Free parking right at our dock — no meters, no hassle. Just pull up and get on the water.</p>
                  </div>

                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-md text-center">
                    Book Your Adventure
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── OUR DOCK ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Our Dock</h2>
            <p className="text-gray-text text-base mt-2">Here&apos;s what you&apos;ll see when you arrive at 307 Dorchester Street.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: IMAGES.pontoon4, alt: "Pontoon boats docked at 307 Dorchester Street Ocean City MD" },
              { src: IMAGES.group3, alt: "Guests preparing for jet ski rental at our downtown Ocean City dock" },
              { src: IMAGES.pontoon5, alt: "Pontoon boat rental launch area on Assateague Bay" },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Getting Here</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal delay={0}>
              <div className="bg-gray-light rounded-2xl p-6 border border-gray-border h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-brand text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                  <h3 className="font-bold text-dark">From the North (Boardwalk Area)</h3>
                </div>
                <p className="text-gray-text text-sm leading-relaxed">
                  Head south on Philadelphia Ave (Coastal Hwy) toward downtown. Turn right onto Dorchester Street. We&apos;re at 307 Dorchester on the bay side — you can&apos;t miss us!
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-gray-light rounded-2xl p-6 border border-gray-border h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-brand text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </div>
                  <h3 className="font-bold text-dark">From the South (West OC / Rt 50)</h3>
                </div>
                <p className="text-gray-text text-sm leading-relaxed">
                  Cross the Route 50 bridge into Ocean City. Continue straight — Dorchester Street is one of the first streets downtown. Turn right and head toward the bay. Free parking at our dock.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BEFORE YOU ARRIVE ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Before You Arrive</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Arrive 15–20 Min Early", desc: "Give yourself time for check-in and your safety briefing before hitting the water.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Bring Valid ID", desc: "All jet ski drivers need a valid photo ID. Pontoon drivers must be 21+ with a valid license.", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" },
              { title: "Wear What Gets Wet", desc: "You will get splashed! Wear swimwear or clothes you don't mind getting wet. Sunscreen is a must.", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm text-center h-full">
                  <div className="w-14 h-14 bg-blue-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland boat rental" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">See You on the Water</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your adventure and come visit us in downtown Ocean City.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
              <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">Call {PHONE}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
