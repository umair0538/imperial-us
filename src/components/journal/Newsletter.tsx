"use client";

import { motion } from "framer-motion";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className={styles.eyebrow}>
            Stay Inspired
          </span>

          <h2>
            Join The
            <br />
            Imperial Journal
          </h2>

          <p>
            Receive timeless stories, style inspiration,
            new product launches and exclusive offers
            directly in your inbox.
          </p>

          <form className={styles.form}>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}