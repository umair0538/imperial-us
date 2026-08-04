"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import { OrderService } from "@/lib/services/order.service";

import type { ShippingAddress } from "../types/checkout";
import type { Result } from "@/lib/types/result";

export async function placeOrder(
  address: ShippingAddress
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Please login.",
    };
  }

  const result = await OrderService.placeOrder(
    user.id,
    address
  );

  if (!result.success || result.data === undefined) {
    return result;
  }

  redirect(`/account/orders/${result.data.orderId}`);
}