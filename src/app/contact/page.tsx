import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, EMAIL, HOURS, SOCIAL, ADDRESS, ADDRESS_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Jet Ski & Boat Rental Ocean City MD | Angler Watersports",
  description:
    "Contact Angler Watersports for jet ski and pontoon boat rentals in Ocean City, MD. Call (443) 664-6180, email, or message us. Open daily 8:30 AM – 8:30 PM. Free parking downtown.",
  keywords: [
    "contact ocean city jet ski rental",
    "Angler Watersports phone number",
    "ocean city boat rental contact",
    "jet ski rental phone ocean city md",
    "pontoon boat rental inquiry ocean city",
    "book jet ski ocean city maryland",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/contact",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Contact Us | Jet Ski & Boat Rental Ocean City MD",
    description:
      "Contact Angler Watersports for jet ski and pontoon boat rentals in Ocean City, MD. Call, email, or message us.",
    url: "https://anglerwatersports.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Questions about rentals, group bookings, or anything else? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <h2 className="text-3xl font-extrabold text-dark mb-6 tracking-tight">Reach Out Anytime</h2>
                <p className="text-gray-text text-base leading-relaxed mb-8">
                  Whether you want to plan a group outing, ask about availability, or just say hi — we&apos;d love to hear from you.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a href={PHONE_HREF} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-brand/20 transition-colors">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-0.5">Phone</h3>
                      <p className="text-blue-brand font-semibold text-lg group-hover:text-blue-dark transition-colors">{PHONE}</p>
                      <p className="text-gray-text text-sm mt-1">Call or text during business hours</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-brand/20 transition-colors">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-0.5">Email</h3>
                      <p className="text-blue-brand font-semibold group-hover:text-blue-dark transition-colors break-all">{EMAIL}</p>
                      <p className="text-gray-text text-sm mt-1">We respond within a few hours</p>
                    </div>
                  </a>

                  {/* Location */}
                  <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-brand/20 transition-colors">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-0.5">Location</h3>
                      <p className="text-gray-text">{ADDRESS}</p>
                      <p className="text-blue-brand font-semibold text-sm mt-1 group-hover:text-blue-dark transition-colors">Get Directions →</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-0.5">Hours</h3>
                      <p className="text-gray-text">{HOURS}</p>
                      <p className="text-gray-text text-sm mt-1">Open daily during the season</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">Follow Us</h3>
                      <div className="flex gap-3">
                        <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="Instagram">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="Facebook">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-light rounded-lg flex items-center justify-center hover:bg-blue-brand hover:text-white text-gray-text transition-colors" aria-label="TikTok">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-border p-6 md:p-10">
                <h3 className="text-2xl font-extrabold text-dark mb-2">Send Us a Message</h3>
                <p className="text-gray-text text-sm mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── QUICK QUESTIONS ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Common Questions</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Group Bookings", desc: "Planning a big outing? Call us directly for special group rates on jet ski and pontoon rentals for parties of 6+.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "Weather Concerns", desc: "If weather forces a cancellation, we'll contact you to reschedule at no extra cost. Safety always comes first.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { title: "Same-Day Booking", desc: "Need a ride today? Give us a call to check availability. Walk-ins are welcome but peak times fill up fast.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm h-full">
                  <div className="w-11 h-11 bg-blue-brand/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
        <Image src={IMAGES.scenery1} alt="Assateague Bay boat rental launch point Ocean City MD" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Book?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Skip the wait — book your adventure online in just a few clicks.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
              <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
