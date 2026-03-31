import { NextResponse } from "next/server";
import { closeInterruptionSchema, openInterruptionSchema } from "@/src/modules/interruptions/schemas";
import { interruptionsService } from "@/src/modules/interruptions/service";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = openInterruptionSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }
  const interruption = await interruptionsService.open(parsed.data, payload.userId ?? "00000000-0000-0000-0000-000000000000");
  return NextResponse.json({ interruption });
}

export async function PATCH(request: Request) {
  const payload = await request.json();
  const parsed = closeInterruptionSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }
  const interruption = await interruptionsService.close(parsed.data, payload.userId ?? "00000000-0000-0000-0000-000000000000");
  return NextResponse.json({ interruption });
}
