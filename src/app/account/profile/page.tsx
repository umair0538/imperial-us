import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AccountService } from "@/lib/services/account.service";
import EditProfileForm from "@/features/account/components/EditProfileForm";

export default async function ProfilePage() {

    const supabase = await createClient();

    const {
        data: {
            user,
        },
    } = await supabase.auth.getUser();

    if (!user)
        redirect("/login");

    const profile =
        await AccountService.getProfile(user.id);

    return (
        <EditProfileForm
            profile={profile}
        />
    );

}