interface Video {
  src: string;
  thumbnail: string;
}

export interface Product {
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  images: string[];
  videos: Video[];
  thumbnail: string;
  type: string;
  specifications: {
    style: string;
    gender: string;
    movement: string;
    bandLength: string;
    bandWidth: string;
    dialDiameter: string;
    claspType: string;
    case: string;
    glass: string;
    waterResistance: string;
    warranty: string;
    color: string;
    frame: string;
    lenses: string;
    shape: string;
    feature: string;
    weight: string;
    material: string;
    feature1: string;
    feature2: string;
    buckleType: string;
    length: string;
    width: string;
  };
}

export const products: Product[] = [
  {
    slug: "regent-emerald",
    name: "Emerald Regent Watch",
    collection: "regent-watches",
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
    videos:[],
    thumbnail: "/images/royal/green/front.png",
    type: "watch",
    specifications: {
      style: "Sports",
      gender: "Men",
      movement: "Quartz",
      bandLength: "22cm",
      bandWidth: "20-29mm",
      dialDiameter: "41mm",
      claspType: "Folding buckle",
      case: "Stainless Steel",
      glass: "Acrylic Glass",
      waterResistance: "10 ATM",
      warranty: "1 Year",
      color: "Emerald",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Acrylic Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "regent-blue",
    name: "Blue Regent Watch",
    collection: "regent-watches",
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
    videos:[],
    thumbnail: "/images/royal/blue/front.png",
    type: "watch",
    specifications: {
      style: "Sports",
      gender: "Men",
      movement: "Quartz",
      bandLength: "22cm",
      bandWidth: "20-29mm",
      dialDiameter: "41mm",
      claspType: "Folding buckle",
      case: "Stainless Steel",
      glass: "Acrylic Glass",
      waterResistance: "10 ATM",
      warranty: "1 Year",
      color: "Blue",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Acrylic Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "regent-black",
    name: "Black Regent Watch",
    collection: "regent-watches",
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
    videos:[],
    thumbnail: "/images/royal/black/front.png",
    type: "watch",
    specifications: {
      style: "Sports",
      gender: "Men",
      movement: "Quartz",
      bandLength: "22cm",
      bandWidth: "20-29mm",
      dialDiameter: "41mm",
      claspType: "Folding buckle",
      case: "Stainless Steel",
      glass: "Acrylic Glass",
      waterResistance: "10 ATM",
      warranty: "1 Year",
      color: "Black",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Acrylic Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },
  {
    slug: "classic-silver",
    name: "Silver Classic Watch",
    collection: "classic-watches",
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
    videos:[],
    thumbnail: "/images/classic/silver/front.png",
    type: "watch",
    specifications: {
      style: "Formal",
      gender: "Men",
      movement: "Quartz",
      bandLength: "20cm",
      dialDiameter: "46mm",
      claspType: "Pin buckle",
      case: "Stainless Steel",
      glass: "Mineral Glass",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      color: "Silver",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Mineral Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "classic-black",
    name: "Black Classic Watch",
    collection: "classic-watches",
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
    videos:[],
    thumbnail: "/images/classic/black/front.png",
    type: "watch",
    specifications: {
      style: "Formal",
      gender: "Men",
      movement: "Quartz",
      bandLength: "20cm",
      dialDiameter: "46mm",
      claspType: "Pin buckle",
      case: "Stainless Steel",
      glass: "Mineral Glass",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      color: "Black",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Mineral Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "classic-green",
    name: "Green Classic Watch",
    collection: "classic-watches",
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
    videos:[],
    thumbnail: "/images/classic/green/front.png",
    type: "watch",
    specifications: {
      style: "Formal",
      gender: "Men",
      movement: "Quartz",
      bandLength: "20cm",
      dialDiameter: "46mm",
      claspType: "Pin buckle",
      case: "Stainless Steel",
      glass: "Mineral Glass",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      color: "Green",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "150g",
      material: "Stainless Steel",
      feature1: "Reliable Quartz Movement",
      feature2: "Mineral Glass",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "regent-sunglasses-golden",
    name: "Golden Regent Sunglasses",
    collection: "regent-sunglasses",
    price: 2999,
    description:
      "The Regent Golden combines a sleek black frame with refined gold detailing to create a confident, timeless look. "
      + "Designed for those who appreciate understated luxury, it delivers premium comfort, UV400 protection, and "
      + "effortless versatility from business meetings to weekend escapes.",
    images: [
      "/images/regent-sunglasses/golden/front.png",
      "/images/regent-sunglasses/golden/angle.png",
      "/images/regent-sunglasses/golden/back.png",
      "/images/regent-sunglasses/golden/on-face.png",
    ],
    videos: [
      {
        src: "/videos/regent-sunglasses/golden/showcase.mp4",
        thumbnail: "/images/regent-sunglasses/golden/angle.png",
      }
    ],
    thumbnail: "/images/regent-sunglasses/golden/front.png",
    type: "sunglasses",
    specifications: {
      style: "Casual",
      color: "Golden",
      gender: "Men",
      frame: "Full rim",
      lenses: "UV400",
      shape: "Square",
      feature: "Anti-Radiation",
      weight: "65g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Metal",
      feature1: "UV400 Protection",
      feature2: "Anti-Radiation",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "regent-sunglasses-silver",
    name: "Silver Regent Sunglasses",
    collection: "regent-sunglasses",
    price: 2999,
    description:
      "The Regent Silver pairs a classic black frame with polished silver accents for a clean, contemporary aesthetic. "
      + "Its balanced design complements both formal and casual styles, offering premium craftsmanship, all-day comfort, "
      + "and UV400 protection for every occasion.",
    images: [
      "/images/regent-sunglasses/silver/front.png",
      "/images/regent-sunglasses/silver/angle.png",
      "/images/regent-sunglasses/silver/back.png",
      "/images/regent-sunglasses/silver/on-face.png",
    ],
    videos: [
      {
        src: "/videos/regent-sunglasses/silver/showcase.mp4",
        thumbnail: "/images/regent-sunglasses/silver/angle.png",
      }
    ],
    thumbnail: "/images/regent-sunglasses/silver/front.png",
    type: "sunglasses",
    specifications: {
      style: "Casual",
      color: "Silver",
      gender: "Men",
      frame: "Full rim",
      lenses: "UV400",
      shape: "Square",
      feature: "Anti-Radiation",
      weight: "65g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Metal",
      feature1: "UV400 Protection",
      feature2: "Anti-Radiation",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "regent-sunglasses-brown",
    name: "Brown Regent Sunglasses",
    collection: "regent-sunglasses",
    price: 2999,
    description:
      "The Regent Brown features rich bronze-inspired finishes and gradient brown lenses that bring warmth and sophistication "
      + "to every look. Crafted for versatility and everyday comfort, it combines premium materials with UV400 protection to "
      + "create eyewear that feels as refined as it looks.",
    images: [
      "/images/regent-sunglasses/brown/front.png",
      "/images/regent-sunglasses/brown/angle.png",
      "/images/regent-sunglasses/brown/back.png",
      "/images/regent-sunglasses/brown/on-face.png",
    ],
    videos: [
      {
        src: "/videos/regent-sunglasses/brown/showcase.mp4",
        thumbnail: "/images/regent-sunglasses/brown/angle.png",
      }
    ],
    thumbnail: "/images/regent-sunglasses/brown/front.png",
    type: "sunglasses",
    specifications: {
      style: "Casual",
      color: "Brown",
      gender: "Men",
      frame: "Full rim",
      lenses: "UV400",
      shape: "Square",
      feature: "Anti-Radiation",
      weight: "65g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Metal",
      feature1: "UV400 Protection",
      feature2: "Anti-Radiation",
      buckleType: "",
      length: "",
      width: ""
    },
  },

  {
    slug: "statesman-belt-black",
    name: "Black Statesman Belt",
    collection: "statesman-belts",
    price: 4999,
    description:
      "The Statesman Black is the definition of timeless versatility. Crafted from premium leather with a sleek automatic buckle, "
      + "it delivers clean lines and understated sophistication for both business and formal occasions. Designed for everyday "
      + "comfort and lasting durability, it's the finishing touch to a confident, refined wardrobe.",
    images: [
      "/images/statesman/black/front.png",
      "/images/statesman/black/horizontal.png",
      "/images/statesman/black/on-waist.png",
    ],
    videos:[],
    thumbnail: "/images/statesman/black/front.png",
    type: "belt",
    specifications: {
      style: "Formal",
      color: "Black",
      gender: "Men",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "300g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Cow Hide",
      feature1: "Cow Hide Leather",
      feature2: "Auto Lock Buckle",
      buckleType: "Auto Lock Buckle",
      length: "110-130cm",
      width: "3.4cm"
    },
  },

  {
    slug: "statesman-belt-dark-brown",
    name: "Brown Statesman Belt",
    collection: "statesman-belts",
    price: 4999,
    description:
      "The Statesman Dark Brown pairs rich espresso leather with a refined automatic buckle, offering a warm, distinguished "
      + "look that transitions effortlessly from the office to evening wear. Crafted from premium materials for lasting "
      + "comfort and durability, it's a timeless accessory designed to elevate every outfit.",
    images: [
      "/images/statesman/dark-brown/front.png",
      "/images/statesman/dark-brown/horizontal.png",
      "/images/statesman/dark-brown/on-waist.png",
    ],
    videos:[],
    thumbnail: "/images/statesman/dark-brown/front.png",
    type: "belt",
    specifications: {
      style: "Formal",
      color: "Dark Brown",
      gender: "Men",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "300g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Cow Hide",
      feature1: "Cow Hide Leather",
      feature2: "Auto Lock Buckle",
      buckleType: "Auto Lock Buckle",
      length: "110-130cm",
      width: "3.4cm"
    },
  },

  {
    slug: "statesman-belt-light-brown",
    name: "Light Brown Statesman Belt",
    collection: "statesman-belts",
    price: 4999,
    description:
      "The Statesman Light Brown showcases warm cognac-inspired leather that brings effortless sophistication to smart-casual "
      + "and business attire alike. Crafted from premium materials with a sleek automatic buckle, it combines everyday comfort, "
      + "enduring quality, and timeless style for the modern gentleman.",
    images: [
      "/images/statesman/light-brown/front.png",
      "/images/statesman/light-brown/horizontal.png",
      "/images/statesman/light-brown/on-waist.png",
    ],
    videos:[],
    thumbnail: "/images/statesman/light-brown/front.png",
    type: "belt",
    specifications: {
      style: "Formal",
      color: "Light Brown",
      gender: "Men",
      frame: "",
      lenses: "",
      shape: "",
      feature: "",
      weight: "300g",
      movement: "",
      bandLength: "",
      dialDiameter: "",
      claspType: "",
      case: "",
      glass: "",
      warranty: "1 Year",
      bandWidth: "",
      waterResistance: "",
      material: "Cow Hide",
      feature1: "Cow Hide Leather",
      feature2: "Auto Lock Buckle",
      buckleType: "Auto Lock Buckle",
      length: "110-130cm",
      width: "3.4cm"
    },
  },
];