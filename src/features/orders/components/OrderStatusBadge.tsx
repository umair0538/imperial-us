"use client";

interface Props {
  status: string;
}

const STATUS = {
  pending: {
    label: "Pending",
    className:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  confirmed: {
    label: "Confirmed",
    className:
      "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  packed: {
    label: "Packed",
    className:
      "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  shipped: {
    label: "Shipped",
    className:
      "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  delivered: {
    label: "Delivered",
    className:
      "bg-green-500/10 text-green-400 border-green-500/30",
  },
  cancelled: {
    label: "Cancelled",
    className:
      "bg-red-500/10 text-red-400 border-red-500/30",
  },
} as const;

export default function OrderStatusBadge({
  status,
}: Props) {
  const badge =
    STATUS[status as keyof typeof STATUS] ??
    STATUS.pending;

  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-medium ${badge.className}`}
    >
      {badge.label}
    </span>
  );
}