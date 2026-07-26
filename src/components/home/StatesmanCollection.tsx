"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./StatesmanCollection.module.css";

export default function StatesmanCollection() {

  const openURL = (url: string) => {
    return () => {
      window.location.href = url;
    }
  }

  return (
    <section id="statesman" className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: .92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/statesman/black/front.png"
            alt="Statesman Black"
            width={650}
            height={650}
            className={styles.image}
            onClick={openURL("/collections/belts/statesman-belts")}
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
            Statesman Collection
          </span>

          <h2>
            Confident.
            <br />
            Versatile.
            <br />
            Refined.
          </h2>

          <p>
            Crafted to complete the modern gentleman's wardrobe, the Belt Collection combines premium materials, 
            timeless design, and everyday versatility for a confident, refined look.
          </p>

          <Link
            href="/collections/belts/statesman-belts"
            className={styles.discover}
          >
            DISCOVER COLLECTION
          </Link>
        </motion.div>

      </div>
    </section>
  );
}