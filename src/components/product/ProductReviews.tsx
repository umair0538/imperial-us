"use client";

import { motion } from "framer-motion";
import styles from "./ProductSpecs.module.css";
import type { ReviewSummary as ProductReviewSummary } from "@/features/review/types/review-summary";
import type { ProductReview } from "@/features/review/types/review";
import ReviewSummary from "@/features/review/components/ReviewSummary";
import ReviewList from "@/features/review/components/ReviewList";
import NoReviews from "@/features/review/components/NoReviews";

interface Props {
  reviewSummary: ProductReviewSummary;
  reviews: ProductReview[];
}

export default function ProductReviews({ reviewSummary, reviews }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Customer Reviews</span>
        </motion.div>

        {reviewSummary.total > 0 ? (
          <>
            <ReviewSummary summary={reviewSummary} />

            <div className="mt-10">
              <ReviewList reviews={reviews} />
            </div>
          </>
        ) : (
            <NoReviews />
        )}

      </div>
    </section>
  );
}
