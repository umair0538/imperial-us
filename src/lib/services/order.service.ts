import { CartRepository } from "../repositories/cart.repository";
import { OrderRepository } from "../repositories/order.repository";
import type { ShippingAddress } from "@/features/checkout/types/checkout";
import type { Result } from "../types/result";
import { AddressService } from "@/lib/services/address.service";
import { WarrantyService } from "@/lib/services/warranty.service";

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

    const { data: addresses } =
      await AddressService.getAddresses(userId);

    if (addresses && addresses.length === 0) {
      await AddressService.createAddress(userId, {
        label: "Home",
        firstName: address.firstName,
        lastName: address.lastName,
        phone: address.phone,
        addressLine1: address.address1,
        addressLine2: address.address2,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
        isDefault: true,
      });
    }

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

    const orderItems = await OrderRepository.createOrderItems(
      order.data.id,
      cart.items
    );

    if (orderItems.error) {
      return {
        success: false,
        message:
          "Unable to create order items.",
      };
    }

    await OrderRepository.createOrderEvent({
        orderId: order.data.id,
        status: "pending",
        title: "Order Placed",
        description:
            "Your order has been successfully received.",
    });

    for (const item of orderItems.data) {
      await WarrantyService.createWarranty(
        order.data.id,
        item.id,
        userId
      );
  }

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