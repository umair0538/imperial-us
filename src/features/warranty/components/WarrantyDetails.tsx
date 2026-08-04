import Image from "next/image";
import Link from "next/link";

import { ShieldCheck } from "lucide-react";

interface Props {
  warranty: any;
}

export default function WarrantyDetails({
  warranty,
}: Props) {

  const product =
    warranty.order_items;

  return (

    <div className="space-y-8">

      <div className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

        <div className="flex gap-8">

          <div className="relative h-56 w-56 overflow-hidden rounded-lg">

            <Image
              src={product.image}
              alt={product.product_name}
              fill
              className="object-cover"
            />

          </div>

          <div className="flex-1">

            <div className="flex items-center gap-3">

              <ShieldCheck
                className="text-[#C8A24B]"
              />

              <h2 className="text-3xl font-serif">

                {product.product_name}

              </h2>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">

              <Info
                label="Warranty Number"
                value={warranty.warranty_number}
              />

              <Info
                label="Status"
                value={warranty.status}
              />

              <Info
                label="Order Number"
                value={warranty.orders.order_number}
              />

              <Info
                label="Purchase Date"
                value={new Date(
                  warranty.orders.created_at
                ).toLocaleDateString()}
              />

              <Info
                label="Warranty Start"
                value={new Date(
                  warranty.start_date
                ).toLocaleDateString()}
              />

              <Info
                label="Warranty Expiry"
                value={new Date(
                  warranty.expiry_date
                ).toLocaleDateString()}
              />

            </div>

            <div className="mt-10">

              <Link
                href={`/account/warranty/${warranty.id}/certificate`}
                className="rounded-lg bg-[#C8A24B] px-6 py-3 font-medium text-black"
              >
                Download Certificate
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

interface InfoProps {
  label: string;
  value: string;
}

function Info({
  label,
  value,
}: InfoProps) {
  return (
    <div>
      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <p className="mt-1 text-lg">
        {value}
      </p>
    </div>
  );
}