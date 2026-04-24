import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

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
  alternates: {
    canonical: "https://anglerwatersports.com/oc-yacht-shots",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "OC Yacht Shots | Professional Adventure Photos | Ocean City MD",
    description:
      "Professional photos of your jet ski and pontoon boat adventure in Ocean City, MD. Capture the action!",
    url: "https://anglerwatersports.com/oc-yacht-shots",
  },
};

export default function OcYachtShotsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Professional adventure photography for jet ski and boat rentals Ocean City MD" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Add-On</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">OC Yacht Shots</h1>
          <p className="text-lg md:text-xl text-white/90">Professional Photos of Your Adventure</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 text-center">Capture the Moment</h2>
          <p className="text-gray-text text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Don&apos;t let your best moments disappear with the waves. Our professional photographers capture your adventure on the water so you can relive it forever. High-quality, action-packed photos of your jet ski ride or pontoon cruise — available to purchase and download.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Ride & Smile", desc: "Enjoy your adventure while our photographers capture the action from the water." },
              { step: "2", title: "Find Your Photos", desc: "After your ride, visit the OC Yacht Shots website to browse your images." },
              { step: "3", title: "Download & Share", desc: "Purchase your favorites for print or digital download. Share with friends and family!" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-blue-brand text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-lg">{item.step}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.ocyachtshots.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-brand text-white font-bold text-lg rounded-lg hover:bg-blue-dark transition-colors shadow-md inline-flex items-center gap-2"
            >
              Find Your Photos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Sample photos */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">Sample Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: IMAGES.jetski1, alt: "Jet ski riders captured by OC Yacht Shots on Assateague Bay" },
              { src: IMAGES.group1, alt: "Group jet ski tour photo Ocean City Maryland" },
              { src: IMAGES.pontoon2, alt: "Pontoon boat cruise photography Ocean City MD" },
              { src: IMAGES.jetski3, alt: "Action shot of jet ski rental on the bay" },
              { src: IMAGES.scenery3, alt: "Scenic Assateague Bay view from boat rental" },
              { src: IMAGES.pontoon4, alt: "Pontoon boat adventure photo at sunset Ocean City" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Book Your Adventure First</h2>
          <p className="text-blue-200 text-lg mb-8">The best photos start with the best experiences. Book your ride today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Your Ride</a>
            <a href="https://www.ocyachtshots.com/home" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">Find Your Photos</a>
          </div>
        </div>
      </section>
    </>
  );
}
