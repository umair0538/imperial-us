"use client";

import { motion } from "framer-motion";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.eyebrow}>Our Story</span>

            <h2>
              Built For Men
              <br />
              Who Refuse
              <br />
              To Settle.
            </h2>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Imperial US was created with a simple belief — a watch should do
              far more than tell time. It should remind you of the standards you
              set for yourself and the legacy you strive to build.
            </p>

            <p>
              Every collection is inspired by timeless design, crafted with
              premium materials, and made for gentlemen who lead with ambition,
              confidence, and purpose.
            </p>

            <p>
              Whether you're closing your biggest deal, celebrating life's
              milestones, or taking the next step toward your goals, your
              timepiece should reflect the person you're becoming.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}