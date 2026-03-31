import { rolesRepository } from "../repository";

export const rolesService = {
  async list() {
    return rolesRepository.list();
  }
};
