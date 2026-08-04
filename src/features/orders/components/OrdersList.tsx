"use client";

import { useOrders } from "../hooks/useOrders";
import EmptyOrders from "./EmptyOrders";
import OrderCard from "./OrderCard";

export default function OrdersList() {
  const {
    orders,
    isLoading,
  } = useOrders();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!orders) {
    return (
      <div className="py-20 text-center">
        Not found
      </div>
    );
  }

  if (orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (

        <OrderCard
          key={order.id}
          order={order}
        />

      ))}

    </div>
  );
}