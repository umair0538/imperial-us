"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import NavItem from "./NavbarItem";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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

                <Link href="/" className={styles.logo}>
          <Image
            src="/logo-golden.png"
            alt="Imperial US"
            width={85}
            height={50}
            priority
          />
        </Link>

                <nav className={styles.nav}>

                    {navigation.map((item) => (
                        <NavItem
                            key={item.label}
                            item={item}
                        />
                    ))}

                </nav>

            </div>
        </header>
    );
}