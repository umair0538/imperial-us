import {
  BadgeCheck,
} from "lucide-react";

import StarRating from "./StarRating";

import { ProductReview } from "../types/review";

interface Props {
  review: ProductReview;
}

export default function ReviewCard({
  review,
}: Props) {

  return (

    <div className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

      <div className="flex items-center justify-between">

        <StarRating
          value={review.rating}
        />

        <span className="text-sm text-zinc-500">

          {new Date(
            review.created_at
          ).toLocaleDateString()}

        </span>

      </div>

      <div className="mt-5">

        <h3 className="text-lg font-semibold">

          {review.reviewer_name}

        </h3>

        {review.verified_purchase && (

          <div className="mt-2 flex items-center gap-2 text-sm text-[#C8A24B]">

            <BadgeCheck size={16} />

            Verified Purchase

          </div>

        )}

      </div>

      {review.title && (

        <h4 className="mt-5 text-lg font-medium">

          {review.title}

        </h4>

      )}

      <p className="mt-3 whitespace-pre-line leading-7 text-zinc-300">

        {review.comment}

      </p>

    </div>

  );

}