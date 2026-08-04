import { createClient } from "@/lib/supabase/server";

export async function saveContactMessage(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const supabase = await createClient();
  return await supabase
    .from("contact_messages")
    .insert({
      name,
      email,
      subject,
      message,
    });
}