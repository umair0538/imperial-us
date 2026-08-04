"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import OrderStatusBadge from "./OrderStatusBadge";
import type { Order } from "../types/order";

interface Props {
  order: Order;
}

export default function OrderHeader({ order }: Props) {
  return (
    <header className="rounded-xl border border-zinc-800 bg-[#111111] p-8">
      <Link
        href="/account/orders"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#C8A24B]"
      >
        <ArrowLeft size={16} />
        Back to Orders
      </Link>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="font-serif text-4xl text-white">
            Order #{order.order_number}
          </h1>

          <p className="mt-2 text-zinc-400">
            Placed on{" "}
            {new Date(order.created_at).toLocaleDateString(
              "en-PK",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <OrderStatusBadge status={order.status} />

          <div className="text-right">
            <p className="text-sm text-zinc-500">
              Order Total
            </p>

            <p className="text-2xl font-semibold text-[#C8A24B]">
              PKR {Number(order.total).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}