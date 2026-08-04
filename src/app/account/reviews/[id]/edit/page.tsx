import { notFound, redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import ReviewForm from "@/features/review/components/ReviewForm";
import { ReviewService } from "@/lib/services/review.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditReviewPage({
  params,
}: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const {
    data: review,
    error,
  } = await ReviewService.getReview(
    user.id,
    id
  );

  if (error || !review) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ReviewForm
        mode="edit"
        reviewId={review.id}
        orderItemId={review.order_item_id}
        initialValues={{
          rating: review.rating,
          title: review.title ?? "",
          comment: review.comment,
        }}
      />
    </div>
  );
}