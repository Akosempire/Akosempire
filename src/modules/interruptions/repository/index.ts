import { prisma } from "@/src/lib/prisma";
import { NotificationOrchestrator } from "@/src/services/notification-orchestrator";
import type { z } from "zod";
import { closeInterruptionSchema, openInterruptionSchema } from "../schemas";

type OpenInput = z.infer<typeof openInterruptionSchema>;
type CloseInput = z.infer<typeof closeInterruptionSchema>;

export const interruptionsRepository = {
  async open(input: OpenInput, userId: string) {
    const interruption = await prisma.interruption.create({
      data: {
        ...input,
        status: "OPEN",
        openedById: userId,
        statusHistory: {
          create: { status: "OPEN", changedById: userId, summary: "Interruption opened" }
        }
      }
    });

    await NotificationOrchestrator.dispatch("INTERRUPTION_OPENED", {
      interruptionId: interruption.id,
      stationId: interruption.stationId
    });

    return interruption;
  },

  async close(input: CloseInput, userId: string) {
    const interruption = await prisma.interruption.update({
      where: { id: input.interruptionId },
      data: {
        status: "CLOSED",
        restorationTime: input.restorationTime,
        closingRemarks: input.closingRemarks,
        finalStatusSummary: input.finalStatusSummary,
        statusHistory: {
          create: { status: "CLOSED", changedById: userId, summary: input.finalStatusSummary }
        }
      }
    });

    await NotificationOrchestrator.dispatch("INTERRUPTION_CLOSED", {
      interruptionId: interruption.id,
      stationId: interruption.stationId
    });

    return interruption;
  }
};
