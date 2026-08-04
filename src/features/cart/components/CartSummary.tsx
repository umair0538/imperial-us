"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCartDrawer } from "../context/CartDrawerContext";

interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
  showCheckoutButton?: boolean;
  checkoutHref?: string;
  cartHref?: string;
  loading?: boolean;
}

export default function CartSummary({
  subtotal,
  shipping = 0,
  tax = 0,
  discount = 0,
  showCheckoutButton = true,
  checkoutHref = "/checkout",
  cartHref = "/cart",
  loading = false,
}: CartSummaryProps) {
  const total = subtotal + shipping + tax - discount;
  const { isOpen, closeCart } = useCartDrawer();

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111111] p-6">
      <h2 className="mb-6 font-serif text-2xl text-white">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-zinc-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Shipping</span>

          {shipping === 0 ? (
            <span className="text-zinc-500">
              Calculated at checkout
            </span>
          ) : (
            <span>${shipping.toFixed(2)}</span>
          )}
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-500">
            <span>Discount</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
        )}

        {tax > 0 && (
          <div className="flex justify-between text-zinc-300">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        )}

        <div className="my-4 border-t border-zinc-800" />

        <div className="flex justify-between text-lg font-semibold text-white">
          <span>Total</span>

          <span className="text-[#C8A24B]">
            ${total.toFixed(2)}
          </span>
        </div>

      </div>

      <div className="flex gap-3">
        {showCheckoutButton && (
          <Link
            href={cartHref}
            className="
              mt-8
              flex-1
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-[#C8A24B]
              bg-black
              px-5
              py-4
              text-sm
              font-medium
              tracking-widest
              text-[#C8A24B]
              transition-all
              duration-200
              hover:bg-[#C8A24B]
              hover:text-black
            "
            onClick={closeCart}
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                CART
                <ArrowRight size={18} className="float-right"/>
              </>
            )}
          </Link>
        )}

        {showCheckoutButton && (
          <Link
            href={checkoutHref}
            className="
              mt-8
              flex-1
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-[#C8A24B]
              bg-black
              px-5
              py-4
              text-sm
              font-medium
              tracking-widest
              text-[#C8A24B]
              transition-all
              duration-200
              hover:bg-[#C8A24B]
              hover:text-black
            "
            onClick={closeCart}
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                CHECKOUT
                <ArrowRight size={18} className="float-right"/>
              </>
            )}
          </Link>
        )}
      </div>
    </div>
  );
}