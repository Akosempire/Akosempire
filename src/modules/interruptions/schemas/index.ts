import { z } from "zod";

export const openInterruptionSchema = z.object({
  regionId: z.string().uuid(),
  stationId: z.string().uuid(),
  deviceId: z.string().uuid(),
  voltageLevel: z.string().min(2),
  startTime: z.coerce.date(),
  causeCodeId: z.string().uuid(),
  loadLostMw: z.number().min(0).optional(),
  coordinatedBy: z.string().min(2),
  informedParty: z.string().min(2),
  remarks: z.string().max(500).optional(),
  shiftCode: z.enum(["A", "B", "C"])
});

export const closeInterruptionSchema = z.object({
  interruptionId: z.string().uuid(),
  restorationTime: z.coerce.date(),
  closingRemarks: z.string().max(500).optional(),
  finalStatusSummary: z.string().min(5)
});
