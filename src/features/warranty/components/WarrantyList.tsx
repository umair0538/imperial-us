import WarrantyCard from "./WarrantyCard";

import { WarrantySummary } from "../types/warranty";

interface Props {
  warranties: WarrantySummary[];
}

export default function WarrantyList({
  warranties,
}: Props) {
  return (
    <div className="space-y-8">

      {warranties.length === 0 ? (

        <div className="rounded-xl border border-zinc-800 py-20 text-center">

          <h2 className="text-2xl font-serif">
            No Warranties
          </h2>

          <p className="mt-3 text-zinc-500">
            Your warranties will appear here
            after purchasing a watch.
          </p>

        </div>

      ) : (

        <div className="grid gap-6">

          {warranties.map((warranty) => (

            <WarrantyCard
              key={warranty.id}
              warranty={warranty}
            />

          ))}

        </div>

      )}

    </div>
  );
}