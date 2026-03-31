import { NextResponse } from "next/server";
import { permissionsService } from "../service";

export const listPermissionsController = async () => {
  const data = await permissionsService.list();
  return NextResponse.json({ data });
};
