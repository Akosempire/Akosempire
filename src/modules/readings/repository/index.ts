import { prisma } from "@/src/lib/prisma";
import type { UpsertReadingBatchInput } from "../schemas";

export const readingsRepository = {
  async upsertBatch(input: UpsertReadingBatchInput, userId: string) {
    return prisma.$transaction(async (tx) => {
      const batch = await tx.readingBatch.upsert({
        where: {
          stationId_readingHour: {
            stationId: input.stationId,
            readingHour: input.readingHour
          }
        },
        update: {
          shiftCode: input.shiftCode,
          updatedById: userId
        },
        create: {
          regionId: input.regionId,
          stationId: input.stationId,
          shiftCode: input.shiftCode,
          readingHour: input.readingHour,
          createdById: userId,
          updatedById: userId
        }
      });

      for (const entryPayload of input.entries) {
        const entry = await tx.readingEntry.upsert({
          where: {
            batchId_deviceId: { batchId: batch.id, deviceId: entryPayload.deviceId }
          },
          update: {},
          create: { batchId: batch.id, deviceId: entryPayload.deviceId }
        });

        for (const value of entryPayload.values) {
          await tx.readingEntryValue.upsert({
            where: {
              entryId_parameterDefinitionId: {
                entryId: entry.id,
                parameterDefinitionId: value.parameterDefinitionId
              }
            },
            update: {
              numericValue: value.numericValue,
              conditionCodeId: value.conditionCodeId,
              note: value.note
            },
            create: {
              entryId: entry.id,
              parameterDefinitionId: value.parameterDefinitionId,
              numericValue: value.numericValue,
              conditionCodeId: value.conditionCodeId,
              note: value.note
            }
          });
        }
      }

      return batch;
    });
  }
};
