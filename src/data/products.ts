export interface Product {
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
  specifications: {
    movement: string;
    case: string;
    glass: string;
    waterResistance: string;
    warranty: string;
  };
}

export const products: Product[] = [
  {
    slug: "regent-emerald",
    name: "Regent Emerald",
    collection: "regent",
    price: 9999,
    description:
      "A striking emerald dial crafted for gentlemen who appreciate bold elegance and timeless design.",
    images: [
      "/images/royal/green/front.png",
      "/images/royal/green/angle.png",
      "/images/royal/green/side.png",
      "/images/royal/green/back.png",
      "/images/royal/green/clasp.png",
      "/images/royal/green/on-hand.png",
    ],
    thumbnail: "/images/royal/green/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },

  {
    slug: "regent-blue",
    name: "Regent Blue",
    collection: "regent",
    price: 9999,
    description:
      "Deep blue tones inspired by timeless sophistication.",
    images: [
      "/images/royal/blue/front.png",
      "/images/royal/blue/angle.png",
      "/images/royal/blue/side.png",
      "/images/royal/blue/back.png",
      "/images/royal/blue/clasp.png",
      "/images/royal/blue/on-hand.png",
    ],
    thumbnail: "/images/royal/blue/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },

  {
    slug: "regent-black",
    name: "Regent Black",
    collection: "regent",
    price: 9999,
    description:
      "Confident. Minimal. Commanding.",
    images: [
      "/images/royal/black/front.png",
      "/images/royal/black/angle.png",
      "/images/royal/black/side.png",
      "/images/royal/black/back.png",
      "/images/royal/black/clasp.png",
      "/images/royal/black/on-hand.png",
    ],
    thumbnail: "/images/royal/black/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },
  {
    slug: "classic-silver",
    name: "Classic Silver",
    collection: "classic",
    price: 9999,
    description:
      "Timeless design meets modern craftsmanship in a watch built for every occasion.",
    images: [
      "/images/classic/silver/front.png",
      "/images/classic/silver/angle.png",
      "/images/classic/silver/side.png",
      "/images/classic/silver/back.png",
      "/images/classic/silver/clasp.png",
      "/images/classic/silver/on-hand.png",
    ],
    thumbnail: "/images/classic/silver/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },

  {
    slug: "classic-black",
    name: "Classic Black",
    collection: "classic",
    price: 9999,
    description:
      "A sleek black timepiece designed for understated confidence and everyday sophistication.",
    images: [
      "/images/classic/black/front.png",
      "/images/classic/black/angle.png",
      "/images/classic/black/side.png",
      "/images/classic/black/back.png",
      "/images/classic/black/clasp.png",
      "/images/classic/black/on-hand.png",
    ],
    thumbnail: "/images/classic/black/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },

  {
    slug: "classic-green",
    name: "Classic Green",
    collection: "classic",
    price: 9999,
    description:
      "A refined green timepiece crafted for timeless elegance and everyday sophistication.",
    images: [
      "/images/classic/green/front.png",
      "/images/classic/green/angle.png",
      "/images/classic/green/side.png",
      "/images/classic/green/back.png",
      "/images/classic/green/clasp.png",
      "/images/classic/green/on-hand.png",
    ],
    thumbnail: "/images/classic/green/front.png",
    specifications: {
      movement: "Japanese Quartz",
      case: "316L Stainless Steel",
      glass: "Sapphire Coated Mineral Glass",
      waterResistance: "3 ATM",
      warranty: "1 Year",
    },
  },
];