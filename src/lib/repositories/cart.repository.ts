import { createClient } from "@/lib/supabase/server";
import { CartProduct, CartItem, Cart } from "@/features/cart/types/cart";

export interface CreateCartItemDto {
  user_id: string;
  product_id: string;
  quantity: number;
};

export class CartRepository {
  /**
   * Get user's complete cart
   */
  static async getCart(userId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        id,
        quantity,
        created_at,
        updated_at,
        product:products (
          id,
          slug,
          name,
          price_amount,
          stock,
          hero_image
        )
      `)
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return CartRepository.cartFromData(data);
  }

  static async getCartItem(
    userId: string,
    productId: string
  ) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", userId)
      .eq("product_id", productId)
      .maybeSingle();

    if (error) throw error;

    return CartRepository.cartItemFromData(data);
  }

  /**
   * Insert new cart item
   */
  static async addItem(item: CreateCartItemDto) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cart_items")
      .insert(item)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  /**
   * Update quantity
   */
  static async updateQuantity(
    cartItemId: string,
    quantity: number
  ) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cart_items")
      .update({
        quantity,
        updated_at: new Date().toISOString(),
      })
      .eq("id", cartItemId)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  /**
   * Remove one item
   */
  static async removeItem(cartItemId: string) {
    const supabase = await createClient();

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemId);

    if (error) throw error;
  }

  /**
   * Clear user's cart
   */
  static async clearCart(userId: string) {
    const supabase = await createClient();

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", userId);

    if (error) throw error;
  }

  /**
   * Get cart count
   */
  static async getCartCount(userId: string) {
    const supabase = await createClient();

    const { count, error } = await supabase
      .from("cart_items")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("user_id", userId);

    if (error) throw error;

    return count ?? 0;
  }

  private static cartFromData(data: any[]) {
    const cart:Cart = {
        items: [],
        subtotal: 0,
        itemCount: 0
    };

    for (let i = 0; i < data.length; i++) {
        cart["items"].push({
            id: data[i]["id"],
            quantity: data[i]["quantity"],
            product: {
                id: data[i]["product"]["id"],
                slug: data[i]["product"]["slug"],
                name: data[i]["product"]["name"],
                heroImage: data[i]["product"]["hero_image"],
                price: data[i]["product"]["price_amount"] / 100,
                stock: data[i]["product"]["stock"],
            }
        });
        cart["subtotal"] += data[i]["product"]["price_amount"];
    }

    cart["subtotal"] = cart["subtotal"] / 100;
    return cart;
  }

  private static cartItemFromData(data: any) {
    if (data === null)
        return null;

    const cartItem: CartItem = {
        id: data["id"],
        quantity: data["quantity"],
        product: {
            id: "",
            slug: "",
            name: "",
            heroImage: "",
            price: 0,
            stock: 0
        }
    };

    return cartItem;
  }
}