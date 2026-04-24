import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, REVIEWS, HERO_VIDEO_URL, HERO_FALLBACK_IMAGE } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Pontoon Boat Rental Ocean City MD | Bay Cruises from $329 | Book Online",
  description:
    "Rent a pontoon boat in Ocean City, Maryland — self-guided 2-8 hour cruises on Assateague Bay. See wild horses, anchor at sandbars, bring your own food & drinks. Up to 10 guests, no experience needed. Brand-new boats, free parking downtown. Book online today!",
  keywords: [
    "pontoon boat rental ocean city md",
    "boat rental ocean city maryland",
    "pontoon cruise ocean city",
    "bay cruise ocean city md",
    "boat ride ocean city",
    "rent a boat ocean city md",
    "self guided boat rental ocean city",
    "assateague bay boat tour",
    "ocean city pontoon boat",
    "boat rental near me ocean city",
    "pontoon boat cruise maryland",
    "family boat rental ocean city md",
    "party boat rental ocean city",
    "sunset cruise ocean city md",
    "fishing boat rental ocean city",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/pontoon",
  },
  openGraph: {
    title: "Pontoon Boat Rental in Ocean City, MD | From $329",
    description: "Self-guided pontoon cruises on Assateague Bay. See wild horses, swim at sandbars, bring your crew. Up to 10 guests. Book online!",
    url: "https://anglerwatersports.com/pontoon",
    type: "website",
    images: ["/og-logo.png"],
  },
};

