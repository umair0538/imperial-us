import { createClient } from "@/lib/supabase/server";

export class WarrantyRepository {

  static async createWarranty(
    orderId: string,
    orderItemId: string,
    userId: string,
    warrantyNumber: string,
    startDate: string,
    expiryDate: string,
  ) {
    const supabase = await createClient();

    return supabase
      .from("warranties")
      .insert({
        order_id: orderId,
        order_item_id: orderItemId,
        user_id: userId,
        warranty_number: warrantyNumber,
        start_date: startDate,
        expiry_date: expiryDate,
        status: "active",
      });
  }

  static async getUserWarranties(
    userId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("warranties")
      .select(`
        *,
        orders(order_number),
        order_items(
          product_name,
          image
        )
      `)
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      });
  }

  static async getWarranty(
    userId: string,
    warrantyId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("warranties")
      .select(`
        *,
        orders(
          order_number,
          created_at
        ),
        order_items(
          product_name,
          image,
          quantity,
          unit_price
        )
      `)
      .eq("id", warrantyId)
      .eq("user_id", userId)
      .single();
  }

  static async getWarrantyCertificate(
    userId: string,
    warrantyId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("warranties")
      .select(`
        *,
        orders(
          order_number,
          created_at,
          shipping_address
        ),
        order_items(
          product_name,
          image
        )
      `)
      .eq("id", warrantyId)
      .eq("user_id", userId)
      .single();
  }
}