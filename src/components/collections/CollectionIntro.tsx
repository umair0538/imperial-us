import styles from "./CollectionIntro.module.css";

interface Props {
  title: string;
  description: string;
}

export default function CollectionIntro({
  title,
  description,
}: Props) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}