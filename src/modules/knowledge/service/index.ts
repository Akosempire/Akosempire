import { knowledgeRepository } from "../repository";

export const knowledgeService = {
  async list() {
    return knowledgeRepository.list();
  }
};
