import { reportsRepository } from "../repository";

export const reportsService = {
  async list() {
    return reportsRepository.list();
  }
};
