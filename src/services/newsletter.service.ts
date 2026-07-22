import { supabase } from "@/utils/supabase";

export async function subscribe(email: string) {
  return await supabase
    .from("newsletter_subscribers")
    .insert({
      email,
      source: "website",
    });
}