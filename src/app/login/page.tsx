import AuthForm from "@/components/auth/AuthForm";
import styles from "@/app/auth/auth.module.css";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="login-title">
        <span className={styles.eyebrow}>Imperial US</span>
        <h1 id="login-title">Welcome back</h1>
        <p>Sign in to manage your account and share product reviews.</p>
        {error === "confirmation" && (
          <p className={styles.notice} role="alert">Your confirmation link is invalid or has expired. Please sign in or create a new account.</p>
        )}
        <AuthForm mode="login" />
      </section>
    </main>
  );
}
