"use client";

import Link from "next/link";

export default function EmptyOrders() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111111] py-20 text-center">

      <h2 className="font-serif text-3xl">
        No Orders Yet
      </h2>

      <p className="mt-4 text-zinc-500">
        Your future Imperial US purchases will appear here.
      </p>

      <Link
        href="/collections"
        className="
          mt-8
          inline-flex
          rounded-lg
          bg-[#C8A24B]
          px-6
          py-3
          font-medium
          text-black
        "
      >
        Explore Collection
      </Link>

    </div>
  );
}