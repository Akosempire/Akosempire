import { prisma } from "@/src/lib/prisma";

export const settingsRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
