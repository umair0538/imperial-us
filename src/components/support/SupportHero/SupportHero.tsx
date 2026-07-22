import styles from "./SupportHero.module.css";

interface Props {
  title: string;
  subtitle: string;
}

export default function SupportHero({ title, subtitle }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}