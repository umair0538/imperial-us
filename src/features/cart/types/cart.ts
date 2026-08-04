export interface CartProduct {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  price: number;
  stock: number;
}

export interface CartItem {
  id: string;
  quantity: number;
  product: CartProduct;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}