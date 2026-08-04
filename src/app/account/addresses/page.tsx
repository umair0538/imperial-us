import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { AddressService } from "@/lib/services/address.service";

import AddressList from "@/features/address/components/AddressList";

export default async function Page() {

  const supabase =
    await createClient();

  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();

  if (!user)
    redirect("/login");

  const {
    data: addresses,
  } =
    await AddressService.getAddresses(
      user.id
    );

  return (
    <AddressList
      addresses={addresses ?? []}
    />
  );

}