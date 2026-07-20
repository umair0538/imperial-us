"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

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
            src="/logo.png"
            alt="Imperial US"
            width={100}
            height={65}
            priority
          />
        </Link>

        <nav>

          <Link href="/collections/royal">
            Royal
          </Link>

          <Link href="/collections/classic">
            Classic
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/journal">
            Journal
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}