"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartDrawer } from "../context/CartDrawerContext";

interface EmptyCartProps {
  title?: string;
  description?: string;
}

export default function EmptyCart({
  title = "Your cart is waiting.",
  description = "Discover timeless pieces crafted to define your presence.",
}: EmptyCartProps) {
  const { isOpen, closeCart } = useCartDrawer();
  
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
        <ShoppingBag
          size={34}
          className="text-[#C8A24B]"
        />
      </div>

      {/* Heading */}
      <h2 className="font-serif text-3xl text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md text-zinc-400 leading-7">
        {description}
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="
          mt-10
          rounded-lg
          border
          border-[#C8A24B]
          px-8
          py-4
          text-sm
          font-medium
          tracking-[0.2em]
          text-[#C8A24B]
          transition-all
          duration-200
          hover:bg-[#C8A24B]
          hover:text-black
        "
        onClick={closeCart}
      >
        EXPLORE COLLECTION
      </Link>
    </div>
  );
}