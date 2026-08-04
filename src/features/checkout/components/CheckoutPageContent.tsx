"use client";

import CheckoutHeader from "./CheckoutHeader";
import ShippingAddressForm from "./ShippingAddressForm";
import OrderSummary from "./OrderSummary";
import { useCart } from "@/features/cart/hooks/useCart";
import { useForm } from "react-hook-form";
import { placeOrder } from "../actions/place-order";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  shippingAddressSchema,
  ShippingAddress,
} from "../validation/shipping-address.schema";
import { Address } from "@/features/address/types/address";

interface CheckoutProps {
    defaultAddress?: Address | null;
}

export default function CheckoutPageContent({
  defaultAddress,
}: CheckoutProps) {
  const { cart, subtotal, isLoading } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: {
      firstName: (defaultAddress && defaultAddress.first_name) ?? "",
      lastName: (defaultAddress && defaultAddress.last_name) ?? "",
      email: "",
      phone: (defaultAddress && defaultAddress.phone) ?? "",
      address1: (defaultAddress && defaultAddress.address_line1) ?? "",
      address2: (defaultAddress && defaultAddress.address_line2) ?? "",
      city: (defaultAddress && defaultAddress.city) ?? "",
      state: (defaultAddress && defaultAddress.state) ?? "",
      postalCode: (defaultAddress && defaultAddress.postal_code) ?? "",
      country: "Pakistan",
    },
  });

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading checkout...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        Your cart is empty.
      </div>
    );
  }

  const onSubmit = async (data: ShippingAddress) => {
    await placeOrder(data);
  };

  return (
    <>
      <CheckoutHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <section>
            <ShippingAddressForm register={register} errors={errors}/>
          </section>

          <aside className="sticky top-24 h-fit">
            <OrderSummary
              cart={cart}
              subtotal={subtotal}
            />
          </aside>
      </div>
      </form>
    </>
  );
}