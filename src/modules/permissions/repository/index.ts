import { prisma } from "@/src/lib/prisma";

export const permissionsRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
