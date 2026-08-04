import OrderDetailsView from "@/features/orders/components/OrderDetailsView";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6">
      <OrderDetailsView orderId={id} />
    </main>
  );
}