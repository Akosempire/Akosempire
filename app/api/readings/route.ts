import { NextResponse } from "next/server";
import { upsertReadingBatchSchema } from "@/src/modules/readings/schemas";
import { readingsService } from "@/src/modules/readings/service";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = upsertReadingBatchSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid reading payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const batch = await readingsService.upsertBatch(parsed.data, payload.userId ?? "00000000-0000-0000-0000-000000000000");
  return NextResponse.json({ batch });
}
