import { revalidatePath } from "next/cache";

export function invalidateCartCache() {
  revalidatePath("/cart");
  revalidatePath("/checkout");
}