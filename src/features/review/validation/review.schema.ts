import { z } from "zod";

export const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1 star.")
    .max(5, "Rating cannot exceed 5 stars."),

  title: z
    .string()
    .trim()
    .max(100, "Title cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),

  comment: z
    .string()
    .trim()
    .min(10, "Review must be at least 10 characters.")
    .max(2000, "Review cannot exceed 2000 characters."),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;