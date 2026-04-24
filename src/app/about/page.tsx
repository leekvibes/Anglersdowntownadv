import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, EMAIL, ADDRESS, ADDRESS_URL, HOURS, SOCIAL, LOGO_URL, HERO_VIDEO_URL, HERO_FALLBACK_IMAGE } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Jet Ski & Boat Rental | Ocean City MD",
  description:
    "Meet the family behind Angler Watersports — Ocean City MD's top-rated jet ski and pontoon boat rental. Brand-new 2026 fleet, 5-star Google reviews, free downtown parking. Learn our story.",
  keywords: [
    "ocean city md water sports",
    "jet ski rental ocean city md",
    "pontoon boat rental ocean city maryland",
    "family owned boat rental ocean city",
    "Angler Watersports",
    "water sports ocean city md",
    "boat rental downtown ocean city",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/about",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "About Us | Family-Owned Jet Ski & Boat Rental | Ocean City MD",
    description:
      "Meet the family behind Angler Watersports — Ocean City's top-rated jet ski and pontoon boat rental.",
    url: "https://anglerwatersports.com/about",
  },
};

const STATS = [
  { value: "Family", label: "Owned & Operated", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { value: "5-Star", label: "Google Rated", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { value: "Brand New", label: "2026 Fleet", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { value: "Free", label: "Downtown Parking", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
];

const VALUES = [
  {
    title: "Safety First, Always",
    desc: "Every piece of equipment is inspected daily. Every jet ski ride includes a certified guide. Every guest gets a full safety orientation. No exceptions.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Newest Equipment in OC",
    desc: "We invest in brand new jet skis and well-maintained pontoon boats every season. You'll never ride something outdated or unreliable.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Best Location Downtown",
    desc: "307 Dorchester Street puts you right in the heart of Ocean City with direct access to Assateague Bay — the largest and most beautiful riding area in town.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Real People, Real Passion",
    desc: "We're not a franchise. We grew up on this bay — fishing, riding, and watching sunsets over Assateague. This is our home, and we love sharing it.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
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
      {/* ── VIDEO HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[700px] flex items-end justify-center overflow-hidden">
        <video autoPlay muted loop playsInline poster={HERO_FALLBACK_IMAGE} className="absolute inset-0 w-full h-full object-cover">
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-12 md:pb-16 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">About Us</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">
            Born on the Bay. Built for You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Family owned, locally operated, and obsessed with getting people out on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-yellow-brand text-dark font-bold text-base rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:scale-105">
              Book Your Adventure
            </a>
            <a href={PHONE_HREF} className="px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-bold text-base rounded-lg border-2 border-white/30 hover:bg-white/25 transition-all">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── STAT BADGES ── */}
      <section className="bg-white py-8 md:py-10 border-b border-gray-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-gray-light rounded-xl p-4">
                <div className="w-11 h-11 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-dark leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-text">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block px-3 py-1 bg-blue-light text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-5 tracking-tight">
                From Local Kids to Local Business
              </h2>
              <div className="text-gray-text text-base leading-relaxed space-y-4">
                <p>
                  Angler Watersports started with a simple idea: share our love for Ocean City&apos;s waterways with visitors and locals alike. As a family born and raised in Ocean City, Maryland, we grew up on the bay — fishing, crabbing, riding jet skis, and watching sunsets over Assateague Island.
                </p>
                <p>
                  What started as a passion for the water turned into a family business. Today, we operate out of <strong>307 Dorchester Street</strong>, right in the heart of downtown Ocean City, offering jet ski and pontoon boat rentals in the largest and most beautiful riding area in town — Assateague Bay.
                </p>
                <p>
                  We take pride in running a tight ship — brand new equipment inspected daily, certified guides who genuinely care about your experience, and a commitment to safety that never wavers. When you rent with us, you&apos;re not just a customer — you&apos;re family.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                {TEAM_PHOTOS.map((photo, i) => (
                  <div key={i} className={`relative rounded-2xl overflow-hidden shadow-lg ${i === 0 ? "aspect-[3/4]" : i === 1 ? "aspect-[3/4] mt-8" : i === 2 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"}`}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">What Sets Us Apart</h2>
            <p className="text-gray-text text-lg mt-2">Four reasons people choose us over every other rental in Ocean City.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-border shadow-sm h-full flex gap-5">
                  <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
                    <p className="text-gray-text text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">What We Offer</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Jet Ski card */}
            <ScrollReveal delay={0}>
              <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image src={IMAGES.heroJetski} alt="Jet ski rental guided tour on Assateague Bay Ocean City MD" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-2.5 py-1 bg-yellow-brand text-dark text-xs font-bold uppercase rounded mb-2">From $129/hr</span>
                  <h3 className="text-2xl font-extrabold text-white mb-1">Jet Ski Rentals</h3>
                  <p className="text-white/90 text-sm mb-4 drop-shadow-sm">1-hour guided rides on brand-new Sea-Doo jet skis. See wild horses and dolphins.</p>
                  <a href="/jet-ski" className="inline-flex items-center gap-2 text-yellow-brand font-bold text-sm hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Pontoon card */}
            <ScrollReveal delay={100}>
              <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image src={IMAGES.pontoon1} alt="Pontoon boat rental cruise on Assateague Bay Ocean City Maryland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-2.5 py-1 bg-yellow-brand text-dark text-xs font-bold uppercase rounded mb-2">From $329</span>
                  <h3 className="text-2xl font-extrabold text-white mb-1">Pontoon Boat Rentals</h3>
                  <p className="text-white/90 text-sm mb-4 drop-shadow-sm">Self-guided 2–8 hour bay cruises for up to 10 guests. BYOB, fishing, and more.</p>
                  <a href="/pontoon" className="inline-flex items-center gap-2 text-yellow-brand font-bold text-sm hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── LOCATION & MAP ── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Find Us in Downtown OC</h2>
            <p className="text-gray-text text-base mt-2">Right on Dorchester Street with free parking — the most convenient spot in town.</p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map embed */}
            <ScrollReveal className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[400px]">
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

            {/* Contact info */}
            <ScrollReveal className="lg:col-span-2" direction="right">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-border shadow-sm h-full">
                <Image src={LOGO_URL} alt="Angler Watersports" width={160} height={60} className="mb-6" />

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-2">Address</h3>
                    <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-blue-brand transition-colors flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="text-sm">{ADDRESS}</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-2">Phone</h3>
                    <a href={PHONE_HREF} className="text-gray-text hover:text-blue-brand transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span className="text-sm">{PHONE}</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-2">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-text hover:text-blue-brand transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-sm">{EMAIL}</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-2">Hours</h3>
                    <p className="text-gray-text text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {HOURS}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-2">Parking</h3>
                    <p className="text-gray-text text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-4 0v10m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Free parking right at our location
                    </p>
                  </div>

                  {/* Social icons */}
                  <div className="flex gap-3 pt-2">
                    <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="TikTok">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Send Us a Message</h2>
            <p className="text-gray-text text-base mt-2">Have a question? We&apos;ll get back to you within 24 hours.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-gray-light rounded-2xl p-6 md:p-8 border border-gray-border">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery5} alt="Ocean City MD waterfront at downtown dock" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Come See Us on the Water</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your adventure and experience what makes Ocean City special.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Your Adventure</a>
              <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
