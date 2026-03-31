import { NextResponse } from "next/server";
import { devicesService } from "../service";

export const listDevicesController = async () => {
  const data = await devicesService.list();
  return NextResponse.json({ data });
};
