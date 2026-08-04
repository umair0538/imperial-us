import { CartRepository } from "../repositories/cart.repository";
import { OrderRepository } from "../repositories/order.repository";
import type { ShippingAddress } from "@/features/checkout/types/checkout";
import type { Result } from "../types/result";

export class OrderService {
  static async placeOrder(
    userId: string,
    address: ShippingAddress
  ) {

    const cart =
      await CartRepository.getCart(userId);

    if (!cart || !cart.items) {
      return {
        success: false,
        message: "Your cart is empty.",
      };
    }

    console.log(cart);

    if (cart.items.length === 0) {
      return {
        success: false,
        message: "Your cart is empty.",
      };
    }

    const subtotal = cart.items.reduce(
      (total, item) =>
        total +
        (item.product.price ??
          item.product.price) *
          item.quantity,
      0
    );

    const shipping = 0;

    const tax = 0;

    const discount = 0;

    const total =
      subtotal +
      shipping +
      tax -
      discount;

    const orderNumber =
      await this.generateOrderNumber();

    const order =
      await OrderRepository.createOrder({
        userId,
        orderNumber,
        subtotal,
        shipping,
        tax,
        discount,
        total,
        paymentStatus: "pending",
        paymentProvider: "COD",
        shippingAddress: address,
      });

    if (order.error) {
      return {
        success: false,
        message:
          "Unable to create order.",
      };
    }

    await OrderRepository.createOrderItems(
      order.data.id,
      cart.items
    );

    await OrderRepository.createOrderEvent({
        orderId: order.data.id,
        status: "pending",
        title: "Order Placed",
        description:
            "Your order has been successfully received.",
    });

    await CartRepository.clearCart(userId);

    return {
      success: true,
      message: "Order created successfully",
      data: {
        orderId: order.data.id,
      },
    };
  }

  static async generateOrderNumber() {
    const date = new Date();

    const y = date.getFullYear();

    const m = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const d = String(
      date.getDate()
    ).padStart(2, "0");

    const random = Math.floor(
      100000 + Math.random() * 900000
    );

    return `IMP-${y}${m}${d}-${random}`;
  }

  static async getOrder(orderId: string, userId: string) {
    return OrderRepository.findById(orderId, userId);
  }

  static async getOrders(userId: string) {
    const orders = await OrderRepository.findCurrentUserOrders(userId);
    return orders.data;
  }
}