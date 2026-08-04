import "server-only";
import { createClient } from "@/lib/supabase/server";
import type { Collection, Product } from "@/types/catalogue";
import {CatalogueRepository} from "@/lib/repositories/catalogue.repository"

const productSelect = "id, slug, name, description, product_type, price_amount, hero_image, specifications, collections!inner(slug), product_media(kind, path, thumbnail_path, position)";

export class CatalogueService {

  static async getProductBySlug(slug: string) {
    return await CatalogueRepository.getProductBySlug(slug);
  }

  static async getCollectionBySlug(slug: string) {
    return await CatalogueRepository.getCollectionBySlug(slug);
  }

  static async getProductsByCollectionSlug(slug: string) {
    return await CatalogueRepository.getProductsByCollectionSlug(slug);
  }

  static async getRelatedProducts(product: Product) {
    let related = await CatalogueRepository.getProductsByCollectionSlug(product.collection);

    return related.filter((item) => item.id !== product.id)
      .slice(0, 3)
  }
}
