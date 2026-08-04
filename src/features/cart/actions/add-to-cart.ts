"use server";

import { invalidateCartCache } from "@/lib/cache";
import { createClient } from "@/lib/supabase/server";
import { CartService } from "@/lib/services/cart.service";

export interface AddToCartInput {
  productId: string;
  quantity?: number;
}

export interface ActionResult<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function addToCart(
  input: AddToCartInput
): Promise<ActionResult> {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return {
        success: false,
        message: "Please login to continue.",
      };
    }

    const result = await CartService.addItem(
      user.id,
      input.productId,
      input.quantity ?? 1
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
    console.error("Add to cart failed:", error);

    return {
      success: false,
      message: "Unable to add item to cart.",
    };
  }
}