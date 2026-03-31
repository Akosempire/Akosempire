import { z } from "zod";

export const reportsSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(120).optional(),
  createdAt: z.coerce.date().optional()
});

export type ReportsInput = z.infer<typeof reportsSchema>;
