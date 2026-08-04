import { createClient } from "@/lib/supabase/server";
import type { Collection, Product } from "@/types/catalogue";

export type MediaRow = {
  kind: "image" | "video";
  path: string;
  thumbnail_path: string | null;
  position: number;
};

export type ProductRow = {
  id: string;
  slug: string;
  name: string;
  description: string;
  product_type: Product["type"];
  price_amount: number;
  hero_image: string;
  specifications: Record<string, string>;
  collection_id: string;
  product_media: MediaRow[];
};

export type CollectionRow = {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  hero_image: string | null;
};

export class CatalogueRepository {

  static async getProductBySlug(slug: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select(`
        id, 
        slug, 
        name, 
        description, 
        product_type, 
        price_amount, 
        hero_image, 
        specifications, 
        collections!inner(slug), 
        product_media(
          kind, 
          path, 
          thumbnail_path, 
          position
        )
      `)
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle();
    
    if (error) throw new Error(`Unable to load product: ${error.message}`);
    return data ? CatalogueRepository.productFromRow(data) : null;
  }

  static async getCollectionBySlug(slug: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("collections")
      .select(`
        id, 
        slug, 
        name, 
        title, 
        subtitle, 
        description, 
        hero_image
      `)
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle();
    
      if (error) throw new Error(`Unable to load collection: ${error.message}`);
      return data ? CatalogueRepository.collectionFromRow(data) : null;
  }

  static async getProductsByCollectionSlug(slug: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select(`
        id, 
        slug, 
        name, 
        description, 
        product_type, 
        price_amount, 
        hero_image, 
        specifications, 
        collections!inner(slug), 
        product_media(
          kind, 
          path, 
          thumbnail_path, 
          position
        )
      `)
      .eq("collections.slug", slug)
      .eq("is_active", true)
      .order("created_at");
      
    if (error) throw new Error(`Unable to load products: ${error.message}`);

    let products = []

    for (let i = 0; i < data.length; i++) {
      products.push(CatalogueRepository.productFromRow(data[i]))
    }

    return products;
  }

  private static productFromRow(row: any): Product {
    console.log(row);
    const media = [...row.product_media].sort((a, b) => a.position - b.position);
    return {
      id: row.id, slug: row.slug, name: row.name, collection: row.collections.slug,
      price: row.price_amount / 100, description: row.description, heroImage: row.hero_image,
      type: row.product_type, specifications: row.specifications,
      images: media.filter((item) => item.kind === "image").map((item) => item.path),
      videos: media.filter((item) => item.kind === "video").map((item) => ({ src: item.path, thumbnail: item.thumbnail_path ?? "" })),
      stock: row.stock
    };
  }

  private static collectionFromRow(row: CollectionRow): Collection {
    return { id: row.id, slug: row.slug, name: row.name, title: row.title, subtitle: row.subtitle, description: row.description, heroImage: row.hero_image };
  }
}