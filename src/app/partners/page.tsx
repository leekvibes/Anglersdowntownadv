import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PARTNERS, PHONE, PHONE_HREF, EMAIL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";

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
  alternates: {
    canonical: "https://anglerwatersports.com/partners",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Local Partners | Ocean City MD | Angler Watersports",
    description:
      "Exclusive deals from our local partners in Ocean City, MD. Restaurants, activities, and more for our guests.",
    url: "https://anglerwatersports.com/partners",
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.group2} alt="Friends enjoying jet ski and boat rental adventures in Ocean City MD" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Local Partners</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">Our Partners</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            We team up with the best local businesses in Ocean City to make your visit unforgettable.
          </p>
        </div>
      </section>

      {/* ── PARTNER CARDS ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {PARTNERS.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 100}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-border overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Logo */}
                    <div className="bg-gray-light flex items-center justify-center p-10 md:p-12">
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
                      <h2 className="text-2xl font-extrabold text-dark mb-3 tracking-tight">{partner.name}</h2>
                      <p className="text-gray-text leading-relaxed mb-5">{partner.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-text mb-6">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {partner.address}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {partner.hours}
                        </div>
                      </div>

                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors shadow-md text-sm"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BECOME A PARTNER ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-border shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-dark mb-3 tracking-tight">Become a Partner</h2>
              <p className="text-gray-text text-lg mb-8 max-w-xl mx-auto">
                Own a local business in Ocean City? We&apos;re always looking for great partners to team up with. Let&apos;s create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${EMAIL}?subject=Partnership%20Inquiry`} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-blue-brand text-blue-brand font-bold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {PHONE}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready for Your Adventure?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your jet ski or pontoon boat rental and explore what makes Ocean City special.</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl inline-block">Book Now</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
