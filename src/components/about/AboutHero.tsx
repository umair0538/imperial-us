"use client";

import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            About Imperial US
          </span>

          <h1>
            Time Is More
            <br />
            Than A Measure.
          </h1>

          <p>
            Every Imperial US timepiece is created for gentlemen who
            value ambition, discipline, and timeless style.
          </p>
        </motion.div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
      </div>
    </section>
  );
}