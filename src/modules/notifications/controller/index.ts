import { NextResponse } from "next/server";
import { notificationsService } from "../service";

export const listNotificationsController = async () => {
  const data = await notificationsService.list();
  return NextResponse.json({ data });
};
