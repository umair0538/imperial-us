export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  images: string[];
  videos: { src: string; thumbnail: string }[];
  heroImage: string;
  type: "watch" | "sunglasses" | "belt";
  specifications: Record<string, string>;
  stock: number;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string | null;
}
