"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    const syncUser = async () => {
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email ?? null);
    };

    void syncUser();
    const { data: listener } = supabase.auth.onAuthStateChange(() => void syncUser());
    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setEmail(null);
    router.push("/");
    router.refresh();
  };

  if (!email) return <Link className={styles.link} href="/login">Sign in</Link>;

  return (
    <div className={styles.menu}>
      <Link className={styles.link} href="/account">Account</Link>
    </div>
  );
}
