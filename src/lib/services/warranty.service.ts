import { addYears } from "date-fns";

import { WarrantyRepository } from "../repositories/warranty.repository";

export class WarrantyService {

  static async createWarranty(
    orderId: string,
    orderItemId: string,
    userId: string
  ) {

    const today = new Date();

    const expiry =
      addYears(today, 2);

    const warrantyNumber =
      await this.generateWarrantyNumber();

    return WarrantyRepository.createWarranty(
      orderId,
      orderItemId,
      userId,
      warrantyNumber,
      today.toISOString(),
      expiry.toISOString(),
    );

  }

  static async generateWarrantyNumber() {

    return (
      "IUS-WAR-" +
      Date.now()
    );

  }

  static async getUserWarranties(
    userId: string
  ) {
    return WarrantyRepository.getUserWarranties(
      userId
    );
  }

  static async getWarranty(
    userId: string,
    warrantyId: string
  ) {
    return WarrantyRepository.getWarranty(
      userId,
      warrantyId
    );
  }
}