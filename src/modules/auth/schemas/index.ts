import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const resetPasswordRequestSchema = z.object({
  email: z.string().email()
});

export type LoginInput = z.infer<typeof loginSchema>;
