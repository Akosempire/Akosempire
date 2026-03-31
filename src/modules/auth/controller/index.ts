import { NextResponse } from "next/server";
import { authService } from "../service";

export const listAuthController = async () => {
  const data = await authService.list();
  return NextResponse.json({ data });
};
