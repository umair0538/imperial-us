import { Address } from "@/features/address/types/address";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  image: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  review?: {
    id: string;
    rating: number;
  };
}

export interface ShippingAddress {
  first_name: string;
  last_name: string;
  phone: string;

  address_line1: string;
  address_line2?: string;

  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface Order {
  id: string;

  order_number: string;

  status: OrderStatus;

  subtotal: number;
  shipping_cost: number;
  discount: number;
  total: number;

  payment_method: "cod";
  payment_status: "pending";

  shipping_address: ShippingAddress;

  created_at: string;
  updated_at: string;

  items: OrderItem[];
}