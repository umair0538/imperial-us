import { z } from "zod";

export const shippingAddressSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),

  address1: z
    .string()
    .min(5, "Address is too short"),

  address2: z
    .string()
    .optional(),

  city: z
    .string()
    .min(2, "City is required"),

  state: z
    .string()
    .min(2, "State/Province is required"),

  postalCode: z
    .string()
    .min(3, "Postal code is required"),

  country: z
    .string()
    .min(2, "Country is required"),
});

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;