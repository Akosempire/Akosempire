import { readingsRepository } from "../repository";
import type { UpsertReadingBatchInput } from "../schemas";

export const readingsService = {
  upsertBatch(input: UpsertReadingBatchInput, userId: string) {
    return readingsRepository.upsertBatch(input, userId);
  }
};
