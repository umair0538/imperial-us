"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OrderService } from "@/lib/services/order.service";
import type { Result } from "@/lib/types/result";

export async function getOrders() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return []
  }

  return await OrderService.getOrders(user.id);
}