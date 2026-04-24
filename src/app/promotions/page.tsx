import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, SOCIAL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Deals & Promotions | Jet Ski & Boat Rental Discounts Ocean City MD",
  description:
    "Save on jet ski and pontoon boat rentals in Ocean City, MD. Gift cards available! Current deals: Buy 3 jet ski rides, get 4th free. Group discounts, sunset specials, and early booking deals.",
  keywords: [
    "ocean city jet ski deals",
    "pontoon boat discount ocean city md",
    "Angler Watersports promotions",
    "ocean city gift card water sports",
    "jet ski group discount ocean city",
    "boat rental deals ocean city maryland",
    "cheap jet ski rental ocean city",
    "pontoon boat coupon ocean city",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/promotions",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Deals & Promotions | Jet Ski & Boat Rental Discounts Ocean City MD",
    description:
      "Save on jet ski and pontoon boat rentals in Ocean City, MD. Gift cards, group discounts, and more!",
    url: "https://anglerwatersports.com/promotions",
  },
};

/* ──────────────────────────────────────────────────────
   PROMOTIONS DATA
   To add a new promotion, just add a new object to this
   array. Each promo needs: tag, title, description,
   details (array of bullet points), cta label, cta link,
   and image. Set `featured: true` for the big hero card.
   ────────────────────────────────────────────────────── */
const PROMOTIONS = [
  {
    featured: true,
    tag: "Featured Deal",
    title: "Buy 3 Jet Ski Rides, Get the 4th FREE",
    description:
      "Bring the whole crew and save big! When you book 3 jet ski rides, the 4th ride is completely free. Perfect for group outings, family vacations, and parties.",
    details: [
      "Book 3 jet ski rentals for your group",
      "The 4th jet ski rental is on us — completely free",
      "Available on sunrise & sunset rides only",
    ],
    cta: "Book Now & Save",
    link: BOOKING_URL,
    image: IMAGES.promo,
  },
  {
    featured: false,
    tag: "Groups",
    title: "Group Discounts",
    description:
      "Planning a big outing? Contact us directly for special group rates on jet ski and pontoon rentals for parties of 6 or more. The bigger the group, the bigger the savings.",
    details: [
      "Available for parties of 6+",
      "Applies to jet skis and pontoons",
      "Call or email to get your custom quote",
    ],
    cta: "Call for Group Pricing",
    link: PHONE_HREF,
    image: IMAGES.group1,
  },
  {
    featured: false,
    tag: "Best Value",
    title: "Sunrise & Sunset Rides",
    description:
      "The most magical times on the water — and where our best deals are. Book a sunrise or sunset slot for the best experience AND the best price.",
    details: [
      "Lower rates on early & late rides",
      "Best lighting for photos",
      "Fewer crowds, more open water",
    ],
    cta: "Check Availability",
    link: BOOKING_URL,
    image: IMAGES.scenery2,
  },
  {
    featured: false,
    tag: "Tip",
    title: "Book Early & Save Your Spot",
    description:
      "The earlier you book, the better your chances of getting the exact time slot you want. Peak summer weekends sell out fast — don't wait until the last minute!",
    details: [
      "Guaranteed time slot when booked in advance",
      "Peak weekends sell out fast",
      "Free cancellation if weather is bad",
    ],
    cta: "Book Now",
    link: BOOKING_URL,
    image: IMAGES.jetski2,
  },
  /* ────────────────────────────────────────────────────
     ADD MORE PROMOTIONS HERE — just copy this template:

     {
       featured: false,
       tag: "New Deal",
       title: "Your Promo Title",
       description: "Description of the deal...",
       details: [
         "Bullet point 1",
         "Bullet point 2",
         "Bullet point 3",
       ],
       cta: "Button Text",
       link: BOOKING_URL,
       image: IMAGES.someImage,
     },
     ──────────────────────────────────────────────────── */
];

