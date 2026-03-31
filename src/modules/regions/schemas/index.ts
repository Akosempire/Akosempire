import { z } from "zod";

export const regionsSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(120).optional(),
  createdAt: z.coerce.date().optional()
});

export type RegionsInput = z.infer<typeof regionsSchema>;
