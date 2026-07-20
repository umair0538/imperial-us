"use client";

import { motion } from "framer-motion";
import styles from "./ProductSpecs.module.css";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductSpecs({ product }: Props) {
  const specs = [
    {
      label: "Movement",
      value: product.specifications.movement,
    },
    {
      label: "Case Material",
      value: product.specifications.case,
    },
    {
      label: "Glass",
      value: product.specifications.glass,
    },
    {
      label: "Water Resistance",
      value: product.specifications.waterResistance,
    },
    {
      label: "Warranty",
      value: product.specifications.warranty,
    },
    {
      label: "Collection",
      value: product.collection,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Specifications</span>

          <h2>Technical Details</h2>

          <p>
            Every Imperial US timepiece is designed with precision,
            durability, and timeless craftsmanship.
          </p>
        </motion.div>

        <div className={styles.table}>
          {specs.map((spec) => (
            <div
              key={spec.label}
              className={styles.row}
            >
              <div className={styles.label}>
                {spec.label}
              </div>

              <div className={styles.value}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}