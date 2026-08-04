import { AccountRepository } from "@/lib/repositories/account.repository";
import { ProfileForm } from "@/features/account/validation/profile.schema";

export class AccountService {
  static async getDashboard(userId: string) {

      const [
          profile,
          ordersCount,
          recentOrders,
      ] = await Promise.all([

          AccountRepository.getProfile(userId),

          AccountRepository.getOrderCount(userId),

          AccountRepository.getRecentOrders(userId),

      ]);

      return {

          profile: {
              ...profile.data,
              total_orders: ordersCount.count ?? 0,
          },

          recentOrders:
              recentOrders.data ?? [],

      };

  }

  static async getProfile(userId: string) {
      const profileData = await AccountRepository.getProfile(userId);

      if (profileData.data && profileData.data.id)
        return profileData.data;
      else
        return null;
  }

  static async updateProfile(
      userId: string,
      profile: ProfileForm
  ) {
      return AccountRepository.updateProfile(
          userId,
          profile
      );
  }
}