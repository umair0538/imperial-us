"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

type DropdownProps = {
    items: {
        label: string;
        href: string;
    }[];
};

export default function Dropdown({ items }: DropdownProps) {
    return (
        <div className={styles.dropdown}>

            {items.map((item) => (

                <Link
                    key={item.label}
                    href={item.href}
                    className={styles.dropdownItem}
                >
                    {item.label}
                </Link>

            ))}

        </div>
    );
}