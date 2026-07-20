"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CollectionShowcase.module.css";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

export default function CollectionShowcase({
  title,
  subtitle,
  description,
  image,
  href,
  reverse = false,
}: Props) {
  return (
    <section className={styles.section}>
      <div
        className={`${styles.container} ${
          reverse ? styles.reverse : ""
        }`}
      >
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>{title}</span>

          <h2>{subtitle}</h2>

          <p>{description}</p>

          <Link href={href} className={styles.link}>
            DISCOVER COLLECTION
          </Link>
        </motion.div>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
          />
        </motion.div>
      </div>
    </section>
  );
}