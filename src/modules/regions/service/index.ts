import { regionsRepository } from "../repository";

export const regionsService = {
  async list() {
    return regionsRepository.list();
  }
};
