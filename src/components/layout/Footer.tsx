"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.brand}>

          <Image
            src="/logo.png"
            alt="Imperial US"
            width={100}
            height={65}
            priority
          />

          <p className={styles.tagline}>
            Define Your Presence
          </p>

          <p className={styles.description}>
            Premium timepieces crafted for modern gentlemen.
            Designed with timeless elegance and exceptional quality.
          </p>

        </div>

        {/* Collections */}
        <div>

          <h4>Collections</h4>

          <Link href="/collections/regent">
            Regent Collection
          </Link>

          <Link href="/collections/classic">
            Classic Collection
          </Link>

          <Link href="/collections">
            View All
          </Link>

        </div>

        {/* Company */}
        <div>

          <h4>Company</h4>

          <Link href="/about">
            About
          </Link>

          <Link href="/journal">
            Journal
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        {/* Support */}
        <div>

          <h4>Support</h4>

          <Link href="/shipping">
            Shipping
          </Link>

          <Link href="/returns">
            Returns
          </Link>

          <Link href="/warranty">
            Warranty
          </Link>

          <Link href="/faq">
            FAQ
          </Link>

        </div>

      </div>

      {/* Bottom */}

      <div className={styles.bottom}>

        <div className={styles.socials}>

          <a 
            href="https://www.instagram.com/shopimperialus/" 
            target="_blank" 
            rel="noopener noreferrer">

            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/@imperialus-pk"
            target="_blank" 
            rel="noopener noreferrer">
            
            <FaYoutube />
          </a>

        </div>

        <p>
          © {new Date().getFullYear()} Imperial US. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}