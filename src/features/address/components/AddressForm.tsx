"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";

import {
  addressSchema,
  AddressFormData,
} from "../validation/address.schema";

import { createAddress } from "../actions/create-address";
import { updateAddress } from "../actions/update-address";

import { Address } from "../types/address";

interface Props {
  mode: "create" | "edit";
  address?: Address;
}

export default function AddressForm({
  mode,
  address,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),

    defaultValues: {
      label: address?.label ?? "Home",

      firstName: address?.first_name ?? "",

      lastName: address?.last_name ?? "",

      phone: address?.phone ?? "",

      addressLine1: address?.address_line1 ?? "",

      addressLine2: address?.address_line2 ?? "",

      city: address?.city ?? "",

      state: address?.state ?? "",

      postalCode: address?.postal_code ?? "",

      country: address?.country ?? "Pakistan",

      isDefault: address?.is_default ?? false,
    },
  });

  const onSubmit = (data: AddressFormData) => {
    startTransition(async () => {
      if (mode === "create") {
        await createAddress(data);
      } else {
        await updateAddress(address!.id, data);
      }
    });
  };

  const selectedLabel = watch("label");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-xl border border-zinc-800 bg-[#111111] p-8"
    >
      <div>
        <h1 className="font-serif text-3xl">
          {mode === "create"
            ? "Add Address"
            : "Edit Address"}
        </h1>

        <p className="mt-2 text-zinc-500">
          Save your shipping information.
        </p>
      </div>

      <Select
        label="Label"
        {...register("label")}
        options={[
          { label: "Home", value: "Home" },
          { label: "Office", value: "Office" },
          { label: "Gift", value: "Gift" },
          { label: "Other", value: "Other" },
        ]}
      />

      {selectedLabel === "Other" && (
        <Input
          label="Custom Label"
          {...register("label")}
        />
      )}

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

      <Input
        label="Address Line 1"
        error={errors.addressLine1?.message}
        {...register("addressLine1")}
      />

      <Input
        label="Address Line 2"
        {...register("addressLine2")}
      />

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="City"
          error={errors.city?.message}
          {...register("city")}
        />

        <Input
          label="State"
          error={errors.state?.message}
          {...register("state")}
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Postal Code"
          error={errors.postalCode?.message}
          {...register("postalCode")}
        />

        <Input
          label="Country"
          error={errors.country?.message}
          {...register("country")}
        />

      </div>

      <Checkbox
        label="Set as default address"
        {...register("isDefault")}
      />

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-[#C8A24B] px-8 py-3 font-medium text-black hover:opacity-90 disabled:opacity-50"
        >
          {isPending
            ? "Saving..."
            : mode === "create"
            ? "Save Address"
            : "Update Address"}
        </button>

      </div>

    </form>
  );
}