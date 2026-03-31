import { prisma } from "@/src/lib/prisma";

export const parametersRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
