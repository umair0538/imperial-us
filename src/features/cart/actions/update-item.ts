"use server";

import { invalidateCartCache } from "@/lib/cache";
import { createClient } from "@/lib/supabase/server";
import { CartService } from "@/lib/services/cart.service";

export interface UpdateCartItemInput {
  cartItemId: string;
  quantity: number;
}

export interface ActionResult<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function updateCartItem(
  input: UpdateCartItemInput
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

    const result = await CartService.updateQuantity(
      input.cartItemId,
      input.quantity
    );

    if (!result.success) {
      return result;
    }

    invalidateCartCache();

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to update cart.",
    };
  }
}