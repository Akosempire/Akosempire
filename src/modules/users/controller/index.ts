import { NextResponse } from "next/server";
import { usersService } from "../service";

export const listUsersController = async () => {
  const data = await usersService.list();
  return NextResponse.json({ data });
};
