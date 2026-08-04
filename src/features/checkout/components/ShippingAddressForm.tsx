"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ShippingAddress } from "../types/checkout";
import Input from "@/components/ui/Input";

interface Props {
  register: UseFormRegister<ShippingAddress>;
  errors: FieldErrors<ShippingAddress>;
}

export default function ShippingAddressForm({
  register,
  errors,
}: Props) {
  return (
    <section className="space-y-8">

      <h2 className="text-2xl font-serif">
        Shipping Address
      </h2>

      {/* Name */}
      <div className="grid gap-4 md:grid-cols-2">

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

      {/* Contact */}

      <div className="grid gap-4 md:grid-cols-2">

        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Phone"
          error={errors.phone?.message}
          {...register("phone")}
        />

      </div>

      {/* Address */}

      <Input
        label="Address Line 1"
        error={errors.address1?.message}
        {...register("address1")}
      />

      <Input
        label="Apartment / Suite (Optional)"
        {...register("address2")}
      />

      <div className="grid gap-4 md:grid-cols-2">

        <Input
          label="City"
          error={errors.city?.message}
          {...register("city")}
        />

        <Input
          label="State / Province"
          error={errors.state?.message}
          {...register("state")}
        />

      </div>

      <div className="grid gap-4 md:grid-cols-2">

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

    </section>
  );
}