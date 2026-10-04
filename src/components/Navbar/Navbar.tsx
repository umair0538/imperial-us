"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import NavItem from "./NavbarItem";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import UserMenu from "@/components/auth/UserMenu";
import CartButton from "@/features/cart/components/CartButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`${styles.navbar} ${
                scrolled ? styles.scrolled : ""
            }`}
        >
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.leftControls}>

                    <button
                        type="button"
                        className={styles.menuButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`${styles.menuLine} ${
                                menuOpen ? styles.menuLineTopOpen : ""
                            }`}
                        />

                        <span
                            className={`${styles.menuLine} ${
                                menuOpen ? styles.menuLineBottomOpen : ""
                            }`}
                        />
                    </button>

                </div>


                {/* CENTER LOGO */}
                <Link
                    href="/"
                    className={styles.logo}
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/no-tagline.png"
                        alt="Imperial US"
                        width={110}
                        height={70}
                        priority
                    />
                </Link>


                {/* RIGHT */}
                <div className={styles.rightControls}>

                    <UserMenu />

                    <CartButton />

                </div>

            </div>


            {/* FULL MENU */}
            <div
                className={`${styles.fullMenu} ${
                    menuOpen ? styles.fullMenuOpen : ""
                }`}
            >

                <nav className={styles.menuContent}>

                    {navigation.map((item) => (
                        <NavItem
                            key={item.label}
                            item={item}
                            onNavigate={() => setMenuOpen(false)}
                        />
                    ))}

                </nav>

            </div>

        </header>
    );
}