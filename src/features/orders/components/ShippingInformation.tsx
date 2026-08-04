"use client";

interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Props {
  address: ShippingAddress;
}

export default function ShippingInformation({
  address,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-[#111111] p-6">
      <h2 className="mb-6 font-serif text-2xl text-white">
        Shipping Information
      </h2>

      <div className="space-y-4 text-sm">

        <InfoRow
          label="Recipient"
          value={`${address.firstName} ${address.lastName}`}
        />

        <InfoRow
          label="Email"
          value={address.email}
        />

        <InfoRow
          label="Phone"
          value={address.phone}
        />

        <InfoRow
          label="Address"
          value={[
            address.address1,
            address.address2,
            `${address.city}, ${address.state}`,
            address.postalCode,
            address.country,
          ]
            .filter(Boolean)
            .join(", ")}
        />

      </div>
    </section>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-1 text-zinc-200">
        {value}
      </p>
    </div>
  );
}