import { createClient } from "@/lib/supabase/server";

export interface CreateOrderParams {
  userId: string;
  orderNumber: string;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  paymentStatus: string;
  paymentProvider: string;
  shippingAddress: unknown;
}

export class OrderRepository {
  static async createOrder(params: CreateOrderParams) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: params.userId,
        order_number: params.orderNumber,
        subtotal: params.subtotal,
        shipping: params.shipping,
        tax: params.tax,
        discount: params.discount,
        total: params.total,
        payment_status: params.paymentStatus,
        payment_provider: params.paymentProvider,
        shipping_address: params.shippingAddress,
        status: "pending",
      })
      .select()
      .single();

    return { data, error };
  }

  static async createOrderItems(
    orderId: string,
    cartItems: any[]
  ) {
    const supabase = await createClient();

    const items = cartItems.map((item) => {
      const unitPrice =
        item.product.sale_price ?? item.product.price;

      return {
        order_id: orderId,
        product_id: item.product.id,
        product_name: item.product.name,
        image: item.product.heroImage,
        quantity: item.quantity,
        unit_price: unitPrice,
        total_price: unitPrice * item.quantity,
      };
    });

    return supabase
      .from("order_items")
      .insert(items);
  }

  static async findByUser(userId: string) {
    const supabase = await createClient();

    return supabase
      .from("orders")
      .select(`
        *,
        order_items(*)
      `)
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      });
  }

  static async findById(orderId: string, userId: string) {
    const supabase = await createClient();

    return supabase
      .from("orders")
      .select(`
        *,
        order_items(*)
      `)
      .eq("id", orderId)
      .eq("user_id", userId)
      .single();
  }

  static async createOrderEvent({
    orderId,
    status,
    title,
    description,
  }: {
    orderId: string;
    status: string;
    title: string;
    description?: string;
  }) {
    const supabase = await createClient();

    return supabase
      .from("order_events")
      .insert({
        order_id: orderId,
        status,
        title,
        description,
      });
  }

  static async findOrderDetails(orderId: string) {
    const supabase = await createClient();

    return supabase
      .from("orders")
      .select(`
        *,
        order_items(*),
        order_events(*)
      `)
      .eq("id", orderId)
      .single();
  }

  static async findCurrentUserOrders(userId: string) {
    const supabase = await createClient();

    return supabase
        .from("orders")
        .select(`
            *,
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
}