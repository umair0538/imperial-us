"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import QuantitySelector from "./QuantitySelector";
import styles from "./CartItem.module.css";
import { CartProduct } from "../types/cart";

interface CartItemProps {
  product: CartProduct;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const price = product.price;
  const total = price * quantity;

  return (
    <div className="flex gap-4 border-b border-zinc-800 py-6 m-2">
      <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900">
        <Image
          src={product.heroImage}
          alt={product.name}
          width={120}
          height={100}
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex">
          <div className="flex-4 mr-1">
            <h3 className="font-semibold text-white">
              {product.name}
            </h3>
          </div>

          <div className="flex-1">
            <button
              onClick={onRemove}
              className="mt-2 flex items-center gap-1 text-sm text-zinc-500 transition hover:text-red-500 p-3 h-10 w-10"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <p className={`mt-1 text-sm m-0 text-zinc-300`}>
            ${price.toFixed(2)}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />

          <div className="text-right">
            <p className={`mt-1 text-sm ${styles.price} m-0`}>
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}