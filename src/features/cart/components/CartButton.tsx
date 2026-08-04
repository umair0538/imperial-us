"use client";

import { ShoppingBag } from "lucide-react";
import { useCartDrawer } from "../context/CartDrawerContext";
import { useCart } from "../hooks/useCart";
import navbarStyles from "@/components/Navbar/Navbar.module.css";

export default function CartButton() {
  const { openCart } = useCartDrawer();

  const { itemCount } = useCart();

  return (
    <button
      onClick={openCart}
      className={navbarStyles.navButton}
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="h-5 w-5" />

      {itemCount > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-[#C8A24B]
            text-[11px]
            font-semibold
            text-black
          "
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}