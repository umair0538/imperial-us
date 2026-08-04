import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { WarrantyService } from "@/lib/services/warranty.service";
import WarrantyList from "@/features/warranty/components/WarrantyList";

export default async function WarrantyPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const {
    data: warranties,
  } = await WarrantyService.getUserWarranties(
    user.id
  );

  return (
    <WarrantyList
      warranties={warranties ?? []}
    />
  );
}