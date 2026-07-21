"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./RoyalCollection.module.css";

export default function RoyalCollection() {

  const openURL = (url: string) => {
    return () => {
      window.location.href = url;
    }
  }

  return (
    <section id="royal" className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            Royal Collection
          </span>

          <h2>
            Power.
            <br />
            Prestige.
            <br />
            Presence.
          </h2>

          <p>
            The Royal Collection embodies confidence and sophistication.
            Crafted for gentlemen who appreciate timeless design and
            commanding presence.
          </p>

          <Link
            href="/collections/royal"
            className={styles.discover}
          >
            DISCOVER COLLECTION
          </Link>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: .92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/royal/green/front.png"
            alt="Regent Emerald"
            width={700}
            height={700}
            priority
            className={styles.image}
            onClick={openURL("/collections/royal")}
          />
        </motion.div>

      </div>
    </section>
  );
}