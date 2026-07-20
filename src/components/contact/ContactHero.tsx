"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
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
            Contact
          </span>

          <h1>
            We're Here
            <br />
            To Help.
          </h1>

          <p>
            Whether you have questions about our collections,
            need assistance with an order, or simply want to
            learn more about Imperial US, our team is ready
            to assist you.
          </p>

          <div className={styles.quickInfo}>
            <div>
              <h4>Email</h4>
              <span>support@imperialus.com</span>
            </div>

            <div>
              <h4>Response Time</h4>
              <span>Within 24 Hours</span>
            </div>

            <div>
              <h4>Business Hours</h4>
              <span>Mon – Fri · 9 AM – 6 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}