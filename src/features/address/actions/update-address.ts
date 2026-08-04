"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { AddressService } from "@/lib/services/address.service";

import {
  addressSchema,
  AddressFormData,
} from "../validation/address.schema";

export async function updateAddress(
  addressId: string,
  data: AddressFormData
) {
  const parsed = addressSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten(),
    };
  }

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
    await AddressService.updateAddress(
      user.id,
      addressId,
      parsed.data
    );

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/account/addresses");

  redirect(`/account/addresses`);

  return {
    success: true,
    message: "Address updated successfully.",
  };
}