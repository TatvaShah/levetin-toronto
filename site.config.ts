import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Levetin Toronto",
  tagline: "Halal small-batch cinnamon rolls, brownie tubs and tiramisu.",
  category: "Halal small-batch desserts",
  schemaType: "Bakery",
  area: "Toronto and the GTA, ON",
  siteUrl: "https://levetin-toronto-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Halal desserts in the GTA",
    headline: "Cinnamon rolls, loaded brownie tubs and tiramisu",
    subhead: "Levetin Toronto makes halal, small-batch desserts for pickup in Scarborough and delivery across the GTA. Pre-order by Instagram DM. The kitchen is food handler certified, as posted on the Instagram bio.",
    images: [
      { src: "/images/post-10.jpg", alt: "A birthday box of cinnamon rolls with cream cheese frosting from Levetin Toronto", width: 1080, height: 1440 },
      { src: "/images/post-1.jpg", alt: "Kinder Nutella loaded brownie tubs from Levetin Toronto", width: 720, height: 1280 },
      { src: "/images/post-6.jpg", alt: "Classic cinnamon rolls with cream cheese frosting from Levetin Toronto", width: 1080, height: 1080 },
    ],
    secondaryCta: { label: "See the treats", href: "#gallery" },
  },

  highlights: [
    "Halal, small-batch desserts",
    "Food handler certified, as posted",
    "Pickup in Scarborough and delivery across the GTA",
    "Pre-order by Instagram DM",
  ],

  about: {
    title: "Welcome to Levetin Toronto",
    body: [
      "Levetin Toronto makes halal, small-batch desserts, including classic cinnamon rolls with cream cheese frosting, brownies, limited-edition loaded brownie tubs, and tiramisu. Pickup is available in Scarborough, and delivery is offered across the GTA, as posted.",
      "The kitchen is food handler certified, as noted on the Instagram bio. Pre-order by Instagram DM. The menu and pricing are also shared in the Instagram story highlights.",
    ],
    image: { src: "/images/post-10.jpg", alt: "A birthday box of cinnamon rolls with cream cheese frosting from Levetin Toronto", width: 1080, height: 1440 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "The limited-edition Kinder Nutella loaded brownie tubs are $35 per tub, as posted. Other pricing is shared in the Instagram story highlights. Send an Instagram message to pre-order.",
    groups: [
      {
        title: "Cinnamon rolls",
        items: [
          { name: "Classic cinnamon rolls", description: "Soft cinnamon rolls with cream cheese frosting, in boxes of 6 and 12." },
          { name: "Birthday cinnamon roll boxes", description: "Finished with a bow. Send a message to customize a box." },
        ],
      },
      {
        title: "Brownies and more",
        items: [
          { name: "Limited-edition Kinder Nutella loaded brownie tubs", description: "$35 per tub, as posted. Fudgy brownie bites with Nutella and Kinder, offered for a limited time." },
          { name: "Brownies" },
          { name: "Tiramisu" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent treats",
    items: [
      { src: "/images/post-1.jpg", width: 720, height: 1280, alt: "Kinder Nutella loaded brownie tubs from Levetin Toronto", caption: "Kinder Nutella loaded brownie tubs", href: "https://www.instagram.com/reel/Df5HyINzCxQ/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1920, alt: "A Kinder Nutella loaded brownie tub from Levetin Toronto", caption: "A loaded brownie tub", href: "https://www.instagram.com/reel/Df0MGgwqECG/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1340, alt: "A limited-edition Kinder Nutella loaded brownie tub from Levetin Toronto", caption: "Limited-edition brownie tubs", href: "https://www.instagram.com/p/Df0HOk-k3iB/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "Classic cinnamon rolls with cream cheese frosting from Levetin Toronto", caption: "Classic cinnamon rolls", href: "https://www.instagram.com/p/Dfprpf1myH_/" },
      { src: "/images/post-8.jpg", width: 720, height: 1280, alt: "A box of brownies from Levetin Toronto", caption: "Brownies", href: "https://www.instagram.com/reel/DfacbioK4Je/" },
      { src: "/images/post-10.jpg", width: 1080, height: 1440, alt: "A birthday box of cinnamon rolls with cream cheese frosting from Levetin Toronto", caption: "A birthday cinnamon roll box", href: "https://www.instagram.com/p/DfSlikeiZne/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "levetintoronto",
    embeds: ["https://www.instagram.com/p/DfSlikeiZne/", "https://www.instagram.com/reel/Df5HyINzCxQ/", "https://www.instagram.com/p/Dfprpf1myH_/"],
  },

  order: {
    label: "How to order",
    headerCtaLabel: "Pre-order",
    title: "Pre-order by Instagram DM",
    intro: "Send an Instagram message to pre-order. Pickup is available in Scarborough, and delivery is offered across the GTA. The menu and pricing are also shared in the Instagram story highlights.",
    dmMessage: "Hi Levetin Toronto! I would like to pre-order.\nItem:\nPickup or delivery:\nDate needed:",
    links: [
      { label: "Pre-order by Instagram DM", href: "https://ig.me/m/levetintoronto" },
    ],
    note: "The limited-edition Kinder Nutella loaded brownie tubs are $35 per tub, as posted.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message to pre-order. The menu and pricing are also shared in the Instagram story highlights." },
    { q: "Do you offer pickup and delivery?", a: "Pickup is available in Scarborough, and delivery is offered across the GTA, as posted." },
    { q: "Are the desserts halal?", a: "Yes. Levetin Toronto makes halal desserts, and the kitchen is food handler certified, as posted on the Instagram bio." },
    { q: "How much are the loaded brownie tubs?", a: "The limited-edition Kinder Nutella loaded brownie tubs are $35 per tub, as posted." },
  ],

  contact: {
    title: "Contact",
    area: "Pickup in Scarborough, delivery across the GTA",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/levetintoronto/" },
    ],
  },

  seo: {
    title: "Levetin Toronto | Halal cinnamon rolls and brownies in the GTA",
    description: "Halal, small-batch cinnamon rolls, brownies, loaded brownie tubs and tiramisu. Pickup in Scarborough and delivery across the GTA. Pre-order by Instagram DM.",
    keywords: ["Levetin Toronto", "halal cinnamon rolls Toronto", "brownie tubs Scarborough", "GTA desserts"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
