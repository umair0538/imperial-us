"use client";

import Link from "next/link";

export default function EmptyOrders() {
  return (
    <div className="rounded-xl border py-20 text-center">

      <h2 className="font-serif text-3xl">
        No Orders Yet
      </h2>

      <p className="mt-4">
        Your future Imperial US purchases will appear here.
      </p>

      <Link
        href="/collections"
        className="
          mt-8
          inline-flex
          rounded-lg
          px-6
          py-3
          font-medium
          hover:[background-color:var(--gold)]
        "
      >
        Explore Collection
      </Link>

    </div>
  );
}