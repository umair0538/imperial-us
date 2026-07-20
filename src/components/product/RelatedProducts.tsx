"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product, products } from "@/data/products";
import styles from "./RelatedProducts.module.css";

interface Props {
  product: Product;
}

export default function RelatedProducts({ product }: Props) {
  const related = products
    .filter(
      (p) =>
        p.collection === product.collection &&
        p.slug !== product.slug
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>You May Also Like</span>

          <h2>
            Explore More From the{" "}
            {product.collection} Collection
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {related.map((watch) => (
            <motion.div
              key={watch.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/products/${watch.slug}`}>

                <div className={styles.imageWrapper}>
                  <Image
                    src={watch.thumbnail}
                    alt={watch.name}
                    width={500}
                    height={500}
                  />
                </div>

                <div className={styles.content}>
                  <span>{watch.collection} Collection</span>

                  <h3>{watch.name}</h3>

                  <p>
                    PKR {watch.price.toLocaleString()}
                  </p>

                  <div className={styles.link}>
                    View Details →
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}