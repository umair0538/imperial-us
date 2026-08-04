"use client";

import Link from "next/link";

import AddressCard from "./AddressCard";

import { Address } from "../types/address";

interface Props {
  addresses: Address[];
}

export default function AddressList({
  addresses,
}: Props) {

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="font-serif text-4xl">
            My Addresses
          </h1>

          <p className="mt-2 text-zinc-500">
            Manage your saved shipping addresses.
          </p>

        </div>

        <Link
          href="/account/addresses/new"
          className="
            rounded-lg
            bg-[#C8A24B]
            px-6
            py-3
            font-medium
            text-black
          "
        >
          + Add Address
        </Link>

      </div>

      {addresses.length === 0 ? (

        <div className="rounded-xl border border-zinc-800 py-20 text-center">

          <p className="text-zinc-500">

            No saved addresses.

          </p>

        </div>

      ) : (

        <div className="grid gap-6 lg:grid-cols-2">

          {addresses.map((address) => (

            <AddressCard
              key={address.id}
              address={address}
            />

          ))}

        </div>

      )}

    </div>

  );

}