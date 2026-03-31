import { permissionsRepository } from "../repository";

export const permissionsService = {
  async list() {
    return permissionsRepository.list();
  }
};
