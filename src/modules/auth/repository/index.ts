import { prisma } from "@/src/lib/prisma";

export const authRepository = {
  findUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email }, include: { role: true } });
  },
  createAuditLog(userId: string | null, action: string, metadata?: Record<string, unknown>) {
    return prisma.auditLog.create({
      data: {
        userId,
        action,
        entityType: "AUTH",
        metadata: metadata ?? {}
      }
    });
  }
};
