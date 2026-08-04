"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OrderService } from "@/lib/services/order.service";
import type { Result } from "@/lib/types/result";

export async function getOrder(
  orderId: string
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

  const result = await OrderService.getOrder(
    orderId,
    user.id,
  );

  if (!result.success) {
    return result;
  }

  return result.data;
}