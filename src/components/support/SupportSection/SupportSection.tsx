import styles from "./SupportSection.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SupportSection({
  title,
  children,
}: Props) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}