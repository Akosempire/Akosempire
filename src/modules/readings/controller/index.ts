import { NextResponse } from "next/server";
import { readingsService } from "../service";

export const listReadingsController = async () => {
  const data = await readingsService.list();
  return NextResponse.json({ data });
};
