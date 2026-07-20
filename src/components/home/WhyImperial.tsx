import styles from "./WhyImperial.module.css";

const items = [
  {
    title: "Premium Materials",
    text: "Carefully selected materials designed for durability and timeless appeal."
  },
  {
    title: "1-Year Warranty",
    text: "Every Imperial US timepiece is backed by our comprehensive warranty."
  },
  {
    title: "Free Delivery",
    text: "Fast and secure nationwide shipping across Pakistan."
  },
  {
    title: "Secure Checkout",
    text: "Protected payments with a smooth and trusted shopping experience."
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
              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}