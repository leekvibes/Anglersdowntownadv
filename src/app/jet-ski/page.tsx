import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, REVIEWS, HERO_VIDEO_URL, HERO_FALLBACK_IMAGE } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Jet Ski Rental Ocean City MD | Guided Tours from $129/hr | Book Online",
  description:
    "Book a 1-hour guided jet ski tour on Assateague Bay in Ocean City, Maryland. Brand-new Sea-Doo jet skis, see wild horses & dolphins, ages 5+. From $129/hr. Certified guides, life vests included, free parking downtown. Book online today!",
  keywords: [
    "jet ski rental ocean city md",
    "jet ski tour assateague bay",
    "ocean city jet ski",
    "guided jet ski ride ocean city",
    "jet ski near me ocean city",
    "waverunner rental ocean city md",
    "ocean city maryland jet ski tour",
    "jet ski rental near me",
    "water sports ocean city md",
    "jet ski ocean city bay",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/jet-ski",
  },
  openGraph: {
    title: "Jet Ski Rental in Ocean City, MD | Guided Tours from $129/hr",
    description: "1-hour guided jet ski tours on Assateague Bay. Brand-new Sea-Doo jet skis, wild horses, dolphins. Book online!",
    url: "https://anglerwatersports.com/jet-ski",
    type: "website",
    images: ["/og-logo.png"],
  },
};

