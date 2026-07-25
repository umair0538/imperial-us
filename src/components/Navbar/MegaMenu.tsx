"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

type MegaMenuProps = {
    sections: {
        title: string;
        items: {
            label: string;
            href: string;
            badge?: string;
        }[];
    }[];
};

export default function MegaMenu({ sections }: MegaMenuProps) {
    return (
        <div className={styles.megaMenu}>

            {sections.map((section) => (

                <div
                    key={section.title}
                    className={styles.menuColumn}
                >

                    <h4>{section.title}</h4>

                    {section.items.map((item) => (

                        <Link
                            href={item.href}
                            key={item.label}
                            className={styles.menuLink}
                        >
                            <span>{item.label}</span>

                            {item.badge && (
                                <span className={styles.badge}>
                                    {item.badge}
                                </span>
                            )}

                        </Link>

                    ))}

                </div>

            ))}

        </div>
    );
}