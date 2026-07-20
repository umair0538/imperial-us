"use client";

import { motion } from "framer-motion";
import styles from "./JournalHero.module.css";

export default function JournalHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            The Journal
          </span>

          <h1>
            Stories of
            <br />
            Time,
            <br />
            Style &
            <br />
            Craftsmanship.
          </h1>

          <p>
            Discover timeless insights on watches, craftsmanship,
            personal style, and the pursuit of excellence.
          </p>
        </motion.div>
      </div>

      <div className={styles.scroll}>
        Scroll
      </div>
    </section>
  );
}