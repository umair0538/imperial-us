import { AddressRepository } from "@/lib/repositories/address.repository";
import { AddressFormData } from "@/features/address/validation/address.schema";

export class AddressService {
  static async getAddresses(userId: string) {
    return AddressRepository.getAddresses(userId);
  }

  static async createAddress(
    userId: string,
    address: AddressFormData
  ) {
    const { data: addresses, error } =
      await AddressRepository.getAddresses(userId);

    if (error) {
      return { error };
    }

    // First address automatically becomes default
    const isDefault =
      addresses.length === 0 || address.isDefault;

    if (isDefault) {
      await AddressRepository.clearDefaultAddresses(
        userId
      );
    }

    return AddressRepository.createAddress(userId, {
      label: address.label,
      first_name: address.firstName,
      last_name: address.lastName,
      phone: address.phone,
      address_line1: address.addressLine1,
      address_line2: address.addressLine2,
      city: address.city,
      state: address.state,
      postal_code: address.postalCode,
      country: address.country,
      is_default: isDefault,
    });
  }

  static async updateAddress(
    userId: string,
    addressId: string,
    address: AddressFormData
  ) {
    if (address.isDefault) {
      await AddressRepository.clearDefaultAddresses(
        userId
      );
    }

    return AddressRepository.updateAddress(
      userId,
      addressId,
      {
        label: address.label,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        address_line1: address.addressLine1,
        address_line2: address.addressLine2,
        city: address.city,
        state: address.state,
        postal_code: address.postalCode,
        country: address.country,
        is_default: address.isDefault,
      }
    );
  }

  static async deleteAddress(
    userId: string,
    addressId: string
  ) {
    const { data: address } =
      await AddressRepository.getAddress(addressId, userId);

    if (!address) {
      return {
        error: {
          message: "Address not found",
        },
      };
    }

    await AddressRepository.deleteAddress(
      addressId,
      userId
    );

    // If the deleted address was the default,
    // make the newest remaining address the default.
    if (address.is_default) {
      const { data: remaining } =
        await AddressRepository.getAddresses(
          userId
        );

      if (remaining && remaining.length > 0) {
        await AddressRepository.setDefaultAddress(
          remaining[0].id,
          userId
        );
      }
    }

    return {};
  }

  static async setDefaultAddress(
    userId: string,
    addressId: string
  ) {
    await AddressRepository.clearDefaultAddresses(
      userId
    );

    return AddressRepository.setDefaultAddress(
      addressId,
      userId
    );
  }

  static async getAddress(
    addressId: string,
    userId: string
  ) {
    const { data, error } =
      await AddressRepository.getAddress(
        userId,
        addressId
      );

    if (error) {
      return {
        data: null,
        error,
      };
    }

    return data;
  }

  static async getDefaultAddress(userId: string) {
    return AddressRepository.getDefaultAddress(userId);
  }
}