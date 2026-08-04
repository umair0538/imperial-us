import ReviewCard from "./ReviewCard";

import { ProductReview } from "../types/review";

interface Props {
  reviews: ProductReview[];
}

export default function ReviewList({
  reviews,
}: Props) {

  if (reviews.length === 0) {

    return (

      <div className="rounded-xl border border-zinc-800 py-20 text-center">

        <h3 className="font-serif text-2xl">

          No Reviews Yet

        </h3>

        <p className="mt-3 text-zinc-500">

          Be the first to review this watch.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      {reviews.map((review) => (

        <ReviewCard

          key={review.id}

          review={review}

        />

      ))}

    </div>

  );

}