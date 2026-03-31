import { NextResponse } from "next/server";
import { operationsService } from "../service";

export const listOperationsController = async () => {
  const data = await operationsService.list();
  return NextResponse.json({ data });
};
