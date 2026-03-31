import { NextResponse } from "next/server";
import { parametersService } from "../service";

export const listParametersController = async () => {
  const data = await parametersService.list();
  return NextResponse.json({ data });
};
