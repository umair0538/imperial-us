"use client";

import { motion } from "framer-motion";
import {
  FaGem,
  FaClock,
  FaShieldAlt,
  FaCrown,
} from "react-icons/fa";

import styles from "./Standards.module.css";

const standards = [
  {
    icon: <FaGem />,
    title: "Craftsmanship",
    description:
      "Premium materials and meticulous attention to detail create timepieces designed to endure."
  },
  {
    icon: <FaClock />,
    title: "Precision",
    description:
      "Reliable Japanese movements deliver dependable performance every day."
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality",
    description:
      "Every watch is carefully inspected to ensure it meets the Imperial US standard."
  },
  {
    icon: <FaCrown />,
    title: "Confidence",
    description:
      "Designed for gentlemen who lead with ambition, purpose, and timeless style."
  }
];

export default function Standards() {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className={styles.eyebrow}>
            The Imperial Standard
          </span>

          <h2>
            Four Principles.
            <br />
            One Standard.
          </h2>

          <p>
            Every Imperial US timepiece is built upon four principles that
            define our commitment to timeless elegance and uncompromising quality.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {standards.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15
              }}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}