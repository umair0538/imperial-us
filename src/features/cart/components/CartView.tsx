"use client";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { useCart } from "../hooks/useCart";
import { CartItem as CartItemType } from "../types/cart";

export default function CartView() {
  const {
    cart,
    subtotal,
    updateQuantity,
    removeItem,
    isLoading,
  } = useCart();

  if (isLoading) {
    return (
      <div className="py-24 text-center text-zinc-400">
        Loading cart...
      </div>
    );
  }

  if (cart.items && cart.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[2fr_1fr] pt-12">

      <section>

        <h1 className="mb-10 font-serif text-5xl">
          Your Cart
        </h1>

        {cart.items && cart.items.map((item: CartItemType) => (
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
        ))}

      </section>

      <aside className="sticky top-24 h-fit">

        <CartSummary
          subtotal={subtotal}
        />

      </aside>

    </div>
  );
}