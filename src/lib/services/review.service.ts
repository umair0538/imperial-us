import { ReviewRepository } from "../repositories/review.repository";
import { ReviewFormData } from "@/features/review/validation/review.schema";
import { AccountService } from "./account.service";

export class ReviewService {
  static async getProductReviews(productId: string) {
    return await ReviewRepository.getProductReviews(productId);
  }

  static async getReviewSummary(productId: string) {
    return ReviewRepository.getReviewSummary(productId);
  }

  static async getUserReview(
    userId: string,
    orderItemId: string
  ) {
    return ReviewRepository.getUserReview(
      userId,
      orderItemId
    );
  }

  static async canReview(
    userId: string,
    orderItemId: string
  ) {
    // Has the user already reviewed this order item?
    const { data: existingReview, error } =
      await ReviewRepository.getUserReview(
        userId,
        orderItemId
      );

    if (error) {
      return {
        allowed: false,
        message: error.message,
      };
    }

    if (existingReview) {
      return {
        allowed: false,
        message: "You have already reviewed this product.",
      };
    }

    return {
      allowed: true,
    };
  }

  static async createReview(
    userId: string,
    orderItemId: string,
    data: ReviewFormData
  ) {
    // Verify the review can be created
    const permission = await this.canReview(
      userId,
      orderItemId
    );

    if (!permission.allowed) {
      return {
        error: {
          message: permission.message,
        },
      };
    }

    // Load the purchased order item
    const {
      data: orderItem,
      error,
    } = await ReviewRepository.getOrderItem(
      userId,
      orderItemId
    );

    if (error || !orderItem) {
      return {
        error: {
          message: "Order item not found.",
        },
      };
    }

    const userProfile = await AccountService.getProfile(userId);

    const repositoryResult = ReviewRepository.createReview({
      productId: orderItem.product_id,
      orderItemId,
      userId,
      rating: data.rating,
      title: data.title,
      comment: data.comment,
      reviewerName: userProfile.first_name,
    });

    return {
      ...repositoryResult,
      productId: orderItem.product_id,
    };
  }

  static async updateReview(
    reviewId: string,
    userId: string,
    data: ReviewFormData
  ) {
    return ReviewRepository.updateReview(
      reviewId,
      userId,
      data
    );
  }

  static async getOrderItem(
    userId: string,
    orderItemId: string
  ) {
    return ReviewRepository.getOrderItem(
      userId,
      orderItemId
    );
  }

  static async getReview(
    userId: string,
    reviewId: string
  ) {
    return ReviewRepository.getReview(
      userId,
      reviewId
    );
  }
}