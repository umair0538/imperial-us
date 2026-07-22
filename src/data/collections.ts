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
    slug: "regent",
    name: "Regent",
    title: "Power.\nPrestige.\nPresence.",
    subtitle: "Regent Collection",
    description:
      "Designed for gentlemen who lead with confidence.",
    heroImage: "/images/royal/green/banner.jpg",
  },
  {
    slug: "classic",
    name: "Classic",
    title: "Timeless.\nElegant.\nRefined.",
    subtitle: "Classic Collection",
    description:
      "Inspired by understated sophistication.",
    heroImage: "/images/classic/silver/banner.jpg",
  },
];