"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./ClosingCTA.module.css";

export default function ClosingCTA() {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            Your Journey Starts Here
          </span>

          <h2>
            Live Like
            <br />
            A King.
          </h2>

          <p>
            Time isn't something you spend.
            It's something you invest.
            Every second is an opportunity to grow,
            to achieve, and to leave a legacy.
          </p>

          <div className={styles.actions}>

            <Link href="/" className={styles.primaryButton}>
              Discover the Collection
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}