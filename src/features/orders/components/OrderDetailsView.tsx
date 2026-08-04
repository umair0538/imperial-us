"use client";

import { useOrder } from "../hooks/useOrder";

import OrderHeader from "./OrderHeader";
import OrderTimeline from "./OrderTimeline";
import ShippingInformation from "./ShippingInformation";
import OrderItems from "./OrderItems";

interface Props {
  orderId: string;
}

export default function OrderDetails({
  orderId,
}: Props) {

  const {
    order,
    isLoading,
  } = useOrder(orderId);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading order...
      </div>
    );
  }

  if (!order.id) {
    return (
      <div className="py-20 text-center">
        Order not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10">

      <OrderHeader order={order} />

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

        <div className="space-y-10">

          <OrderTimeline
            status={order.status}
          />

          <OrderItems
            items={order.order_items}
            orderId={order.id}
          />

        </div>

        <ShippingInformation
          address={order.shipping_address}
        />

      </div>

    </div>
  );
}