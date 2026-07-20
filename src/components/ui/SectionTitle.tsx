import styles from "./SectionTitle.module.css";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
}: Props) {
  return (
    <div
      className={`${styles.wrapper} ${
        align === "center"
          ? styles.center
          : ""
      }`}
    >
      <span className={styles.eyebrow}>
        {eyebrow}
      </span>

      <h2>{title}</h2>
    </div>
  );
}