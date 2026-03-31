import { z } from "zod";

export const rolesSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(120).optional(),
  createdAt: z.coerce.date().optional()
});

export type RolesInput = z.infer<typeof rolesSchema>;
