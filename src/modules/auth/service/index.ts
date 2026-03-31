import bcrypt from "bcryptjs";
import { signToken } from "@/src/lib/auth";
import type { LoginInput } from "../schemas";
import { authRepository } from "../repository";

export const authService = {
  async login(input: LoginInput) {
    const user = await authRepository.findUserByEmail(input.email);
    if (!user || !user.isActive) {
      await authRepository.createAuditLog(null, "LOGIN_FAILED", { email: input.email, reason: "user_not_found" });
      return null;
    }

    const passwordMatch = await bcrypt.compare(input.password, user.passwordHash);
    if (!passwordMatch) {
      await authRepository.createAuditLog(user.id, "LOGIN_FAILED", { reason: "password_mismatch" });
      return null;
    }

    const token = await signToken({ userId: user.id, roleCode: user.role.code });

    await authRepository.createAuditLog(user.id, "LOGIN_SUCCESS", { role: user.role.code });
    return { token, user };
  }
};
