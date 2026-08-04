"use client";

import { useMemo } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { loadCart } from "../actions/load-cart";
import { addToCart } from "../actions/add-to-cart";
import { updateCartItem } from "../actions/update-item";
import { removeCartItem } from "../actions/remove-item";
import { clearCart } from "../actions/clear-cart";
import { CartItem as CartItemType } from "../types/cart";

export function useCart() {
  const queryClient = useQueryClient();

  // Load cart
  const {
    data: cart = [],
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: loadCart,
    staleTime: 1000 * 60 * 5,
  });

  // ----------------------------
  // Add Item
  // ----------------------------

  const addMutation = useMutation({
    mutationFn: addToCart,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  // ----------------------------
  // Update Quantity
  // ----------------------------

  const updateMutation = useMutation({
    mutationFn: updateCartItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  // ----------------------------
  // Remove Item
  // ----------------------------

  const removeMutation = useMutation({
    mutationFn: removeCartItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  // ----------------------------
  // Clear Cart
  // ----------------------------

  const clearMutation = useMutation({
    mutationFn: clearCart,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  let subtotal = 0;
  let itemCount = 0;

  if (cart.items) {
    cart.items.map((item: CartItemType) => (
      subtotal += item.product.price * item.quantity,
      itemCount += item.quantity
    ));
  }

  return {
    cart,

    isLoading,

    addItem: addMutation.mutateAsync,

    updateQuantity: updateMutation.mutateAsync,

    removeItem: removeMutation.mutateAsync,

    clearCart: clearMutation.mutateAsync,

    isAdding: addMutation.isPending,

    isUpdating: updateMutation.isPending,

    isRemoving: removeMutation.isPending,

    isClearing: clearMutation.isPending,

    subtotal: subtotal,

    itemCount: itemCount,
  };
}