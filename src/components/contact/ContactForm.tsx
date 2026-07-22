"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaHeadset,
} from "react-icons/fa";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();

    setLoading(false);

    if (data.success) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      alert("Thank you! Your message has been sent.");
    } else {
      alert(data.message);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.wrapper}>

          {/* Left Side */}

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <span className={styles.eyebrow}>
              Let's Start a Conversation
            </span>

            <h2>
              We'd Love
              <br />
              To Hear
              <br />
              From You.
            </h2>

            <p>
              Whether you're interested in one of our collections,
              have a question about an order, or simply want to
              learn more about Imperial US, our team is here
              to help.
            </p>

            <div className={styles.features}>

              <div className={styles.feature}>
                <FaEnvelope />
                <div>
                  <h4>Fast Response</h4>
                  <p>Replies within one business day.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <FaLock />
                <div>
                  <h4>Your Privacy Matters</h4>
                  <p>Your information is never shared.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <FaHeadset />
                <div>
                  <h4>Dedicated Support</h4>
                  <p>Real people ready to assist you.</p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            onSubmit={handleSubmit}
          >

            <div className={styles.row}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              rows={7}
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}