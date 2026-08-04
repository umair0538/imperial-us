import { createClient } from "@/lib/supabase/server";
import { ProfileForm } from "@/features/account/validation/profile.schema";

export class AccountRepository {
  static async getProfile(userId: string) {
    const supabase = await createClient();

    return supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
  }

  static async getOrderCount(userId: string) {
    const supabase = await createClient();

    return supabase
      .from("orders")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("user_id", userId);
  }

  static async getRecentOrders(userId: string) {
    const supabase = await createClient();

    return supabase
      .from("orders")
      .select(`
        id,
        order_number,
        status,
        total,
        created_at
      `)
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      })
      .limit(3);
  }

  static async updateProfile(
      userId: string,
      profile: ProfileForm
  ) {

      const supabase =
          await createClient();

      return supabase
          .from("profiles")
          .update({

              first_name:
                  profile.firstName,

              last_name:
                  profile.lastName,

              phone:
                  profile.phone,

          })
          .eq("id", userId);

  }
}