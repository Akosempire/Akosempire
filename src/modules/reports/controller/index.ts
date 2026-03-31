import { NextResponse } from "next/server";
import { reportsService } from "../service";

export const listReportsController = async () => {
  const data = await reportsService.list();
  return NextResponse.json({ data });
};
