import { createClient } from "@/lib/supabase/server";

export async function subscribe(email: string) {
  const supabase = await createClient();
  return await supabase
    .from("newsletter_subscribers")
    .insert({
      email,
      source: "website",
    });
}