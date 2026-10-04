"use client";

import { motion } from "framer-motion";
import styles from "./CollectionHero.module.css";

interface Props {
  videoSrc?: string;
}

export default function CollectionHero({
  videoSrc,
}: Props) {
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
    </section>
  );
}