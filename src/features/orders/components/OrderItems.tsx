"use client";

import Image from "next/image";
import Link from "next/link";

interface Review {
  id: string;
}

interface OrderItem {
  id: string;
  product_name: string;
  image: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  review: Review
}

interface Props {
  items: OrderItem[];
  orderId: string;
}

export default function OrderItems({
  items,
  orderId,
}: Props) {
  return (
    <section className="rounded-xl border p-8">

      <h2 className="mb-8 font-serif text-2xl">
        Order Items
      </h2>

      <div className="divide-y">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 py-6"
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.product_name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">
                {item.product_name}
              </h3>

              <p className="mt-2 text-sm">
                Quantity: {item.quantity}
              </p>

              <p className="mt-1 text-sm">
                Unit Price: PKR{" "}
                {Number(item.unit_price).toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold">
                PKR{" "}
                {Number(item.total_price).toLocaleString()}
              </p>
            </div>

            {
                item.review
                    ? (
                        <Link
                            href={`/account/reviews/${item.review.id}/edit`}
                            className="hover:[background-color:var(--gold)]"
                        >
                            Edit Review
                        </Link>
                    )
                    : (
                        <Link
                            href={`/account/orders/${orderId}/review/${item.id}`}
                            className="hover:[background-color:var(--gold)]"
                        >
                            Leave Review
                        </Link>
                    )
            }
          </div>
        ))}

      </div>
    </section>
  );
}