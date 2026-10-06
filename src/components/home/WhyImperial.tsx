import styles from "./WhyImperial.module.css";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

const items = [
  {
    title: "PREMIUM MATERIALS",
    image: "/images/why-imperial/materials.png"
  },
  {
    title: "1-YEAR WARRANTY",
    text: "Every Imperial US timepiece is backed by our comprehensive warranty.",
    image: "/images/why-imperial/warranty.png"
  },
  {
    title: "FREE DELIVERY",
    text: "Fast and secure nationwide shipping across Pakistan.",
    image: "/images/why-imperial/delivery.png"
  },
  {
    title: "SECURE CHECKOUT",
    text: "Protected payments with a smooth and trusted shopping experience.",
    image: "/images/why-imperial/checkout.png"
  }
];

export default function WhyImperial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <SectionTitle
          eyebrow="Why Imperial US"
          title={
            <></>
          }
          align="center"
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <div
              key={item.title}
              className={styles.card}
            >

              <img 
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: 'auto' }} 
              />
              <h3 style={{color:"var(--text-body)"}}>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}