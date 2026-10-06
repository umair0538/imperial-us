import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import { ProductCardProduct } from "./ProductCard";

interface ProductGridProps {
    products: ProductCardProduct[];
    title: string;
}

export default function ProductGrid({
    products,
    title,
}: ProductGridProps) {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.wrapper}`}>
                <span className={styles.title}>{title}</span>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}