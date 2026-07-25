"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

type NavItemProps = {
    item: any;
};

export default function NavItem({ item }: NavItemProps) {
    return (
        <div className={styles.navItem}>

            {item.href ? (
                <Link href={item.href}>
                    {item.label}
                </Link>
            ) : (
                <>
                    <button className={styles.navButton}>
                        {item.label}
                    </button>

                    {item.sections && (
                        <MegaMenu sections={item.sections} />
                    )}

                    {item.dropdown && (
                        <Dropdown items={item.dropdown} />
                    )}
                </>
            )}

        </div>
    );
}