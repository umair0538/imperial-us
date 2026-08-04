import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../actions/get-order";

export function useOrder(orderId: string) {
  const {
    data: order = null,
    isLoading,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });

  return {
    order,

    isLoading,
  };
}