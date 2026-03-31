import { operationsRepository } from "../repository";

export const operationsService = {
  async list() {
    return operationsRepository.list();
  }
};
