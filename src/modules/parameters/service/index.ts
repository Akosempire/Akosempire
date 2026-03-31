import { parametersRepository } from "../repository";

export const parametersService = {
  async list() {
    return parametersRepository.list();
  }
};
