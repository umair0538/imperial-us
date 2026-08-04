"use client";

import Link from "next/link";

import OrderStatusBadge from "@/features/orders/components/OrderStatusBadge";

interface Order {

  id: string;

  order_number: string;

  status: string;

  total: number;

  created_at: string;

}

interface Props {
  orders: Order[];
}

export default function RecentOrders({
  orders,
}: Props) {

  return (

    <section className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="font-serif text-2xl">
          Recent Orders
        </h2>

        <Link
          href="/account/orders"
          className="text-sm text-[#C8A24B]"
        >
          View All
        </Link>

      </div>

      {orders.length === 0 ? (

        <div className="py-10 text-center">

          <p className="text-zinc-500">
            You haven't placed any orders yet.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {orders.map((order) => (

            <Link
              key={order.id}
              href={`/orders/${order.id}`}
              className="
                block
                rounded-lg
                border
                border-zinc-800
                p-5
                transition
                hover:border-[#C8A24B]
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-medium">

                    {order.order_number}

                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">

                    {new Date(
                      order.created_at
                    ).toLocaleDateString()}

                  </p>

                </div>

                <OrderStatusBadge
                  status={order.status}
                />

              </div>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-sm text-zinc-500">

                  Total

                </p>

                <p className="font-semibold text-[#C8A24B]">

                  PKR {Number(order.total).toLocaleString()}

                </p>

              </div>

            </Link>

          ))}

        </div>

      )}

    </section>

  );

}