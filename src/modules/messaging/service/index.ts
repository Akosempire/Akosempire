import { messagingRepository } from "../repository";

export const messagingService = {
  async list() {
    return messagingRepository.list();
  }
};
