"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

type NavItemProps = {
    item: any;
    onNavigate?: () => void;
};

export default function NavItem({
    item,
    onNavigate,
}: NavItemProps) {
    return (
        <div className={styles.navItem}>

            {item.href ? (
                <Link
                    href={item.href}
                    onClick={onNavigate}
                >
                    {item.label}
                </Link>
            ) : (
                <>
                    <button className={styles.navButton}>
                        {item.label}
                    </button>

                    {item.collections && (
                        <div className={styles.megaMenuWrapper}>
                            <MegaMenu
                                collections={item.collections}
                            />
                        </div>
                    )}

                    {item.dropdown && (
                        <Dropdown
                            items={item.dropdown}
                        />
                    )}
                </>
            )}

        </div>
    );
}