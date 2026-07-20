"use client";

import { motion } from "framer-motion";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className={styles.eyebrow}>
            Our Philosophy
          </span>

          <blockquote>
            "Success is built one decision,
            <br />
            one day,
            <br />
            and one moment at a time."
          </blockquote>

          <p>
            At Imperial US, every second represents an opportunity to
            move forward. Our timepieces are designed to remind you that
            greatness isn't achieved overnight—it's earned through
            discipline, consistency, and the pursuit of excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}