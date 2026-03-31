import { prisma } from "@/src/lib/prisma";

export const rolesRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