const HIGHLIGHTS = [
  { value: "From $329", sub: "Starting Price", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "2–8 Hours", sub: "Flexible Duration", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "Up to 10", sub: "Guests Per Boat", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { value: "Self-Guided", sub: "You're the Captain", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
];

const SIGHTS = [
  { title: "Wild Horses", desc: "Anchor your pontoon boat near Assateague Island and watch the famous wild horses graze feet from the water.", image: IMAGES.scenery4 },
  { title: "Hidden Sandbars", desc: "Drop anchor at secluded sandbars for swimming, wading, and sunbathing during your boat rental.", image: IMAGES.scenery1 },
  { title: "Dolphins & Wildlife", desc: "Bottlenose dolphins, ospreys, and blue herons are regulars on the bay — keep your camera ready.", image: IMAGES.scenery3 },
  { title: "Sunset Cruises", desc: "Book a late departure for a sunset pontoon cruise and watch the sky light up over Assateague Bay.", image: IMAGES.scenery2 },
];

const PRICING = [
  { hours: "2 Hours", price: "$329", popular: false },
  { hours: "3 Hours", price: "$419", popular: false },
  { hours: "4 Hours", price: "$479", popular: true },
  { hours: "5 Hours", price: "$529", popular: false },
  { hours: "6 Hours", price: "$659", popular: false },
  { hours: "8 Hours", price: "$859", popular: false },
];

const FEATURES = [
  { label: "Canopy & Shade", desc: "Stay cool with built-in boat canopy" },
  { label: "Bluetooth Ready", desc: "Bring a speaker — play your music" },
  { label: "BYOB Friendly", desc: "Bring your own cooler, food & drinks" },
  { label: "Life Vests Included", desc: "All sizes provided for every guest" },
  { label: "Free Parking", desc: "Right at our downtown dock location" },
  { label: "No Experience Needed", desc: "Full orientation before departure" },
];

const OCCASIONS = [
  { icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546V12a9 9 0 0118 0v3.546z", title: "Birthday Parties", desc: "Celebrate on the water with up to 10 guests" },
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Bachelor/ette Parties", desc: "The ultimate pre-wedding water adventure" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Family Reunions", desc: "Quality time on the bay with the whole crew" },
  { icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", title: "Sunset Photo Cruises", desc: "Golden hour views you can't get from shore" },
];

const faqs = [
  { q: "How old do you have to be to drive?", a: "The driver must be at least 21 years old with a valid driver's license. No prior boating experience is needed — we'll give you a full orientation before you depart." },
  { q: "How many people can fit?", a: "Up to 10 people per pontoon boat. All ages are welcome, including kids!" },
  { q: "Is it self-guided?", a: "Yes! Unlike our jet skis, pontoon boats are self-guided excursions. You're the captain — go where you want within the bay area." },
  { q: "Can we bring alcohol?", a: "Yes, alcohol is permitted on pontoon boats. However, the driver must remain completely sober — no drinking and driving on the water." },
  { q: "Are life vests required?", a: "Life vests are available but not required for adults. Children must wear life vests and stay with adults at all times." },
  { q: "Where can we go?", a: "You can explore all of Assateague Bay — cruise past wild horses on Assateague Island, anchor at sandbars, or just relax on the open water. Bay only — ocean access is not permitted for safety." },
  { q: "What if the weather is bad?", a: "If we cancel due to weather, you'll receive a full refund or the option to reschedule. Safety always comes first." },
  { q: "Can we fish from the pontoon?", a: "Absolutely! You're welcome to bring fishing gear and drop a line. Maryland fishing regulations apply — make sure you have a valid fishing license." },
];

const photos = [
  IMAGES.pontoon1, IMAGES.pontoon2, IMAGES.pontoon3,
  IMAGES.pontoon4, IMAGES.pontoon5, IMAGES.pontoon6,
  IMAGES.scenery1, IMAGES.scenery2,
];

/* Gallery photos with SEO-rich alt text */
const GALLERY_ALTS = [
  "Pontoon boat rental cruising Assateague Bay in Ocean City MD",
  "Group of friends on a pontoon boat rental in Ocean City Maryland",
  "Pontoon boat anchored near Assateague Island wild horses Ocean City",
  "Family pontoon boat cruise at sunset on Assateague Bay",
  "Self-guided pontoon boat adventure on the bay Ocean City MD",
  "Pontoon boat rental with canopy on Assateague Bay Maryland",
  "Scenic view of Assateague Bay from a pontoon boat rental",
  "Sunset pontoon cruise on the bay in Ocean City Maryland",
];

export default function PontoonPage() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            name: "Pontoon Boat Rental Ocean City MD",
            description: "Self-guided pontoon boat rental on Assateague Bay in Ocean City, Maryland. 2-8 hour cruises for up to 10 guests. See wild horses on Assateague Island, anchor at sandbars, BYOB friendly. Brand new boats, free parking downtown.",
            url: "https://anglerwatersports.com/pontoon",
            price: "329",
            image: IMAGES.pontoon1,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://anglerwatersports.com" },
            { name: "Pontoon Boat Rentals", url: "https://anglerwatersports.com/pontoon" },
          ])),
        }}
      />

      {/* ── VIDEO HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[700px] flex items-end justify-center overflow-hidden">
        <video autoPlay muted loop playsInline poster={HERO_FALLBACK_IMAGE} className="absolute inset-0 w-full h-full object-cover">
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-12 md:pb-16 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Pontoon Boat Rentals</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">
            Your Day on the Bay, Your Way
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Self-guided pontoon cruises for up to 10 guests. Wild horses, sandbars, sunsets — all on your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-yellow-brand text-dark font-bold text-base rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:scale-105">
              Book Now — From $329
            </a>
            <a href={PHONE_HREF} className="px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-bold text-base rounded-lg border-2 border-white/30 hover:bg-white/25 transition-all">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── STAT PILLS ── */}
      <section className="bg-white py-8 md:py-10 border-b border-gray-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.value} className="flex items-center gap-3 bg-gray-light rounded-xl p-4">
                <div className="w-11 h-11 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-dark leading-tight">{h.value}</p>
                  <p className="text-xs text-gray-text">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE EXPERIENCE ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block px-3 py-1 bg-blue-light text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-4">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-5 tracking-tight">
                Be Your Own Captain
              </h2>
              <div className="text-gray-text text-base leading-relaxed space-y-4">
                <p>
                  Imagine cruising through the calm waters of Assateague Bay with your closest friends and family, the sun on your face, and nothing but open water ahead. Our pontoon boats give you the freedom to explore Ocean City from a completely different perspective.
                </p>
                <p>
                  Anchor along the shores of <strong>Assateague Island</strong> and watch the famous wild horses graze just feet from the water. Pull up to a sandbar and swim. Drop a fishing line over the side. Or simply cruise the bay with music playing and drinks in hand — it&apos;s your adventure, your way.
                </p>
                <p>
                  With up to 10 people on board, pontoon rentals are perfect for family reunions, birthday celebrations, bachelor/bachelorette parties, or just a relaxing day on the water.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={IMAGES.pontoon1} alt="Pontoon boat rental cruising through Assateague Bay in Ocean City Maryland" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SUGGESTED ITINERARY ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-blue-brand/10 text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-3">Sample Route</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Suggested 4-Hour Itinerary</h2>
            <p className="text-gray-text text-base mt-2">Every trip is different — this is just one way to enjoy the bay.</p>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-brand/20 hidden md:block" />
            <div className="space-y-6">
              {[
                { time: "0:00", step: "Depart from 307 Dorchester St", desc: "Quick orientation, then cruise south through the bay." },
                { time: "0:30", step: "Cruise past waterfront landmarks", desc: "Stunning homes, local marinas, and open bay waters." },
                { time: "1:00", step: "Anchor near Assateague Island", desc: "Watch wild horses roaming the shoreline up close." },
                { time: "2:00", step: "Swim, relax, or explore sandbars", desc: "Jump in the water, wade on sandbars, or just soak up the sun." },
                { time: "3:00", step: "Cruise back through the bay", desc: "Take the scenic route back as the afternoon light hits the water." },
                { time: "4:00", step: "Return to the dock", desc: "Arrive back at Dorchester Street with memories that last forever." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative z-10 w-10 h-10 bg-blue-brand text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-border shadow-sm flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-blue-brand bg-blue-light px-2 py-0.5 rounded">{item.time}</span>
                        <h3 className="font-bold text-dark">{item.step}</h3>
                      </div>
                      <p className="text-gray-text text-sm">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL SEE ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">What You&apos;ll See</h2>
            <p className="text-gray-text text-lg mt-2">The bay is full of surprises — here&apos;s what to expect.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SIGHTS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="group relative h-72 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-extrabold text-white mb-1 drop-shadow-md">{s.title}</h3>
                    <p className="text-white/90 text-xs leading-relaxed drop-shadow-sm">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFECT FOR ── */}
      <section className="py-16 md:py-20 bg-blue-light">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Perfect For Any Occasion</h2>
            <p className="text-gray-text text-base mt-2">Our pontoon boats are the go-to for groups celebrating on the water.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OCCASIONS.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm text-center h-full">
                  <div className="w-12 h-12 bg-blue-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={o.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark mb-1">{o.title}</h3>
                  <p className="text-gray-text text-sm">{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING & FEATURES ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Pricing card */}
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-border sticky top-24">
                <span className="inline-block px-3 py-1 bg-yellow-brand/20 text-dark text-xs font-bold uppercase rounded-full mb-4">Pontoon Rental</span>
                <h3 className="text-xl font-extrabold text-dark mb-4">Choose Your Duration</h3>
                <div className="space-y-2 mb-6">
                  {PRICING.map((p) => (
                    <div key={p.hours} className={`flex items-center justify-between p-3 rounded-lg border ${p.popular ? "border-blue-brand bg-blue-light" : "border-gray-border"}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-dark text-sm">{p.hours}</span>
                        {p.popular && <span className="text-[10px] font-bold uppercase bg-blue-brand text-white px-1.5 py-0.5 rounded">Popular</span>}
                      </div>
                      <span className="text-lg font-extrabold text-blue-brand">{p.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-text mb-5 text-center">+ tax · Up to 10 guests per boat</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-md mb-3 text-center">
                  Book Now
                </a>
                <a href={PHONE_HREF} className="block w-full py-3 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors text-center">
                  Call to Book
                </a>
              </div>
            </ScrollReveal>

            {/* Features grid */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-3xl font-extrabold text-dark mb-6 tracking-tight">What&apos;s Included</h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {FEATURES.map((f, i) => (
                  <ScrollReveal key={f.label} delay={i * 80}>
                    <div className="bg-gray-light rounded-xl p-5 border border-gray-border">
                      <h3 className="font-bold text-dark mb-1">{f.label}</h3>
                      <p className="text-gray-text text-sm">{f.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <h3 className="text-xl font-bold text-dark mb-4">Good to Know</h3>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                <ScrollReveal delay={50}>
                  <div>
                    <h4 className="font-bold text-dark text-sm mb-2 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      What to Bring
                    </h4>
                    <ul className="space-y-1.5 text-gray-text text-sm">
                      {["Sunscreen & sunglasses", "Cooler with drinks & snacks", "Towel and swimwear", "Bluetooth speaker", "Fishing gear (optional)", "Camera for the horses!"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-yellow-brand rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div>
                    <h4 className="font-bold text-dark text-sm mb-2 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Requirements
                    </h4>
                    <ul className="space-y-1.5 text-gray-text text-sm">
                      {["Driver: 21+ with valid license", "All ages welcome as guests", "Bay access only — no ocean", "Driver must stay sober", "Arrive 15 min before departure"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-brand rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-border mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="font-bold text-dark text-sm">5.0 on Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">What Guests Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.slice(3, 6).map((r, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm h-full">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-gray-text text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="font-bold text-dark text-sm">{r.name} <span className="font-normal text-gray-text">· {r.source}</span></p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-dark mb-8 tracking-tight">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-light rounded-xl border border-gray-border group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-blue-brand transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-text group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-text leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Pontoon Gallery</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                <Image src={src} alt={GALLERY_ALTS[i] || `Pontoon boat rental adventure on Assateague Bay Ocean City MD ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-brand font-semibold hover:text-blue-dark transition-colors">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ALSO EXPLORE ── */}
      <section className="py-12 bg-white border-t border-gray-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-text text-sm">
            Looking for something faster? Check out our <Link href="/jet-ski" className="text-blue-brand font-semibold hover:underline">guided jet ski tours</Link> on Assateague Bay.
            View our <Link href="/promotions" className="text-blue-brand font-semibold hover:underline">current deals and promotions</Link>,
            or see what others are saying in our <Link href="/gallery" className="text-blue-brand font-semibold hover:underline">adventure photo gallery</Link>.
            Have questions? Visit our <Link href="/faq" className="text-blue-brand font-semibold hover:underline">FAQ page</Link> or <Link href="/contact" className="text-blue-brand font-semibold hover:underline">contact us</Link> directly.
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset pontoon cruise on Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Cruise?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your pontoon boat and explore Assateague Bay on your own terms.</p>
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
