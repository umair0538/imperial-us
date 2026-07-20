"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ClassicCollection.module.css";

export default function ClassicCollection() {
  return (
    <section id="classic" className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: .92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/classic/silver/front.png"
            alt="Classic Emerald"
            width={650}
            height={650}
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className={styles.eyebrow}>
            Classic Collection
          </span>

          <h2>
            Timeless.
            <br />
            Elegant.
            <br />
            Refined.
          </h2>

          <p>
            Inspired by enduring design, the Classic Collection is created
            for everyday sophistication with premium craftsmanship and
            effortless style.
          </p>

          <Link
            href="/collections/classic"
            className={styles.discover}
          >
            DISCOVER COLLECTION
          </Link>
        </motion.div>

      </div>
    </section>
  );
}