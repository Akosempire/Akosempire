import { z } from "zod";

export const scadaSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(120).optional(),
  createdAt: z.coerce.date().optional()
});

export type ScadaInput = z.infer<typeof scadaSchema>;
