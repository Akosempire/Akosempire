import { NextResponse } from "next/server";
import { interruptionsService } from "../service";

export const listInterruptionsController = async () => {
  const data = await interruptionsService.list();
  return NextResponse.json({ data });
};
