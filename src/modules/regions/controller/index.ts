import { NextResponse } from "next/server";
import { regionsService } from "../service";

export const listRegionsController = async () => {
  const data = await regionsService.list();
  return NextResponse.json({ data });
};
