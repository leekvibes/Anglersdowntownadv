import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Jet Ski & Pontoon Boat Adventures | Ocean City MD",
  description:
    "Browse real photos from jet ski and pontoon boat adventures in Ocean City, MD. See what a day on Assateague Bay looks like — jet skis, pontoon cruises, wild horses, dolphins, and sunsets.",
  keywords: [
    "jet ski photos ocean city md",
    "pontoon boat photos ocean city",
    "ocean city water sports gallery",
    "assateague bay photos",
    "ocean city maryland adventure photos",
    "boat rental pictures ocean city",
  ],
  alternates: {
    canonical: "https://anglerwatersports.com/gallery",
  },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Photo Gallery | Jet Ski & Pontoon Adventures | Ocean City MD",
    description:
      "Browse real photos from jet ski and pontoon boat adventures in Ocean City, MD on Assateague Bay.",
    url: "https://anglerwatersports.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
