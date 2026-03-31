import { NextResponse } from "next/server";
import { eventsService } from "../service";

export const listEventsController = async () => {
  const data = await eventsService.list();
  return NextResponse.json({ data });
};
