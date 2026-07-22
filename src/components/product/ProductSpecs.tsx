"use client";

import { motion } from "framer-motion";
import styles from "./ProductSpecs.module.css";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductSpecs({ product }: Props) {
  let specs = [
    {
      label: "Style",
      value: product.specifications.style,
    },
    {
      label: "Gender",
      value: product.specifications.gender,
    },
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
      label: "Band Width",
      value: product.specifications.band_width,
    },
    {
      label: "Band Length",
      value: product.specifications.band_length,
    },
    {
      label: "Dial Diameter",
      value: product.specifications.dial_diameter,
    },
    {
      label: "Clasp Type",
      value: product.specifications.clasp_type,
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

  specs = specs.filter(spec => spec.value !== undefined);

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