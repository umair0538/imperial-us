import styles from "./WhyImperial.module.css";
import Image from "next/image";

const items = [
  {
    title: "Premium Materials",
    image: "/images/why-imperial/materials.png"
  },
  {
    title: "1-Year Warranty",
    text: "Every Imperial US timepiece is backed by our comprehensive warranty.",
    image: "/images/why-imperial/warranty.png"
  },
  {
    title: "Free Delivery",
    text: "Fast and secure nationwide shipping across Pakistan.",
    image: "/images/why-imperial/delivery.png"
  },
  {
    title: "Secure Checkout",
    text: "Protected payments with a smooth and trusted shopping experience.",
    image: "/images/why-imperial/checkout.png"
  }
];

export default function WhyImperial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>
          Why Imperial US
        </h2>

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
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}