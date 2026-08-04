import { createClient } from "@/lib/supabase/server";

import { Address } from "@/features/address/types/address";

export class AddressRepository {

  static async getAddresses(userId: string) {

    const supabase = await createClient();

    return supabase
      .from("addresses")
      .select("*")
      .eq("user_id", userId)
      .order("is_default", {
        ascending: false,
      })
      .order("created_at", {
        ascending: false,
      });

  }

  static async getAddress(
    addressId: string,
    userId: string,
  ) {

    const supabase = await createClient();

    return supabase
      .from("addresses")
      .select("*")
      .eq("id", addressId)
      .eq("user_id", userId)
      .single();

  }

  static async createAddress(
    userId: string,
    address: Omit<
      Address,
      "id" | "created_at"
    >
  ) {

    const supabase = await createClient();

    return supabase
      .from("addresses")
      .insert({

        user_id: userId,

        ...address,

      })
      .select()
      .single();

  }

  static async updateAddress(
    userId: string,
    addressId: string,
    address: Partial<Address>,
  ) {

    const supabase = await createClient();

    return supabase
      .from("addresses")
      .update(address)
      .eq("id", addressId)
      .eq("user_id", userId);
  }

  static async deleteAddress(
    addressId: string,
    userId: string,
  ) {

    const supabase = await createClient();

    return supabase
      .from("addresses")
      .delete()
      .eq("id", addressId)
      .eq("user_id", userId);
  }

  static async clearDefaultAddresses(
    userId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("addresses")
      .update({
        is_default: false,
      })
      .eq("user_id", userId);
  }

  static async setDefaultAddress(
    addressId: string,
    userId: string,
  ) {
    const supabase = await createClient();

    return supabase
      .from("addresses")
      .update({
        is_default: true,
      })
      .eq("id", addressId)
      .eq("user_id", userId);
  }

  static async getDefaultAddress(userId: string) {
    const supabase = await createClient();

    return supabase
      .from("addresses")
      .select("*")
      .eq("user_id", userId)
      .eq("is_default", true)
      .single();
  }
}