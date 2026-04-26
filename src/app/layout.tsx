import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { SeasonCountdown } from "@/components/SeasonCountdown";
import { StructuredData } from "@/components/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

/* Always use the public production domain for metadataBase. process.env.VERCEL_URL
   resolves to the per-deployment *.vercel.app URL, which is access-restricted in
   production — that breaks og:image fetches by social crawlers. Hardcoding SITE_URL
   ensures share previews always point at anglerwatersports.com. */
const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Jet Ski & Pontoon Boat Rentals in Ocean City, MD`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Book jet ski and pontoon boat rentals in Ocean City, Maryland. Guided jet ski tours and self-guided pontoon cruises on Assateague Bay. See wild horses, dolphins, and sunsets. Brand-new 2026 fleet, free parking downtown. From $129.",
  keywords: [
    "jet ski rental ocean city md",
    "pontoon boat rental ocean city md",
    "boat rental ocean city maryland",
    "ocean city water sports",
    "assateague bay boat tour",
    "ocean city jet ski tour",
    "pontoon cruise ocean city",
    "boat ride ocean city md",
    "Angler Watersports",
    "jet ski near me ocean city",
    "pontoon boat near me ocean city",
    "bay cruise ocean city maryland",
    "water activities ocean city md",
    "family boat rental ocean city",
  ],
  openGraph: {
    title: `${SITE_NAME} | Jet Ski & Pontoon Boat Rentals in Ocean City, MD`,
    description:
      "Book jet ski and pontoon boat adventures in Ocean City, MD. Guided tours on brand-new jet skis and self-guided pontoon cruises on Assateague Bay.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: siteUrl,
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Jet Ski & Pontoon Boat Rentals in Ocean City, MD`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Jet Ski & Pontoon Boat Rentals`,
    description:
      "Book jet ski and pontoon boat rentals in Ocean City, MD. Explore Assateague Bay.",
    images: ["/og-logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist)] antialiased bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <SeasonCountdown />
      </body>
    </html>
  );
}
