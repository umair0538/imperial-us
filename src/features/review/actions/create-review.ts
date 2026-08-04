"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import { ReviewService } from "@/lib/services/review.service";

import {
  reviewSchema,
  ReviewFormData,
} from "../validation/review.schema";

export async function createReview(
  orderItemId: string,
  data: ReviewFormData
) {
  const parsed = reviewSchema.safeParse(data);

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

  const result = await ReviewService.createReview(
    user.id,
    orderItemId,
    parsed.data
  );

  if (result.error) {
    return {
      success: false,
      message: result.error.message,
    };
  }

  revalidatePath("/account/orders");

  if (result.data)
    revalidatePath(`/products/${result["data"]["productId"]}`);

  return {
    success: true,
    message: "Review submitted successfully.",
  };
}