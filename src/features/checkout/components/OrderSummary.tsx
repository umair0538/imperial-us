"use client";

import Image from "next/image";
import PlaceOrderButton from "./PlaceOrderButton";
import type { CartItem } from "@/features/cart/types/cart";

interface Items {
  items: CartItem[];
}


interface Props {
  cart: Items;
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
  loading?: boolean;
}

export default function OrderSummary({
  cart,
  subtotal,
  shipping = 0,
  tax = 0,
  discount = 0,
  loading = false,
}: Props) {
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111111] p-6">

      <h2 className="mb-6 font-serif text-2xl">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-5">

        {cart.items && cart.items.map((item) => {

          const price = item.product.price;

          return (
            <div
              key={item.id}
              className="flex items-center gap-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-zinc-900">

                <Image
                  src={item.product.heroImage}
                  alt={item.product.name}
                  width={110}
                  height={110}
                  className="object-cover"
                />

              </div>

              <div className="flex-1">

                <p className="font-medium">
                  {item.product.name}
                </p>

                <p className="text-sm text-zinc-500">
                  Qty × {item.quantity}
                </p>

              </div>

              <p className="font-medium">
                ${(price * item.quantity).toFixed(2)}
              </p>

            </div>
          );

        })}

      </div>

      <div className="my-8 border-t border-zinc-800" />

      <div className="space-y-3">

        <Row
          label="Subtotal"
          value={subtotal}
        />

        <Row
          label="Shipping"
          value={shipping}
        />

        <Row
          label="Tax"
          value={tax}
        />

        {discount > 0 && (
          <Row
            label="Discount"
            value={-discount}
            className="text-green-500"
          />
        )}

      </div>

      <div className="my-8 border-t border-zinc-800" />

      <div className="flex items-center justify-between text-xl font-semibold">

        <span>Total</span>

        <span className="text-[#C8A24B]">
          ${total.toFixed(2)}
        </span>

      </div>

      <PlaceOrderButton loading={loading} />

    </div>
  );
}

interface RowProps {
  label: string;
  value: number;
  className?: string;
}

function Row({
  label,
  value,
  className,
}: RowProps) {
  return (
    <div className={`flex justify-between ${className ?? ""}`}>
      <span>{label}</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );
}