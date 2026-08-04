"use server";

import { createClient } from "@/lib/supabase/server";
import { AccountService } from "@/lib/services/account.service";

export async function getDashboard() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const result = await AccountService.getDashboard(user.id);

  return result.profile ? result : null;
}