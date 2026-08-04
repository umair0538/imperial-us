import { z } from "zod";

export const profileSchema = z.object({

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

});

export type ProfileForm =
    z.infer<typeof profileSchema>;