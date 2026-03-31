import type { z } from "zod";
import { closeInterruptionSchema, openInterruptionSchema } from "../schemas";
import { interruptionsRepository } from "../repository";

type OpenInput = z.infer<typeof openInterruptionSchema>;
type CloseInput = z.infer<typeof closeInterruptionSchema>;

export const interruptionsService = {
  open(input: OpenInput, userId: string) {
    return interruptionsRepository.open(input, userId);
  },
  close(input: CloseInput, userId: string) {
    return interruptionsRepository.close(input, userId);
  }
};
