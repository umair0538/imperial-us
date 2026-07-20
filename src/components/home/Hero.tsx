"use client";

import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  const scrollToCollections = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("royal")?.scrollIntoView({behavior: "smooth",})
    }
  }

  return (
    <section className={styles.hero}>

      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>

        <span className={styles.brand}>
          IMPERIAL US
        </span>

        <h1>
          Live Like a King
        </h1>

        <p>
          Premium timepieces crafted for
          modern gentlemen.
        </p>

        <Link 
          href="#"
          className={styles.link}
          onClick={() => scrollToCollections()}>
          DISCOVER COLLECTION
        </Link>

      </div>

    </section>
  );
}