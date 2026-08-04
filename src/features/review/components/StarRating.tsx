"use client";

import { Star } from "lucide-react";

interface Props {
  value: number;
  max?: number;
  editable?: boolean;
  size?: number;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  value,
  max = 5,
  editable = false,
  size = 20,
  onChange,
}: Props) {
  return (
    <div className="flex-1 items-center gap-1">
      {Array.from({ length: max }).map((_, index) => {
        const rating = index + 1;

        return (
          <button
            key={rating}
            type="button"
            disabled={!editable}
            onClick={() => onChange?.(rating)}
            className={editable ? "cursor-pointer" : "cursor-default p-2"}
          >
            <Star
              size={size}
              className={
                rating <= value
                  ? "fill-[#C8A24B] text-[#C8A24B]"
                  : "text-zinc-600"
              }
            />
          </button>
        );
      })}
    </div>
  );
}