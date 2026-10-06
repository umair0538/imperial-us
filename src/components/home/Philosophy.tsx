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
            <></>
          }
          align="center"
        />

        <p>
          At Imperial US, we believe true style lies in the details. Every piece in our collection is thoughtfully selected for its design, finish, and everyday appeal, bringing together refined aesthetics and practical functionality.

          From the textures and finishes of our belts to the carefully considered details of our watches and sunglasses, each accessory is chosen to complement the modern gentleman’s lifestyle.

          Our approach is simple: timeless design, thoughtful details, and style that speaks for itself.
        </p>
        <br/>

        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          key="/videos/craftsmanship.mp4"
          src="/videos/craftsmanship.mp4"
        />

      </motion.div>
    </section>
  );
}