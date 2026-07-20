import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}