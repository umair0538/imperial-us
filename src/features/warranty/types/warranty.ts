export type WarrantyStatus =
  | "active"
  | "expired"
  | "void";

export interface Warranty {
  id: string;

  warranty_number: string;

  order_id: string;

  order_item_id: string;

  user_id: string;

  start_date: string;

  expiry_date: string;

  status: WarrantyStatus;

  created_at: string;
}