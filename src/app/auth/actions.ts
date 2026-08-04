"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export type AuthFormState = {
  error?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function credentials(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!emailPattern.test(email)) return { error: "Enter a valid email address." };
  if (password.length < 8) return { error: "Your password must be at least 8 characters." };

  return { email, password };
}

export async function signIn(
  _: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const values = credentials(formData);
  if ("error" in values) return values;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(values);

  if (error) return { error: "Invalid email or password." };

  redirect("/account");
}

export async function signUp(
  _: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const values = credentials(formData);
  if ("error" in values) return values;

  const name = String(formData.get("name") ?? "").trim();
  if (name.length < 2 || name.length > 80) {
    return { error: "Enter a name between 2 and 80 characters." };
  }

  const headerStore = await headers();
  const origin = headerStore.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin) return { error: "Unable to create your account. Please try again." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    ...values,
    options: {
      data: { full_name: name },
      emailRedirectTo: `${origin}/auth/confirm?next=/account`,
    },
  });

  if (error) return { error: error.message };
  if (data.session) redirect("/account");

  return { message: "Check your inbox to confirm your email address, then sign in." };
}
