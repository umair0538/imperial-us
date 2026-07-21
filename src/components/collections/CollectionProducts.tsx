"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CollectionProducts.module.css";
import { Product } from "@/data/products";
import { Collection } from "@/data/collections";

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
              className={styles.image}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                width={700}
                height={700}
                priority={index === 0}
                onClick={openURL(`/products/${product.slug}`)}
              />
            </motion.div>

            {/* Product Details */}

            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>
                {collection.name} Collection
              </span>

              <h2 onClick={openURL(`/products/${product.slug}`)}>
                {product.name}
              </h2>

              <p>{product.description}</p>

              <div className={styles.price}>
                PKR {product.price.toLocaleString()}
              </div>

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