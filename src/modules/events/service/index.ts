import { eventsRepository } from "../repository";

export const eventsService = {
  async list() {
    return eventsRepository.list();
  }
};
