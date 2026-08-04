import CheckoutPageContent from "@/features/checkout/components/CheckoutPageContent";
import { AddressService } from "@/lib/services/address.service";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
  const supabase = await createClient();

  const {
      data: {
          user,
      },
  } = await supabase.auth.getUser();

  if (!user)
      redirect("/login");

  const {
    data: defaultAddress,
  } = await AddressService.getDefaultAddress(user.id);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <CheckoutPageContent defaultAddress={defaultAddress} />
    </main>
  );
}