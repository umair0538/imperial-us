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

          <p className="mt-2">
            Manage your saved shipping addresses.
          </p>

        </div>

        <Link
          href="/account/addresses/new"
          className="
            rounded-lg
            px-6
            py-3
            font-medium
          "
        >
          + Add Address
        </Link>

      </div>

      {addresses.length === 0 ? (

        <div className="rounded-xl border py-20 text-center">

          <p>

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