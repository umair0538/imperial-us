"use client";

import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <span>
          Stay Connected
        </span>

        <h2>
          Join the Imperial Circle
        </h2>

        <p>
          Be the first to discover new collections,
          exclusive offers and product launches.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}