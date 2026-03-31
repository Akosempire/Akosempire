import { NextResponse } from "next/server";
import { rolesService } from "../service";

export const listRolesController = async () => {
  const data = await rolesService.list();
  return NextResponse.json({ data });
};
