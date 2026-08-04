"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import { AddressService } from "@/lib/services/address.service";

export async function setDefaultAddress(
  addressId: string
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const { error } =
    await AddressService.setDefaultAddress(
      user.id,
      addressId
    );

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/account/addresses");
  revalidatePath("/checkout");

  return {
    success: true,
  };
}