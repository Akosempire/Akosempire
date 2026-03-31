import { NextResponse } from "next/server";
import { scadaService } from "../service";

export const listScadaController = async () => {
  const data = await scadaService.list();
  return NextResponse.json({ data });
};
