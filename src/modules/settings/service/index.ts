import { settingsRepository } from "../repository";

export const settingsService = {
  async list() {
    return settingsRepository.list();
  }
};
