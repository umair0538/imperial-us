import StarRating from "./StarRating";

import { ReviewSummary as ReviewSummaryType } from "../types/review-summary";

interface Props {
  summary: ReviewSummaryType;
}

export default function ReviewSummary({
  summary,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

      <div className="flex flex-col gap-8 md:flex-row">

        <div className="w-100 text-center">

          <div className="text-5xl font-bold">

            {summary.average.toFixed(1)}

          </div>

          <div className="mt-3 flex justify-center">

            <StarRating
              value={Math.round(summary.average)}
            />

          </div>

          <p className="mt-3 text-zinc-500">

            {summary.total} Reviews

          </p>

        </div>

        <div className="flex-1 space-y-4">

          {[5, 4, 3, 2, 1].map((rating) => {

            const count =
              summary.counts[
                rating as keyof typeof summary.counts
              ];

            const percentage =
              summary.total === 0
                ? 0
                : (count / summary.total) * 100;

            return (

              <RatingBar
                key={rating}
                rating={rating}
                count={count}
                percentage={percentage}
              />

            );

          })}

        </div>

      </div>

    </section>
  );
}

interface RatingBarProps {
  rating: number;
  count: number;
  percentage: number;
}

function RatingBar({
  rating,
  count,
  percentage,
}: RatingBarProps) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-10 text-sm">

        {rating} ★

      </div>

      <div className="h-3 flex-1 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full bg-[#C8A24B]"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="w-10 text-right text-sm text-zinc-500">

        {count}

      </div>

    </div>
  );
}