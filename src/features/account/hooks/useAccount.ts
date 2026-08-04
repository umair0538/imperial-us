"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { getDashboard } from "../actions/get-dashboard";

export function useAccount() {
  const queryClient = useQueryClient();

  const {
    data: dashboard = null,
    isLoading,
  } = useQuery({
    queryKey: ["account"],
    queryFn: getDashboard,
  });

  return {
    dashboard,
    isLoading,
  };
}