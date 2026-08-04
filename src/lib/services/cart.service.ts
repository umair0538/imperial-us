import { CartRepository } from "@/lib/repositories/cart.repository";

export interface ServiceResult<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export class CartService {
  /**
   * Returns the current user's cart
   */
  static async getCart(userId: string): Promise<ServiceResult<any>> {
    try {
      const cart = await CartRepository.getCart(userId);

      return {
        success: true,
        data: cart,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Unable to load cart.",
      };
    }
  }

  /**
   * Add item to cart.
   * If already exists, increment quantity.
   */
  static async addItem(
    userId: string,
    productId: string,
    quantity = 1
  ): Promise<ServiceResult<any>> {
    try {
      // Check existing cart item
      const existing = await CartRepository.getCartItem(
        userId,
        productId
      );

      if (existing) {
        const updated = await CartRepository.updateQuantity(
          existing.id,
          existing.quantity + quantity
        );

        return {
          success: true,
          data: updated,
        };
      }

      const created = await CartRepository.addItem({
        user_id: userId,
        product_id: productId,
        quantity,
      });

      return {
        success: true,
        data: created,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Unable to add item to cart.",
      };
    }
  }

  /**
   * Update quantity.
   */
  static async updateQuantity(
    cartItemId: string,
    quantity: number
  ): Promise<ServiceResult<any>> {
    try {
      if (quantity <= 0) {
        await CartRepository.removeItem(cartItemId);

        return {
          success: true,
        };
      }

      const item = await CartRepository.updateQuantity(
        cartItemId,
        quantity
      );

      return {
        success: true,
        data: item,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Unable to update cart.",
      };
    }
  }

  /**
   * Remove item.
   */
  static async removeItem(
    cartItemId: string
  ): Promise<ServiceResult<void>> {
    try {
      await CartRepository.removeItem(cartItemId);

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Unable to remove item.",
      };
    }
  }

  /**
   * Empty cart.
   */
  static async clearCart(
    userId: string
  ): Promise<ServiceResult<void>> {
    try {
      await CartRepository.clearCart(userId);

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Unable to clear cart.",
      };
    }
  }
}