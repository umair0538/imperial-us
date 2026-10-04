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
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 font-serif text-2xl">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          {shipping === 0 ? (
            <span>
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
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        )}

        <div className="my-4 border-t" />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>

          <span>
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
              px-5
              py-4
              text-sm
              font-medium
              tracking-widest
              transition-all
              duration-200
              hover:[background-color:var(--gold)]
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
              px-5
              py-4
              text-sm
              font-medium
              tracking-widest
              transition-all
              duration-200
              hover:[background-color:var(--gold)]
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