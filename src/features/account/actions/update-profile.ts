"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import { AccountService } from "@/lib//services/account.service";

import { profileSchema } from "../validation/profile.schema";

export async function updateProfile(data: unknown) {

    const parsed =
        profileSchema.safeParse(data);

    if (!parsed.success) {

        return {
            success: false,
            errors: parsed.error.flatten(),
        };

    }

    const supabase =
        await createClient();

    const {
        data: {
            user,
        },
    } = await supabase.auth.getUser();

    if (!user) {

        return {
            success: false,
            message: "Unauthorized",
        };

    }

    await AccountService.updateProfile(
        user.id,
        parsed.data
    );

    revalidatePath("/account");

    revalidatePath("/account/profile");

    return {
        success: true,
        message: "Profile updated successfully.",
    };

}