"use server";

import { createClient } from "@/lib/supabase/server";
import { CartService } from "@/lib/services/cart.service";

export async function loadCart() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const result = await CartService.getCart(user.id);

  return result.success ? result.data : [];
}