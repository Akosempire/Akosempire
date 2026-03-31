import { prisma } from "@/src/lib/prisma";

export const notificationsRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
