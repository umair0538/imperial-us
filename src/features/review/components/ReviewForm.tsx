"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

import StarRating from "./StarRating";

import {
  reviewSchema,
  ReviewFormData,
} from "../validation/review.schema";

import { createReview } from "../actions/create-review";
import { updateReview } from "../actions/update-review";

interface Props {
  mode: "create" | "edit";

  orderItemId: string;

  reviewId?: string;

  initialValues?: ReviewFormData;
}

export default function ReviewForm({
  mode,
  orderItemId,
  reviewId,
  initialValues,
}: Props) {
  const [isPending, startTransition] =
    useTransition();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),

    defaultValues:
      initialValues ?? {
        rating: 5,
        title: "",
        comment: "",
      },
  });

  const rating = watch("rating");

  const onSubmit = (
    data: ReviewFormData
  ) => {
    startTransition(async () => {
      if (mode === "create") {
        await createReview(
          orderItemId,
          data
        );
      } else {
        await updateReview(
          reviewId!,
          data
        );
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-xl border border-zinc-800 bg-[#111111] p-8"
    >
      <div>
        <h2 className="font-serif text-3xl">
          {mode === "create"
            ? "Write a Review"
            : "Edit Review"}
        </h2>

        <p className="mt-2 text-zinc-500">
          Share your experience with
          other customers.
        </p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium">
          Rating
        </label>

        <StarRating
          editable
          value={rating}
          size={28}
          onChange={(value) =>
            setValue("rating", value, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
        />

        {errors.rating && (
          <p className="mt-2 text-sm text-red-500">
            {errors.rating.message}
          </p>
        )}
      </div>

      <Input
        label="Title (Optional)"
        error={errors.title?.message}
        {...register("title")}
      />

      <Textarea
        label="Review"
        rows={6}
        error={errors.comment?.message}
        {...register("comment")}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="
            rounded-lg
            bg-[#C8A24B]
            px-8
            py-3
            font-medium
            text-black
            transition
            hover:opacity-90
            disabled:opacity-50
          "
        >
          {isPending
            ? "Saving..."
            : mode === "create"
            ? "Submit Review"
            : "Update Review"}
        </button>
      </div>
    </form>
  );
}