import { NextResponse } from "next/server";
import { settingsService } from "../service";

export const listSettingsController = async () => {
  const data = await settingsService.list();
  return NextResponse.json({ data });
};
