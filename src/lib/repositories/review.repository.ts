import { createClient } from "@/lib/supabase/server";
import { ReviewFormData } from "@/features/review/validation/review.schema";

export class ReviewRepository {

  static async getProductReviews(
    productId: string
  ) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("reviews")
      .select(`
        id,
        rating,
        title,
        comment,
        reviewer_name,
        verified_purchase,
        created_at
      `)
      .eq("product_id", productId)
      .order("created_at", {
        ascending: false,
      });

      if (error) throw new Error(`Unable to load reviews: ${error.message}`);

      return data;
  }

  static async getReviewSummary(
    productId: string
  ) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("reviews")
      .select("rating")
      .eq("product_id", productId);

    const ratings = data ?? [];

    const total = ratings.length;

    const counts = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    ratings.forEach(({ rating }) => {
      counts[rating as keyof typeof counts]++;
    });

    const average =
      total === 0
        ? 0
        : ratings.reduce(
            (sum, review) => sum + review.rating,
            0
          ) / total;

    return {
      data: {
        average: Number(average.toFixed(1)),
        total,
        counts,
      },
      error: null,
    };
  }

  static async getUserReview(
    userId: string,
    orderItemId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("reviews")
      .select("*")
      .eq("user_id", userId)
      .eq("order_item_id", orderItemId)
      .maybeSingle();
  }

  static async getOrderItem(
    userId: string,
    orderItemId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("order_items")
      .select(`
        id,
        product_id,
        orders!inner(
          id,
          user_id
        )
      `)
      .eq("id", orderItemId)
      .eq("orders.user_id", userId)
      .single();
  }

  static async createReview(data: {
    productId: string;
    orderItemId: string;
    userId: string;
    reviewerName: string;
    rating: number;
    title?: string;
    comment: string;
  }) {
    const supabase = await createClient();

    return supabase
      .from("reviews")
      .insert({
        product_id: data.productId,
        order_item_id: data.orderItemId,
        user_id: data.userId,
        reviewer_name: data.reviewerName,
        rating: data.rating,
        title: data.title,
        comment: data.comment,
        verified_purchase: true,
      });
  }

  static async updateReview(
    reviewId: string,
    userId: string,
    review: ReviewFormData
  ) {
    const supabase = await createClient();

    return supabase
      .from("reviews")
      .update({
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        updated_at: new Date().toISOString(),
      })
      .eq("id", reviewId)
      .eq("user_id", userId);
  }

  static async deleteReview(
    reviewId: string,
    userId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("reviews")
      .delete()
      .eq("id", reviewId)
      .eq("user_id", userId);
  }

  static async getReview(
    userId: string,
    reviewId: string
  ) {
    const supabase = await createClient();

    return supabase
      .from("reviews")
      .select(`
        id,
        order_item_id,
        rating,
        title,
        comment
      `)
      .eq("id", reviewId)
      .eq("user_id", userId)
      .single();
  }
}