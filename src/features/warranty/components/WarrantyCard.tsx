import Image from "next/image";
import Link from "next/link";

import { ShieldCheck } from "lucide-react";

import { WarrantySummary } from "../types/warranty";

interface Props {
  warranty: WarrantySummary;
}

export default function WarrantyCard({
  warranty,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111111] p-6">

      <div className="flex gap-6">

        <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-zinc-900">

          <Image
            src={warranty.order_items.image}
            alt={warranty.order_items.product_name}
            fill
            className="object-cover"
          />

        </div>

        <div className="flex flex-1 flex-col justify-between">

          <div>

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={18}
                className="text-[#C8A24B]"
              />

              <h2 className="text-xl font-medium">

                {warranty.order_items.product_name}

              </h2>

            </div>

            <p className="mt-2 text-sm text-zinc-500">

              Warranty #

              {" "}

              {warranty.warranty_number}

            </p>

            <p className="mt-1 text-sm text-zinc-500">

              Order #

              {" "}

              {warranty.order_number}

            </p>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <div>

              <p className="text-sm text-zinc-500">

                Expires

              </p>

              <p className="text-white">

                {new Date(
                  warranty.expiry_date
                ).toLocaleDateString()}
              </p>

            </div>

            <span className="rounded-full bg-green-600/20 px-3 py-1 text-sm text-green-400">

              {warranty.status}

            </span>

          </div>

        </div>

        <div className="flex items-center">

          <Link
            href={`/account/warranty/${warranty.id}`}
            className="rounded-lg border border-[#C8A24B] px-5 py-3 text-[#C8A24B] hover:bg-[#C8A24B] hover:text-black"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}