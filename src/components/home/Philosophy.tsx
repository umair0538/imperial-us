"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >
        <SectionTitle
          eyebrow="Our Philosophy"
          title={
            <>
              Crafted for Men
              <br />
              Who Lead.
            </>
          }
          align="center"
        />

        <p>
          At Imperial US, we believe a watch is more than a way to tell
          time. It is a reflection of confidence, ambition, and character.
          Every timepiece is designed to inspire excellence while embracing
          timeless elegance and exceptional craftsmanship.
        </p>
      </motion.div>
    </section>
  );
}