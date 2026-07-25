export interface Collection {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}

export const collections: Collection[] = [
  {
    slug: "regent-watches",
    name: "Regent Watches",
    title: "Power.\nPrestige.\nPresence.",
    subtitle: "Regent Collection",
    description:
      "Designed for gentlemen who lead with confidence.",
    heroImage: "/images/royal/green/banner.jpg",
  },
  {
    slug: "classic-watches",
    name: "Classic Watches",
    title: "Timeless.\nElegant.\nRefined.",
    subtitle: "Classic Collection",
    description:
      "Inspired by understated sophistication.",
    heroImage: "/images/classic/silver/banner.jpg",
  },
  {
    slug: "regent-sunglasses",
    name: "Regent Sunglasses",
    title: "Modern Luxury.\nTimeless Presence.",
    subtitle: "Regent Sunglasses Collection",
    description:
      "Minimal in design. Bold in character. The Regent Collection blends timeless aesthetics with modern craftsmanship, creating luxury accessories made to accompany every moment with confidence.",
    heroImage: "/images/classic/silver/banner.jpg",
  },
];