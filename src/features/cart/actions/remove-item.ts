"use server";

import { invalidateCartCache } from "@/lib/cache";
import { createClient } from "@/lib/supabase/server";
import { CartService } from "@/lib/services/cart.service";

export interface ActionResult {
  success: boolean;
  message?: string;
}

export async function removeCartItem(
  cartItemId: string
): Promise<ActionResult> {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return {
        success: false,
        message: "Please login.",
      };
    }

    const result = await CartService.removeItem(cartItemId);

    if (!result.success) {
      return result;
    }

    invalidateCartCache();

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to remove cart item.",
    };
  }
}