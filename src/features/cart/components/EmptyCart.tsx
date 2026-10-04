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
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border">
        <ShoppingBag
          size={34}
        />
      </div>

      {/* Heading */}
      <h2 className="font-serif text-3xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md leading-7">
        {description}
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="
          mt-10
          rounded-lg
          border
          px-8
          py-4
          text-sm
          font-medium
          tracking-[0.2em]
          transition-all
          duration-200
        "
        onClick={closeCart}
      >
        EXPLORE COLLECTION
      </Link>
    </div>
  );
}