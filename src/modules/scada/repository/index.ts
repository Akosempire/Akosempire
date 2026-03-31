import { prisma } from "@/src/lib/prisma";

export const scadaRepository = {
  async list() {
    return prisma.auditLog.findMany({ take: 25, orderBy: { createdAt: "desc" } });
  }
};
