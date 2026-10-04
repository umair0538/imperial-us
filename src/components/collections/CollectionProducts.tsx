"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CollectionProducts.module.css";
import type { Product, Collection } from "@/types/catalogue";

interface Props {
  collection: Collection;
  products: Product[];
}

export default function CollectionProducts({
  collection,
  products,
}: Props) {

  const openURL = (url: string) => {
    return () => {
      window.location.href = url;
    }
  }

  return (
    <>
      {products.map((product, index) => (
        <section
          key={product.slug}
          className={styles.section}
        >
          <div
            className={`container ${styles.wrapper} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
          >
            {/* Watch Image */}

            <motion.div
              className={`${styles.image} flex-2`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={product.heroImage}
                alt={product.name}
                width={1000}
                height={700}
                priority={index === 0}
                onClick={openURL(`/products/${product.slug}`)}
              />
            </motion.div>

            {/* Product Details */}

            <motion.div
              className={`${styles.content} flex-1`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2 onClick={openURL(`/products/${product.slug}`)}>
                {product.name}
              </h2>

              <p>{product.description}</p>

              <Link
                href={`/products/${product.slug}`}
                className={styles.button}
              >
                View Details
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
