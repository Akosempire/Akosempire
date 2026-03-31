import { NextResponse } from "next/server";
import { stationsService } from "../service";

export const listStationsController = async () => {
  const data = await stationsService.list();
  return NextResponse.json({ data });
};
