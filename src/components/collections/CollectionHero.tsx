"use client";

import { motion } from "framer-motion";
import styles from "./CollectionHero.module.css";

export default function CollectionHero() {
  return (
    <section className={styles.hero}>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <span>Collections</span>

        <h1>
          Timeless Timepieces
          <br />
          Crafted for Modern Gentlemen
        </h1>

        <p>
          Discover collections inspired by confidence,
          elegance and timeless craftsmanship.
        </p>

      </motion.div>

    </section>
  );
}