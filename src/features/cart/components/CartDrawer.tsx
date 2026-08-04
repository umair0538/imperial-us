"use client";

import { X } from "lucide-react";
import { useCartDrawer } from "../context/CartDrawerContext";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import styles from "./CartDrawer.module.css"
import {CartItem as CartItemType} from "../types/cart"

export default function CartDrawer() {
  const { isOpen, closeCart } = useCartDrawer();

  const {
    cart,
    subtotal,
    updateQuantity,
    removeItem,
    isLoading,
  } = useCart();

  if (cart.items === undefined)
    cart.items = []

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`
          fixed inset-0 z-40 bg-black/60 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          ${styles.cartDrawer}
          fixed top-0 right-0 z-50
          flex h-screen w-full max-w-md flex-col
          bg-[#090909]
          border-l border-zinc-800
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-[9999]
          overflow-y-auto
        `}
      >
        <section className={styles.section}>
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
            <div>
              <h1>Your Cart</h1>

              <p className="mt-1 text-sm text-zinc-500">
                {cart.items ? cart.items.length : 0} Carefully Selected Piece
                {cart.items && cart.items.length === 1 ? "" : "s"}
              </p>
            </div>

            <button
              onClick={closeCart}
              className="rounded-full p-2 transition hover:bg-zinc-800"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <p className="text-zinc-500">Loading...</p>
              </div>
            ) : cart.items.length === 0 ? (
              <EmptyCart />
            ) : (
              cart.items.map((item: CartItemType) => (
                <CartItem
                  key={item.id}
                  product={item.product}
                  quantity={item.quantity}
                  onIncrease={() =>
                    updateQuantity({
                      cartItemId: item.id,
                      quantity: item.quantity + 1,
                    })
                  }
                  onDecrease={() =>
                    updateQuantity({
                      cartItemId: item.id,
                      quantity: item.quantity - 1,
                    })
                  }
                  onRemove={() =>
                    removeItem(item.id)
                  }
                />
              ))
            )}
          </div>

          {cart.items && cart.items.length > 0 && (
            <div className="border-t border-zinc-800 p-6">
              <CartSummary subtotal={subtotal} />
            </div>
          )}
      </section>
      </aside>
    </>
  );
}