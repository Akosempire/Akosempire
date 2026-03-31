import { devicesRepository } from "../repository";

export const devicesService = {
  async list() {
    return devicesRepository.list();
  }
};
