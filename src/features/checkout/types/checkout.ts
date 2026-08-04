export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  address1: string;
  address2?: string;

  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface CheckoutItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Checkout {
  items: CheckoutItem[];

  subtotal: number;

  shipping: number;

  tax: number;

  discount: number;

  total: number;

  address: ShippingAddress;
}