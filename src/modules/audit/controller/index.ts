import { NextResponse } from "next/server";
import { auditService } from "../service";

export const listAuditController = async () => {
  const data = await auditService.list();
  return NextResponse.json({ data });
};
