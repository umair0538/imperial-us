"use client";

import { motion } from "framer-motion";
import styles from "./CollectionFeatures.module.css";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
}

export default function CollectionFeatures({
  title = "Designed With Precision",
  subtitle = "Craftsmanship",
  description = "Every Imperial US timepiece is thoughtfully crafted using premium materials, precision engineering, and timeless design principles.",
  features,
}: Props) {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>{subtitle}</span>

          <h2>{title}</h2>

          <p>{description}</p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}