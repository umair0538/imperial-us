import { supabase } from "@/utils/supabase";

export async function saveContactMessage(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  return await supabase
    .from("contact_messages")
    .insert({
      name,
      email,
      subject,
      message,
    });
}