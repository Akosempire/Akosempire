import { z } from "zod";

export const usersSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(120).optional(),
  createdAt: z.coerce.date().optional()
});

export type UsersInput = z.infer<typeof usersSchema>;
