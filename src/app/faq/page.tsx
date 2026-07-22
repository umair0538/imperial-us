import SupportHero from "@/components/support/SupportHero/SupportHero";
import CTASection from "@/components/support/CTASection/CTASection";

import styles from "./page.module.css";

export const metadata = {
  title: "FAQ | Imperial US",
  description:
    "Frequently asked questions about Imperial US products, shipping, warranty, and returns.",
};

const faqSections = [
  {
    title: "Products",
    questions: [
      {
        question: "Are Imperial US watches water resistant?",
        answer:
          "Yes. Water resistance varies by model. Please refer to the product specifications for the exact water resistance rating before use.",
      },
      {
        question: "What movement do your watches use?",
        answer:
          "Our watches are built using reliable, high-quality movements selected for their precision and durability. Movement specifications are listed on each product page.",
      },
      {
        question: "What is included with my purchase?",
        answer:
          "Each watch includes a premium presentation box, cleaning cloth, warranty card, thank-you card, and any accessories included with your purchase.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Orders are typically processed within 1–2 business days. Delivery times depend on your location and shipping method.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes. Imperial US ships worldwide. Shipping times and customs requirements vary by destination.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes. Once your order has been dispatched, you'll receive a tracking number by email whenever tracking is available.",
      },
    ],
  },
  {
    title: "Warranty",
    questions: [
      {
        question: "How long is the warranty?",
        answer:
          "Every Imperial US watch is backed by a 1-Year Limited Warranty covering manufacturing defects under normal use.",
      },
      {
        question: "What does the warranty cover?",
        answer:
          "The warranty covers manufacturing defects in the movement and workmanship. It does not cover accidental damage, misuse, batteries, or normal wear and tear.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    questions: [
      {
        question: "Can I return my order?",
        answer:
          "Yes. Eligible items may be returned within 14 days of delivery, provided they are unused and in their original packaging.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Once your return has been inspected and approved, refunds are typically processed within 5–10 business days depending on your payment provider.",
      },
      {
        question: "Can I exchange my watch?",
        answer:
          "Yes. Exchanges are available subject to product availability and our returns policy.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <SupportHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about shopping with Imperial US."
      />

      <main className={styles.container}>
        {faqSections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2>{section.title}</h2>

            <div className={styles.accordion}>
              {section.questions.map((item) => (
                <details
                  key={item.question}
                  className={styles.item}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </main>

      <CTASection />
    </>
  );
}