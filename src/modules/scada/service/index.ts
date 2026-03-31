import { scadaRepository } from "../repository";

export const scadaService = {
  async list() {
    return scadaRepository.list();
  }
};
