"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ProductCard.module.css";

export interface ProductCardProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
}

interface ProductCardProps {
    product: ProductCardProduct;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const [activeImage, setActiveImage] = useState(0);

    const scrollToImage = (index: number) => {
        const container = imageContainerRef.current;

        if (!container) return;

        const nextIndex = Math.max(
            0,
            Math.min(index, product.images.length - 1)
        );

        container.scrollTo({
            left: container.clientWidth * nextIndex,
            behavior: "smooth",
        });

        setActiveImage(nextIndex);
    };

    const handleScroll = () => {
        const container = imageContainerRef.current;

        if (!container) return;

        const index = Math.round(
            container.scrollLeft / container.clientWidth
        );

        setActiveImage(index);
    };

    const previousImage = () => {
        scrollToImage(activeImage - 1);
    };

    const nextImage = () => {
        scrollToImage(activeImage + 1);
    };

    return (
        <article className={styles.card}>

            {/* IMAGE CAROUSEL */}
            <div className={styles.imageArea}>

                <div
                    ref={imageContainerRef}
                    className={styles.imageScroller}
                    onScroll={handleScroll}
                >
                    {product.images.map((image, index) => (
                        <Link
                            key={`${product.id}-${index}`}
                            href={`/products/${product.slug}`}
                            className={styles.imageSlide}
                            aria-label={`${product.name} image ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                fill
                                sizes="(max-width: 600px) 50vw, (max-width: 992px) 50vw, 25vw"
                                className={styles.productImage}
                            />
                        </Link>
                    ))}
                </div>


                {/* PREVIOUS */}
                {product.images.length > 1 && activeImage > 0 && (
                    <button
                        type="button"
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={previousImage}
                        aria-label="Previous image"
                    >
                        <span>‹</span>
                    </button>
                )}


                {/* NEXT */}
                {product.images.length > 1 &&
                    activeImage < product.images.length - 1 && (
                        <button
                            type="button"
                            className={`${styles.arrow} ${styles.arrowRight}`}
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <span>›</span>
                        </button>
                    )}
            </div>


            {/* PRODUCT INFORMATION */}
            <div className={styles.info}>

                <Link
                    href={`/products/${product.slug}`}
                    className={styles.productName}
                >
                    {product.name}
                </Link>

                <p className={styles.price}>
                    PKR {product.price.toLocaleString()}
                </p>

            </div>

        </article>
    );
}