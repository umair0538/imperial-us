import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCategories.module.css";

const categories = [
    {
        name: "Leather Belts",
        href: "/products/list/belt",
        image: "/images/collections/executive/statesman.png",
    },
    {
        name: "Wrist Watches",
        href: "/products/list/watch",
        image: "/images/collections/signature/regent.png",
    },
    {
        name: "Sunglasses",
        href: "/products/list/sunglasses",
        image: "/images/collections/classic/vanguard.png",
    },
];

export default function ProductCategories() {
    return (
        <section className={styles.categorySection}>
            <div className={styles.categoryGrid}>
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href={category.href}
                        className={styles.categoryCard}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 25vw"
                                className={styles.image}
                            />
                        </div>

                        <h3 className={styles.categoryTitle}>
                            {category.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}