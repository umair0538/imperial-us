"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1–2 business days. Delivery times vary depending on your location and selected shipping method."
  },
  {
    question: "Do your watches come with a warranty?",
    answer:
      "Yes. Every Imperial US watch includes a 12-month warranty covering manufacturing defects under normal use."
  },
  {
    question: "Can I return my watch?",
    answer:
      "Absolutely. We offer a hassle-free return policy for eligible products within the specified return window."
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Imperial US ships to selected countries worldwide. Shipping costs and delivery estimates are calculated during checkout."
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is dispatched, you'll receive an email containing your tracking number and courier information."
  },
  {
    question: "How should I care for my watch?",
    answer:
      "Clean your watch using a soft microfiber cloth, avoid harsh chemicals, and store it in a dry place when not in use."
  }
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <span>Frequently Asked Questions</span>

          <h2>
            Everything You
            <br />
            Need To Know
          </h2>

          <p>
            Find answers to the questions we receive most often.
            If you still need assistance, our team is always happy to help.
          </p>
        </div>

        <div className={styles.accordion}>

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              className={styles.item}
              layout
            >

              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >

                <span>{faq.question}</span>

                {openIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}

              </button>

              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: .35 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}