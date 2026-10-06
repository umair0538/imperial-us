import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProducts.module.css";

const featuredProducts = [
    {
        name: "Signature Statesman Belt",
        href: "/products/signature-statesman-belt",
        image: "/images/collections/signature/statesman.png",
    },
    {
        name: "Classic Statesman Belt",
        href: "/products/classic-statesman-belt",
        image: "/images/collections/classic/statesman.png",
    },
    {
        name: "Executive Statesman Belt",
        href: "/products/executive-statesman-belt",
        image: "/images/collections/executive/statesman.png",
    },
];

export default function FeaturedProducts() {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.featuredGrid}>
                {featuredProducts.map((product) => (
                    <Link
                        key={product.name}
                        href={product.href}
                        className={styles.featuredCard}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 25vw"
                                className={styles.image}
                            />
                        </div>

                        <h3 className={styles.productTitle}>
                            {product.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}