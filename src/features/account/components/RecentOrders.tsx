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

    <section className="rounded-xl border p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="font-serif text-2xl">
          Recent Orders
        </h2>

        <Link
          href="/account/orders"
          className="text-sm"
        >
          View All
        </Link>

      </div>

      {orders.length === 0 ? (

        <div className="py-10 text-center">

          <p>
            You haven't placed any orders yet.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {orders.map((order) => (

            <Link
              key={order.id}
              href={`/account/orders/${order.id}`}
              className="
                block
                rounded-lg
                border
                p-5
                transition
                hover:[background-color:var(--gold)]
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-medium">

                    {order.order_number}

                  </h3>

                  <p className="mt-1 text-sm">

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

                <p className="text-sm">

                  Total

                </p>

                <p className="font-semibold">

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