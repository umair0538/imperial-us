import TimelineItem from "./TimelineItem";

interface Props {
  status:
    | "pending"
    | "confirmed"
    | "packed"
    | "shipped"
    | "delivered"
    | "cancelled";
}

const steps = [
  {
    key: "pending",
    title: "Order Received",
    description:
      "We've received your order and it's awaiting confirmation.",
  },
  {
    key: "confirmed",
    title: "Order Confirmed",
    description:
      "Your order has been confirmed and is being prepared.",
  },
  {
    key: "packed",
    title: "Carefully Packed",
    description:
      "Your Imperial US timepiece has been packed securely.",
  },
  {
    key: "shipped",
    title: "Shipped",
    description:
      "Your package is on its way.",
  },
  {
    key: "delivered",
    title: "Delivered",
    description:
      "Your order has been delivered successfully.",
  },
];

export default function OrderTimeline({
  status,
}: Props) {
  const currentIndex = steps.findIndex(
    (step) => step.key === status
  );

  if (status === "cancelled") {
    return (
      <section className="rounded-xl border border-red-500 bg-red-500/10 p-8">
        <h2 className="font-serif text-2xl text-red-400">
          Order Cancelled
        </h2>

        <p className="mt-4 text-zinc-300">
          This order has been cancelled. If you have any questions,
          please contact our support team.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-zinc-800 bg-[#111] p-8">
      <h2 className="mb-8 font-serif text-2xl">
        Order Progress
      </h2>

      {steps.map((step, index) => {
        let state: "completed" | "current" | "upcoming";

        if (index < currentIndex) {
          state = "completed";
        } else if (index === currentIndex) {
          state = "current";
        } else {
          state = "upcoming";
        }

        return (
          <TimelineItem
            key={step.key}
            title={step.title}
            description={step.description}
            state={state}
            isLast={index === steps.length - 1}
          />
        );
      })}
    </section>
  );
}