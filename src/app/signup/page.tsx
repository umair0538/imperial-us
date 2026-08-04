import AuthForm from "@/components/auth/AuthForm";
import styles from "@/app/auth/auth.module.css";

export default function SignupPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="signup-title">
        <span className={styles.eyebrow}>Imperial US</span>
        <h1 id="signup-title">Create your account</h1>
        <p>Create an account to review the pieces you own and access future order features.</p>
        <AuthForm mode="signup" />
      </section>
    </main>
  );
}
