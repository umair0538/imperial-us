"use client";

import { motion } from "framer-motion";
import styles from "./Craftsmanship.module.css";

export default function Craftsmanship() {
  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.grid}>

          {/* Image */}

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/craftsmanship.png"
              alt="Imperial US craftsmanship"
              className={styles.image}
            />
          </motion.div>

          {/* Content */}

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.eyebrow}>
              Craftsmanship
            </span>

            <h2>
              Crafted To
              <br />
              Endure.
            </h2>

            <p>
              Every Imperial US watch is designed with precision,
              balance, and timeless elegance. From the polished
              stainless steel case to the carefully finished dial,
              every detail contributes to a watch that feels refined
              from every angle.
            </p>

            <p>
              We believe luxury isn't measured by excess—
              it's measured by thoughtful design, dependable
              performance, and lasting quality that can be
              appreciated for years to come.
            </p>

            <div className={styles.highlights}>

              <div className={styles.item}>
                <span>✓</span>
                Premium Stainless Steel
              </div>

              <div className={styles.item}>
                <span>✓</span>
                Reliable Quartz Movement
              </div>

              <div className={styles.item}>
                <span>✓</span>
                Sapphire-Coated Glass
              </div>

              <div className={styles.item}>
                <span>✓</span>
                Water Resistant Design
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}