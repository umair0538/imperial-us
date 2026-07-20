"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./FeaturedArticle.module.css";

export default function FeaturedArticle() {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className={styles.imageWrapper}>
            <img
              src="/images/articles/featured.jpg"
              alt="Featured Journal Article"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>

            <span className={styles.badge}>
              Featured Story
            </span>

            <div className={styles.meta}>
              <span>Buying Guide</span>
              <span>•</span>
              <span>June 2026</span>
              <span>•</span>
              <span>6 min read</span>
            </div>

            <h2>
              The Art of Choosing
              <br />
              Your First Luxury Watch
            </h2>

            <p>
              Selecting your first luxury watch is more than a purchase—
              it's the beginning of a lifelong appreciation for
              craftsmanship, timeless design, and personal style.
            </p>

            <Link
              href="/journal/the-art-of-choosing-your-first-luxury-watch"
              className={styles.button}
            >
              Read Article →
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}