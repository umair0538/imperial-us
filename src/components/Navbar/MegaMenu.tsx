"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

type MegaMenuProps = {
    collections: {
        name: string;
        description: string;
        href: string;
        image: string;
    }[];
};

export default function MegaMenu({ collections }: MegaMenuProps) {
    return (
        <div className={styles.megaMenu}>

            {collections.map((collection) => (

                <Link
                    href={collection.href}
                    key={collection.name}
                    className={styles.collectionCard}
                >

                    <div className={styles.collectionImage}>
                        <img
                            src={collection.image}
                            alt={collection.name}
                        />
                    </div>

                    <div className={styles.collectionInfo}>

                        <div className={styles.collectionTitleRow}>
                            <h4>{collection.name}</h4>

                            <span className={styles.collectionArrow}>
                                →
                            </span>
                        </div>

                        <p>{collection.description}</p>

                    </div>

                </Link>

            ))}

        </div>
    );
}