"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signIn, signUp, type AuthFormState } from "@/app/auth/actions";
import styles from "./AuthForm.module.css";

const initialState: AuthFormState = {};

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";
  const [state, action, pending] = useActionState(isSignup ? signUp : signIn, initialState);

  return (
    <form action={action} className={styles.form} noValidate>
      {isSignup && (
        <label className={styles.field}>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
        </label>
      )}

      <label className={styles.field}>
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label className={styles.field}>
        <span>Password</span>
        <input name="password" type="password" autoComplete={isSignup ? "new-password" : "current-password"} required minLength={8} />
        {isSignup && <small>At least 8 characters.</small>}
      </label>

      {state.error && <p className={styles.error} role="alert">{state.error}</p>}
      {state.message && <p className={styles.success} role="status">{state.message}</p>}

      <button className={styles.submit} type="submit" disabled={pending}>
        {pending ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
      </button>

      <p className={styles.switch}>
        {isSignup ? "Already have an account?" : "New to Imperial US?"}{" "}
        <Link href={isSignup ? "/login" : "/signup"}>
          {isSignup ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </form>
  );
}
