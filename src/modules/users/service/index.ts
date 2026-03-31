import { usersRepository } from "../repository";

export const usersService = {
  async list() {
    return usersRepository.list();
  }
};
