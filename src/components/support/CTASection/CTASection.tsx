import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <h2>Need More Help?</h2>

      <p>
        If you have any questions about your warranty,
        our team is here to help.
      </p>

      <Link href="/contact" className={styles.button}>
        Contact Us
      </Link>
    </section>
  );
}