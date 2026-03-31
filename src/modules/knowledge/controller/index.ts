import { NextResponse } from "next/server";
import { knowledgeService } from "../service";

export const listKnowledgeController = async () => {
  const data = await knowledgeService.list();
  return NextResponse.json({ data });
};
