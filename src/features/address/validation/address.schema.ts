import { z } from "zod";

export const addressSchema = z.object({

  label: z
    .string()
    .min(2)
    .max(30),

  firstName: z
    .string()
    .trim()
    .min(2)
    .max(50),

  lastName: z
    .string()
    .trim()
    .min(2)
    .max(50),

  phone: z
    .string()
    .trim()
    .min(10)
    .max(20),

  addressLine1: z
    .string()
    .trim()
    .min(5),

  addressLine2: z
    .string()
    .optional(),

  city: z
    .string()
    .trim()
    .min(2),

  state: z
    .string()
    .trim()
    .min(2),

  postalCode: z
    .string()
    .trim()
    .min(3),

  country: z
    .string()
    .trim()
    .min(2),

  isDefault: z.boolean(),

});

export type AddressFormData =
  z.infer<typeof addressSchema>;