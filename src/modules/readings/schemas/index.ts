import { z } from "zod";

export const readingValueSchema = z.object({
  parameterDefinitionId: z.string().uuid(),
  numericValue: z.number().optional(),
  conditionCodeId: z.string().uuid().optional(),
  note: z.string().max(255).optional()
});

export const readingEntrySchema = z.object({
  deviceId: z.string().uuid(),
  values: z.array(readingValueSchema).min(1)
});

export const upsertReadingBatchSchema = z.object({
  regionId: z.string().uuid(),
  stationId: z.string().uuid(),
  shiftCode: z.enum(["A", "B", "C"]),
  readingHour: z.coerce.date(),
  entries: z.array(readingEntrySchema).min(1)
});

export type UpsertReadingBatchInput = z.infer<typeof upsertReadingBatchSchema>;
