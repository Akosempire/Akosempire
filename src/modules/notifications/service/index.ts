import { notificationsRepository } from "../repository";

export const notificationsService = {
  async list() {
    return notificationsRepository.list();
  }
};
