"use client";

import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../actions/get-orders";

export function useOrders() {

  const {
    data: orders = [],
    isLoading,
  } = useQuery({
    queryKey: ["account", "orders"],
    queryFn: () => getOrders(),
  });

  return {
    orders,

    isLoading,
  };
}