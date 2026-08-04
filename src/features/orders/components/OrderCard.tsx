"use client";

import Image from "next/image";
import Link from "next/link";
import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  order: any;
}

export default function OrderCard({
  order,
}: Props) {
  const item = order.order_items[0];

  if (!item)
    return ("");

  return (

    <div className="rounded-xl border border-zinc-800 bg-[#111111] p-6">

      <div className="flex gap-6">

        <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-zinc-900">

          <Image
            src={item.image}
            alt={item.product_name}
            fill
            className="object-cover"
          />

        </div>

        <div className="flex flex-1 flex-col justify-between">

          <div>

            <h2 className="text-xl font-medium">
              {item.product_name}
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Order #{order.order_number}
            </p>

            <p className="mt-2 text-sm text-zinc-500">

              {new Date(
                order.created_at
              ).toLocaleDateString("en-PK")}

            </p>

          </div>

          <div className="mt-5 flex items-center justify-between">

            <OrderStatusBadge
              status={order.status}
            />

            <p className="font-semibold text-[#C8A24B]">

              PKR {Number(order.total).toLocaleString()}

            </p>

          </div>

        </div>

        <div className="flex items-center">

          <Link
            href={`/account/orders/${order.id}`}
            className="
              rounded-lg
              border
              border-[#C8A24B]
              px-5
              py-3
              text-[#C8A24B]
              transition
              hover:bg-[#C8A24B]
              hover:text-black
            "
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

  );

}