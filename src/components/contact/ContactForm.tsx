"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
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
          >

            <div className={styles.row}>
              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows={7}
              placeholder="How can we help you?"
            />

            <button type="submit">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}