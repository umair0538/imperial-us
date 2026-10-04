"use client";

import styles from "./Hero.module.css";
import Link from "next/link";
import { isMobile } from 'react-device-detect';
import { useState, useEffect } from 'react';

export default function Hero() {
  const scrollToCollections = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("royal")?.scrollIntoView({behavior: "smooth",})
    }
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videoSrc = isClient && isMobile 
    ? "/videos/hero-mobile.mp4" 
    : "/videos/hero.mp4";

  return (
    <section className={styles.hero}>

      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
        key={videoSrc}
        src={videoSrc}
      />

      {/*<div className={styles.overlay} />

      <div className={styles.content}>
        <Link 
          href="#"
          className={styles.link}
          onClick={() => scrollToCollections()}>
          DISCOVER COLLECTION
        </Link>

      </div>*/}

    </section>
  );
}