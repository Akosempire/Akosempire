import { NextResponse } from "next/server";
import { messagingService } from "../service";

export const listMessagingController = async () => {
  const data = await messagingService.list();
  return NextResponse.json({ data });
};
