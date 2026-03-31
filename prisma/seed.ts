import bcrypt from "bcryptjs";
import { PrismaClient, ShiftCode } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const permissions = [
    "readings.create",
    "readings.update",
    "interruptions.create",
    "interruptions.close",
    "operations.manage",
    "events.create",
    "messages.send",
    "knowledge.manage",
    "admin.manage"
  ];

  for (const code of permissions) {
    await prisma.permission.upsert({
      where: { code },
      update: {},
      create: { code, name: code }
    });
  }

  const roleCodes = [
    "ICT_ADMIN",
    "REGIONAL_ADMIN",
    "STATION_ADMIN",
    "SUPERVISOR",
    "OPERATOR",
    "VIEWER",
    "KNOWLEDGE_ADMIN"
  ];

  for (const code of roleCodes) {
    await prisma.role.upsert({ where: { code }, update: {}, create: { code, name: code.replaceAll("_", " ") } });
  }

  const region = await prisma.region.upsert({
    where: { code: "NC" },
    update: {},
    create: { code: "NC", name: "North Central" }
  });

  const station = await prisma.station.upsert({
    where: { code: "JEB" },
    update: {},
    create: { code: "JEB", name: "Jebba", regionId: region.id }
  });

  const deviceTypes = ["330kV Circuits", "132kV Circuits", "33kV Feeders", "Transformers", "Reactors"];
  const typeMap: Record<string, string> = {};
  for (const d of deviceTypes) {
    const t = await prisma.deviceType.upsert({ where: { code: d.toUpperCase().replaceAll(" ", "_") }, update: {}, create: { code: d.toUpperCase().replaceAll(" ", "_"), name: d } });
    typeMap[d] = t.id;
  }

  const devices = [
    { code: "2JEB-SGB1", name: "Jebba SGB1", type: "330kV Circuits", voltage: "330kV" },
    { code: "2JEB-SGB2", name: "Jebba SGB2", type: "330kV Circuits", voltage: "330kV" },
    { code: "JEB-TR01", name: "Jebba Transformer 01", type: "Transformers", voltage: "132kV" }
  ];

  for (const [sortOrder, d] of devices.entries()) {
    await prisma.device.upsert({
      where: { uniqueCode: d.code },
      update: {},
      create: {
        uniqueCode: d.code,
        displayName: d.name,
        stationId: station.id,
        regionId: region.id,
        deviceTypeId: typeMap[d.type],
        voltageLevel: d.voltage,
        sortOrder
      }
    });
  }

  for (const code of [ShiftCode.A, ShiftCode.B, ShiftCode.C]) {
    await prisma.shift.upsert({ where: { code }, update: {}, create: { code, name: `Shift ${code}` } });
  }

  for (const c of [
    { code: "OS", description: "Out of Service" },
    { code: "CB_FAULT", description: "Circuit Breaker Fault" },
    { code: "TCN_MAINT", description: "TCN Maintenance" },
    { code: "DISCO_MAINT", description: "DISCO Maintenance" }
  ]) {
    await prisma.conditionCode.upsert({ where: { code: c.code }, update: {}, create: c });
  }

  for (const c of [
    { code: "PROTECTION_TRIP", description: "Protection trip" },
    { code: "LINE_FAULT", description: "Transmission line fault" }
  ]) {
    await prisma.interruptionCauseCode.upsert({ where: { code: c.code }, update: {}, create: c });
  }

  const category = await prisma.knowledgeCategory.upsert({ where: { name: "Operations Procedures" }, update: {}, create: { name: "Operations Procedures" } });
  await prisma.knowledgeArticle.upsert({
    where: { slug: "hourly-readings-handbook" },
    update: {},
    create: {
      categoryId: category.id,
      title: "Hourly Readings Handbook",
      slug: "hourly-readings-handbook",
      content: "Operational guidance for hour-by-hour readings and correction windows.",
      isPublished: true
    }
  });

  const operatorRole = await prisma.role.findUniqueOrThrow({ where: { code: "OPERATOR" } });
  const supervisorRole = await prisma.role.findUniqueOrThrow({ where: { code: "SUPERVISOR" } });

  const defaultPass = await bcrypt.hash("Niso@12345", 10);
  const operator = await prisma.user.upsert({
    where: { email: "operator@niso.local" },
    update: {},
    create: { email: "operator@niso.local", fullName: "Station Operator", passwordHash: defaultPass, roleId: operatorRole.id, forcePasswordChange: false }
  });

  await prisma.user.upsert({
    where: { email: "supervisor@niso.local" },
    update: {},
    create: { email: "supervisor@niso.local", fullName: "Station Supervisor", passwordHash: defaultPass, roleId: supervisorRole.id, forcePasswordChange: false }
  });

  await prisma.userScope.createMany({
    data: [{ userId: operator.id, regionId: region.id, stationId: station.id }],
    skipDuplicates: true
  });

  const thread = await prisma.messageThread.create({ data: { subject: "Shift handover" } });
  await prisma.message.create({
    data: {
      threadId: thread.id,
      senderId: operator.id,
      content: "1300 readings complete for SGB circuits.",
      priority: "NORMAL"
    }
  });
}

main().finally(async () => prisma.$disconnect());