const HIGHLIGHTS = [
  { value: "$129", sub: "Per Jet Ski / Hour", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "1 Hour", sub: "Guided Ride Time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "Up to 3", sub: "Riders Per Ski", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { value: "Ages 5+", sub: "All Welcome", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

const SIGHTS = [
  { title: "Wild Horses", desc: "See the famous Assateague horses grazing on the shore — a once-in-a-lifetime encounter from the water.", image: IMAGES.scenery4 },
  { title: "Dolphins", desc: "Bottlenose dolphins regularly swim alongside riders through the bay and inlet.", image: IMAGES.scenery3 },
  { title: "Open Water Freedom", desc: "Ocean City's largest riding area — wide open throttle across crystal-clear bay waters.", image: IMAGES.scenery1 },
  { title: "Golden Hour Views", desc: "Book a late ride and experience Assateague Bay painted in stunning sunset colors.", image: IMAGES.scenery2 },
];

const FEATURES = [
  { label: "Brand New Fleet", desc: "2026 jet skis inspected daily" },
  { label: "Certified Guides", desc: "Expert-led tours every ride" },
  { label: "Safety Briefing", desc: "Full orientation before launch" },
  { label: "Life Vests Included", desc: "All sizes provided free" },
  { label: "Free Parking", desc: "Right at our downtown dock" },
  { label: "No Experience Needed", desc: "First-timers welcome" },
];

const faqs = [
  { q: "How old do you have to be?", a: "Passengers must be at least 5 years old. Drivers must be at least 16 with a valid photo ID. All children must be accompanied by an adult." },
  { q: "How many people per jet ski?", a: "Up to 3 people (two adults and one child maximum). Three adults is not recommended. Weight capacity is approximately 450 lbs." },
  { q: "Do I need experience?", a: "No experience necessary! Our guides provide a full instructional review before you hit the water, and they accompany you throughout the entire ride." },
  { q: "Are life vests provided?", a: "Yes! Life vests are mandatory for all riders and are provided at no extra cost." },
  { q: "Can I bring my phone?", a: "You can, but at your own risk. We recommend a waterproof phone case or pouch. OC Yacht Shots also captures professional photos of your ride!" },
  { q: "How long is the ride?", a: "Each rental is 1 hour of ride time. A Maryland-certified guide accompanies all rentals for your safety." },
  { q: "What if the weather is bad?", a: "If we cancel due to weather, you'll receive a full refund or reschedule. Safety always comes first." },
];

const photos = [
  IMAGES.jetski1, IMAGES.jetski2, IMAGES.jetski3,
  IMAGES.jetski4, IMAGES.jetski6, IMAGES.jetski7,
  IMAGES.jetski5, IMAGES.jetski8,
];

export default function JetSkiPage() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            name: "Jet Ski Rental Ocean City MD",
            description: "1-hour guided jet ski tour on Assateague Bay in Ocean City, Maryland. Brand-new Sea-Doo jet skis with certified guide. See wild horses and dolphins. Up to 3 riders per ski, ages 5+. Life vests included, free parking.",
            url: "https://anglerwatersports.com/jet-ski",
            price: "129",
            image: IMAGES.heroJetski,
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
            { name: "Jet Ski Rentals", url: "https://anglerwatersports.com/jet-ski" },
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
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Jet Ski Rentals</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">
            High-Speed Thrills on Assateague Bay
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            1-hour guided adventures on brand-new jet skis. Wild horses, dolphins, and open water.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-yellow-brand text-dark font-bold text-base rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:scale-105">
              Book Now — From $129/hr
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
                Not Just a Rental — An Adventure
              </h2>
              <div className="text-gray-text text-base leading-relaxed space-y-4">
                <p>
                  There&apos;s nothing quite like tearing across the crystal-clear waters of Assateague Bay on a brand-new jet ski. From the moment you leave the dock, you&apos;re surrounded by the beauty of Ocean City&apos;s largest and most scenic riding area.
                </p>
                <p>
                  Your guided adventure takes you past stunning waterfront homes, through open bay waters, and along the coastline of <strong>Assateague Island</strong> — home to the famous wild horses. Keep your eyes open for <strong>dolphins</strong> playing in the wake.
                </p>
                <p>
                  Whether you&apos;re a first-timer or an experienced rider, our expert guides ensure you have an incredible, safe experience every single time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={IMAGES.heroJetski} alt="Guided jet ski tour on Assateague Bay in Ocean City Maryland" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL SEE ── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">Along the Route</h2>
            <p className="text-gray-text text-lg mt-2">Every ride is packed with unforgettable sights.</p>
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

      {/* ── PRICING & FEATURES ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Pricing card */}
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-border text-center sticky top-24">
                <span className="inline-block px-3 py-1 bg-yellow-brand/20 text-dark text-xs font-bold uppercase rounded-full mb-3">Jet Ski Rental</span>
                <div className="text-5xl font-extrabold text-blue-brand mb-1">$129</div>
                <p className="text-gray-text text-sm mb-6">per jet ski / hour + tax</p>
                <div className="space-y-3 text-left text-sm text-gray-text mb-8">
                  {["1-hour guided ride", "Up to 3 riders per ski", "Brand new equipment", "Life vests included", "Ages 5+ welcome", "Certified guide on every ride"].map((line) => (
                    <div key={line} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {line}
                    </div>
                  ))}
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-md mb-3">
                  Book Now
                </a>
                <a href={PHONE_HREF} className="block w-full py-3 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">
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
                      {["Sunscreen", "Towel", "Sunglasses (at own risk)", "Water bottle", "Waterproof phone case"].map((item) => (
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
                      {["Driver: 16+ with photo ID", "Passengers: ages 5+", "Max weight: 450 lbs/ski", "No alcohol before riding", "Arrive 15 min early"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">What Riders Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r, i) => (
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
            <h2 className="text-3xl font-extrabold text-dark tracking-tight">Jet Ski Gallery</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                <Image src={src} alt={`Jet ski rental adventure on Assateague Bay Ocean City MD ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
            Want a more relaxed experience? Check out our <Link href="/pontoon" className="text-blue-brand font-semibold hover:underline">self-guided pontoon boat rentals</Link> for up to 10 guests.
            View our <Link href="/promotions" className="text-blue-brand font-semibold hover:underline">current deals — buy 3, get 4th free</Link>,
            or browse our <Link href="/gallery" className="text-blue-brand font-semibold hover:underline">adventure photo gallery</Link>.
            Have questions? Visit our <Link href="/faq" className="text-blue-brand font-semibold hover:underline">FAQ page</Link> or <Link href="/contact" className="text-blue-brand font-semibold hover:underline">contact us</Link>.
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Sunset over Assateague Bay Ocean City Maryland" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Ride?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your jet ski adventure and experience the thrill of Assateague Bay.</p>
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
