"use client";

import styles from "./Newsletter.module.css";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Thanks for subscribing!");
      setEmail("");
    } else if (response.status == 400) {
      alert("Thanks! You are already signed up!");
      setEmail("");
    } else {
      alert("Something went wrong.");
    }
  };

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

        <form className={styles.form} onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button>
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}