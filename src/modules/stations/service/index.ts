import { stationsRepository } from "../repository";

export const stationsService = {
  async list() {
    return stationsRepository.list();
  }
};
