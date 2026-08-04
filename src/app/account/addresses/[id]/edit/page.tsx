import AddressForm from "@/features/address/components/AddressForm";
import { createClient } from "@/lib/supabase/server";
import { AddressService } from "@/lib/services/address.service";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewAddressPage({ params }: Props) {
    const supabase = await createClient();
    const { id } = await params;

    const {
        data: {
            user,
        },
    } = await supabase.auth.getUser();

    if (!user)
        redirect("/login");

    const address =
        await AddressService.getAddress(id, user.id);

    return (

        <AddressForm

            mode="edit"

            address={address}

        />

    );

}