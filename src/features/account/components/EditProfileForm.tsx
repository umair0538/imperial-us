"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";

import {
  profileSchema,
  ProfileForm,
} from "../validation/profile.schema";

import { updateProfile } from "../actions/update-profile";

import Input from "@/components/ui/Input";

interface Props {
  profile: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
  };
}

export default function EditProfileForm({
  profile,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      firstName: profile.first_name ?? "",
      lastName: profile.last_name ?? "",
      phone: profile.phone ?? "",
    },
  });

  function onSubmit(data: ProfileForm) {
    startTransition(async () => {
      const result = await updateProfile(data);

      if (!result.success) {
        // server validation errors
        if (result.errors?.fieldErrors) {
          Object.entries(result.errors.fieldErrors).forEach(
            ([field, messages]) => {
              if (messages?.length) {
                setError(field as keyof ProfileForm, {
                  message: messages[0],
                });
              }
            }
          );
        }

        return;
      }

      toast.success("Profile updated");
    });
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-xl border border-zinc-800 bg-[#111111] p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="First Name"
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          label="Last Name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

      </div>

      <Input
        label="Phone"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={isPending}
          className="
            rounded-lg
            bg-[#C8A24B]
            px-8
            py-3
            font-medium
            text-black
            transition
            hover:opacity-90
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isPending
            ? "Saving..."
            : "Save Changes"}
        </button>
        <Toaster />

      </div>

    </form>
  );
}