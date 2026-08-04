import { redirect, notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import WarrantyDetails from "@/features/warranty/components/WarrantyDetails";
import { WarrantyService } from "@/lib/services/warranty.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function WarrantyPage({
  params,
}: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const {
    data: warranty,
  } = await WarrantyService.getWarranty(
    user.id,
    id
  );

  if (!warranty) {
    notFound();
  }

  return (
    <WarrantyDetails
      warranty={warranty}
    />
  );
}