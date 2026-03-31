import { prisma } from "@/src/lib/prisma";

export const usersRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
