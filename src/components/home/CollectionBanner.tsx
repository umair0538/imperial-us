import Link from "next/link";
import Image from "next/image";
import styles from "./CollectionBanner.module.css";

interface ImageBannerProps {
    image: string;
    title: string;
    buttonText?: string;
    href: string;
    position?: string;
}

export default function CollectionBanner({
    image,
    title,
    buttonText = "DISCOVER NOW",
    href,
    position = "center",
}: ImageBannerProps) {
    return (
        <section className={styles.banner}>
            <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="100vw"
                className={styles.image}
                style={{ objectPosition: position }}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>
                <h2>{title}</h2>

                <Link href={href} className={styles.button}>
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}