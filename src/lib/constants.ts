/* ──────────────────────────────────────────────────────────
   ANGLER WATERSPORTS — constants
   Single source of truth for brand identity and business data.
   Business data (pricing, phone, address, images) is shared
   with the physical operation; only brand identity strings
   change vs. the OC Downtown Adventures site.
   ────────────────────────────────────────────────────────── */

export const SITE_NAME = "Angler Watersports";
export const SITE_URL = "https://anglerwatersports.com"; // TODO: swap once domain is live
export const SITE_TAGLINE = "Premium Watersports. Ocean City, MD.";

export const BOOKING_URL =
  "https://fareharbor.com/embeds/book/dorchesterstreetjetski/items/?full-items=yes";

export const PHONE = "(443) 664-6180";
export const PHONE_HREF = "tel:+14436646180";
export const EMAIL = "dorchesterstreetjetski@gmail.com";
export const ADDRESS = "307 Dorchester Street, Ocean City, MD 21842";
export const ADDRESS_URL =
  "https://www.google.com/maps/dir//307+Dorchester+St,+Ocean+City,+MD+21842";
export const HOURS = "Mon - Sun: 8:30 AM – 8:30 PM";

export const SOCIAL = {
  instagram: "https://instagram.com/ocmd.downtown.adventures",
  facebook: "https://www.facebook.com/profile.php?id=61561058191598",
  tiktok: "https://www.tiktok.com/@oc.downtown.adventures",
};

/* Stylized SVG fallback is active while the real PNG is dropped in.
   When public/angler-logo.png is saved, switch LOGO_URL to "/angler-logo.png". */
export const LOGO_URL = "/angler-logo.svg";

export const IMAGES = {
  heroJetski:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/76fc17ce-ddd7-452d-9c18-b52c7a8f4056/A7400371.jpg",
  jetski1:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/2308d58b-89cc-4390-ae58-55c3cd3365b7/DSW-9.jpg",
  jetski2:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/2bfadeab-d4c8-45fe-8e9a-5b0634d46ad0/DSW-8.jpg",
  jetski3:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/6b545d01-acf4-4914-966f-dce89e9625e8/DSW-10.jpg",
  jetski4:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/872a9ca9-7302-452f-875c-665c8b43204d/DSW-7.jpg",
  jetski5:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/05b0c769-11ce-4fd6-85c3-2b0a5beeb36d/DSW-11.jpg",
  jetski6:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/7072caad-3d26-4e06-bff0-977d54d125ae/DSW-3.jpg",
  jetski7:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/82d44d7e-30c9-4e9a-ab80-3343fa087082/DSW-5.jpg",
  jetski8:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/739819ff-f66a-41f1-8e14-5076c48cfed1/DSW-13.jpg",
  pontoon1:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/092f05ba-6866-48b1-ac98-45bd5384a674/A7400416.jpg",
  pontoon2:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/3c5f142b-949a-4f77-81b0-d15f03399311/A7400359.jpg",
  pontoon3:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/f17665ae-786a-4686-b11f-20b60347dbc0/A7400365.jpg",
  pontoon4:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/27cbfaaa-c06a-4e5d-baa7-c516b7efb5ac/A7400300.jpg",
  pontoon5:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/47d3e85b-894b-4fc8-bf72-704a2269d561/A7400228.jpg",
  pontoon6:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/4e7c5c29-e4f5-42c4-8dc0-dba2393a803e/A7400397.jpg",
  scenery1:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/d9522755-58d4-49b2-b85a-c10f94b4a3c7/9.jpg",
  scenery2:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/939aff9f-aa09-46b4-af5c-73b3e8754afd/a+good+one.jpg",
  scenery3:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/a9a00225-5c46-4568-901c-656d2f86ae28/21.jpg",
  scenery4:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/a15c1405-d2eb-4a02-a440-48f17b0b6340/16.jpg",
  scenery5:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/8d670593-231c-4199-8796-6456dd92aec7/3.jpg",
  group1:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/96e2666d-6138-41f9-bbad-9140b352554e/23.jpg",
  group2:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/28a6c630-7f63-4a8d-8255-fb56c3bedc06/17.jpg",
  group3:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/04de1df0-7323-40e6-9829-1f28b2a0241c/6.jpg",
  group4:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/812ee14e-246b-4d24-9cea-a18a24c06903/14.jpg",
  promo:
    "https://images.squarespace-cdn.com/content/v1/681e6f3f3528991fee90a1d6/a9afc508-8ae3-4629-b10a-3d3a4a36e8ab/OC+Downtown+Adventures.jpg",
};

export const HERO_VIDEO_URL = "/hero-video.mp4";
export const HERO_FALLBACK_IMAGE = "/hero-fallback.webp";

export const REVIEWS = [
  {
    name: "Rose-ann V.",
    rating: 5,
    text: "Had an exceptional time! The staff were very kind and professional. The overall quality of the experience was outstanding.",
    source: "Google",
  },
  {
    name: "Lana S.",
    rating: 5,
    text: "Amazing jet ski ride and overall experience! From the moment I walked in, the office staff were welcoming, the guides were professional, and the boats were well-maintained.",
    source: "Google",
  },
  {
    name: "Hathem M.",
    rating: 5,
    text: "Rented 6 jet skis with a group that included first-timers. Our guides Jose and Logan were incredible — professional, focused on safety, and dedicated to making the experience great.",
    source: "Google",
  },
  {
    name: "Ivan B.",
    rating: 5,
    text: "Absolutely amazing experience! The jet ski was fast, clean, and in great condition. The staff were friendly and everything was well organized.",
    source: "Google",
  },
  {
    name: "Kristen G.",
    rating: 5,
    text: "The best jet ski experience I have ever had! The atmosphere was so welcoming and the staff were genuinely invested in making sure we had a great time.",
    source: "Google",
  },
  {
    name: "Javidan A.",
    rating: 5,
    text: "Highly recommend for anyone in Ocean City wanting to hit the water. Relaxed atmosphere, friendly service, and fair pricing. Will definitely be back!",
    source: "Google",
  },
];

export const PARTNERS = [
  {
    name: "Bai-Tee Bakery",
    description:
      "A unique French and Middle Eastern-inspired bakery and cafe on the Ocean City boardwalk. Handcrafted pastries, fresh Mediterranean dishes, and specialty coffee — the perfect stop before or after your adventure.",
    url: "https://www.bai-teebakery.com",
    logo: "https://website-media.com/bai-tee-bakery-temp/bai-tee-bakery-temp-2026/2026/03/16122729/bai-tee-logo.png",
    address: "1401 Atlantic Ave, Ocean City, MD 21842",
    hours: "Thu-Sun: 7am-3pm",
  },
  {
    name: "Oyster & Scales",
    description:
      "Fine dining seafood right next door, inspired by the elegance of Nantucket and Cape Cod oyster houses. Enjoy upscale coastal cuisine with deep blues, warm gold accents, and stunning bayfront views.",
    url: "https://www.oysterandscales.com",
    logo: "https://website-media.com/oyster-and-scales-temp/oyster-and-scales-temp-2026/2026/03/16112631/Oyster-Scales-logo.png",
    address: "306 Dorchester St, Ocean City, MD 21842",
    hours: "Tue-Sun (see website for details)",
  },
];
