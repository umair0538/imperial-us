"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import styles from "./ProductHero.module.css";
import { Product } from "@/data/products";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Props {
  product: Product;
  whatsappLink: string,
  emailLink: string,
}

export default function ProductHero({ product, whatsappLink, emailLink }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const onClickUrl = (url: string) => {
    return () => openInNewTab(url)
  }

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        {/* LEFT COLUMN */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={selectedImage}
              alt={product.name}
              width={650}
              height={650}
              priority
            />
          </div>

          <div className={styles.thumbnails}>
            {product.images.map((image) => (
              <button
                key={image}
                className={`${styles.thumb} ${
                  selectedImage === image ? styles.active : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={product.name}
                  width={90}
                  height={90}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.info}>
          <span className={styles.collection}>
            {product.collection} Collection
          </span>

          <h1>{product.name}</h1>

          <p className={styles.price}>
            PKR {product.price.toLocaleString()}
          </p>

          <p className={styles.description}>
            {product.description}
          </p>

          <ul className={styles.features}>
            <li>
              <FaCheck />
              Reliable Quartz Movement
            </li>

            <li>
              <FaCheck />
              Acrylic Glass
            </li>

            <li>
              <FaCheck />
              316L Stainless Steel
            </li>

            <li>
              <FaCheck />
              1-Year Warranty
            </li>
          </ul>

          <div className={styles.order}>
            <span>
              Order through
            </span>
          </div>

          <div>
            <button
              onClick={onClickUrl(whatsappLink)}
              className={styles.button}
            >
              <FaWhatsapp />
              WhatsApp
            </button>
            
            <button
              onClick={onClickUrl(emailLink)}
              className={styles.button}
            >
              <MdEmail />
              Email
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}