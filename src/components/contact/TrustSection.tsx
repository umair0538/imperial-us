"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

import styles from "./TrustSection.module.css";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Craftsmanship",
    description:
      "Every Imperial US timepiece is crafted using premium materials and meticulous attention to detail."
  },
  {
    icon: <FaShieldAlt />,
    title: "12 Month Warranty",
    description:
      "Your investment is protected with a comprehensive warranty covering manufacturing defects."
  },
  {
    icon: <FaShippingFast />,
    title: "Fast & Secure Delivery",
    description:
      "Each watch is carefully packaged and shipped with reliable tracking for complete peace of mind."
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Our customer care team is available to answer questions before and after your purchase."
  }
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <span>Why Choose Imperial US</span>

          <h2>
            Confidence
            <br />
            In Every
            <br />
            Purchase.
          </h2>

          <p>
            Luxury isn't only about beautiful design.
            It's about trust, reliability, and an exceptional experience
            from the moment you discover us until your watch is on your wrist.
          </p>
        </div>

        <div className={styles.grid}>

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}