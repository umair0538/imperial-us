import { notFound, redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import ReviewForm from "@/features/review/components/ReviewForm";
import { ReviewService } from "@/lib/services/review.service";

interface Props {
  params: Promise<{
    orderId: string;
    orderItemId: string;
  }>;
}

export default async function ReviewPage({
  params,
}: Props) {
  const { orderItemId } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Verify this order item belongs to the user
  const {
    data: orderItem,
    error,
  } = await ReviewService.getOrderItem(
    user.id,
    orderItemId
  );

  if (error || !orderItem) {
    notFound();
  }

  // Prevent duplicate reviews
  const {
    data: existingReview,
  } = await ReviewService.getUserReview(
    user.id,
    orderItemId
  );

  if (existingReview) {
    redirect(
      `/account/reviews/${existingReview.id}/edit`
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ReviewForm
        mode="create"
        orderItemId={orderItemId}
      />
    </div>
  );
}