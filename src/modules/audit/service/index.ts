import { auditRepository } from "../repository";

export const auditService = {
  async list() {
    return auditRepository.list();
  }
};
