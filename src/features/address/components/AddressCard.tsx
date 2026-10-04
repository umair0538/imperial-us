"use client";

import Link from "next/link";
import { Home, Building2, Star } from "lucide-react";
import type { Address } from "../types/address";
import { setDefaultAddress } from "../actions/set-default-address";
import { deleteAddress } from "../actions/delete-address";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  address: Address;
}

export default function AddressCard({
  address,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [pendingType, setPendingType] = useState<string | null>(null);

  const handleMakeDefault = (addressId: string) => {
    setPendingType("default");
    startTransition(async () => {
      const result = await setDefaultAddress(addressId);

      if (!result.success) {
        alert(result.message);
        return;
      }

      router.refresh();
    });
  };

  const handleDelete = (addressId: string) => {
    setPendingType("delete");
    startTransition(async () => {
      const result = await deleteAddress(addressId);

      if (!result.success) {
        alert(result.message);
        return;
      }

      router.refresh();
    });
  };

  const Icon =
    address.label.toLowerCase() === "office"
      ? Building2
      : Home;

  return (
    <div className="rounded-xl border p-6">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <Icon
            size={22}
          />

          <div>

            <h3 className="text-lg font-semibold">
              {address.label}
            </h3>

            {address.is_default && (
              <div className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">

                <Star size={12} />

                Default Address

              </div>
            )}

          </div>

        </div>

      </div>

      <div className="mt-6 space-y-2">

        <p>
          {address.first_name} {address.last_name}
        </p>

        <p>{address.phone}</p>

        <p>{address.address_line1}</p>

        {address.address_line2 && (
          <p>{address.address_line2}</p>
        )}

        <p>
          {address.city}, {address.state}
        </p>

        <p>{address.postal_code}</p>

        <p>{address.country}</p>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        <Link
          href={`/account/addresses/${address.id}/edit`}
          className="rounded-lg border border-[#C8A24B] px-4 py-2 text-sm transition hover:[background-color:var(--gold)]"
        >
          Edit
        </Link>

        {!address.is_default && (
          <button
            className="rounded-lg border px-4 py-2 text-sm transition hover:[background-color:var(--gold)]"
            onClick={() => handleMakeDefault(address.id)}
            disabled={isPending}
          >
            {isPending && pendingType === "default" ? "Updating..." : "Make Default"}
          </button>
        )}

        <button
          className="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400 transition hover:[background-color:var(--gold)]"
          onClick={() => handleDelete(address.id)}
          disabled={isPending}
        >
          {isPending && pendingType === "delete" ? "Deleting..." : "Delete"}
        </button>

      </div>

    </div>
  );
}