export default function PromotionsPage() {
  const featured = PROMOTIONS.find((p) => p.featured);
  const others = PROMOTIONS.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.group4} alt="Group enjoying jet ski and pontoon boat deals in Ocean City MD" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Save Big</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">Deals & Promotions</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            The best deals on jet ski and pontoon boat rentals in Ocean City.
          </p>
        </div>
      </section>

      {/* ── FEATURED DEAL ── */}
      {featured && (
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4">
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-border overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative min-h-[280px] md:min-h-[400px]">
                    <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block w-fit px-3 py-1 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">{featured.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4 tracking-tight">{featured.title}</h2>
                    <p className="text-gray-text text-base leading-relaxed mb-6">{featured.description}</p>
                    <div className="bg-blue-light rounded-xl p-4 mb-6 border border-blue-brand/10">
                      <h3 className="font-bold text-dark text-sm mb-2">How it works:</h3>
                      <ul className="space-y-2 text-sm text-gray-text">
                        {featured.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md text-center hover:scale-105 transition-all">
                      {featured.cta}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── GIFT CARDS ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-brand via-yellow-hover to-yellow-brand relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left — text & CTA */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-dark text-white text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                  Perfect Gift
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                  Give the Gift of Adventure
                </h2>
                <p className="text-dark/80 text-base md:text-lg leading-relaxed mb-6">
                  Know someone who loves the water? Angler Watersports gift cards let them choose their own adventure — jet ski rides, pontoon cruises, or any experience we offer. Pick any amount and send it instantly.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Choose any dollar amount",
                    "Delivered instantly via email",
                    "Valid for all rentals & experiences",
                    "Never expires",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-dark/90 font-medium">
                      <span className="w-6 h-6 bg-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-dark text-white font-bold text-lg rounded-lg hover:bg-blue-dark transition-all shadow-xl hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Purchase a Gift Card
                </a>
              </div>

              {/* Right — visual gift card */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Card shadow */}
                  <div className="absolute inset-4 bg-dark/20 rounded-2xl blur-xl" />
                  {/* Gift card */}
                  <div className="relative bg-gradient-to-br from-blue-dark to-blue-brand rounded-2xl p-8 text-white shadow-2xl border border-white/20 aspect-[3/2] flex flex-col justify-between">
                    {/* Top row */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Gift Card</p>
                        <p className="text-2xl font-extrabold">OC Downtown</p>
                        <p className="text-sm font-semibold text-yellow-brand">Adventures</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-brand rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                    </div>
                    {/* Bottom row */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-white/50 mb-1">Amount</p>
                        <p className="text-3xl font-extrabold">You Choose</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-white/40">Ocean City, MD</p>
                        <p className="text-[10px] uppercase tracking-wider text-white/40">Jet Skis &bull; Pontoons</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MORE DEALS ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">More Ways to Save</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((promo, i) => (
              <ScrollReveal key={promo.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-border shadow-sm overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={promo.image} alt={promo.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-yellow-brand text-dark text-[10px] font-bold uppercase tracking-widest rounded-full">{promo.tag}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-extrabold text-dark mb-2 tracking-tight">{promo.title}</h3>
                    <p className="text-gray-text text-sm leading-relaxed mb-4 flex-1">{promo.description}</p>
                    <ul className="space-y-1.5 text-sm text-gray-text mb-5">
                      {promo.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-blue-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={promo.link}
                      target={promo.link.startsWith("tel") ? undefined : "_blank"}
                      rel={promo.link.startsWith("tel") ? undefined : "noopener noreferrer"}
                      className="block w-full py-3 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors text-center text-sm"
                    >
                      {promo.cta}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOLLOW FOR FLASH DEALS ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-blue-brand rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Don&apos;t Miss Flash Deals</h2>
              <p className="text-blue-200 text-base mb-6 max-w-lg mx-auto">
                Follow us on Instagram and TikTok for last-minute deals, flash sales, and exclusive promotions that only our followers get.
              </p>
              <div className="flex justify-center gap-4">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-brand font-bold rounded-lg hover:bg-yellow-brand hover:text-dark transition-colors text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  Instagram
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-brand font-bold rounded-lg hover:bg-yellow-brand hover:text-dark transition-colors text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                  TikTok
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset boat ride on Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Don&apos;t Miss Out</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your adventure today and take advantage of our current deals.</p>
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
