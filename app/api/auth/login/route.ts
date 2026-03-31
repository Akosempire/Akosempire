import { NextResponse } from "next/server";
import { loginSchema } from "@/src/modules/auth/schemas";
import { authService } from "@/src/modules/auth/service";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = loginSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const result = await authService.login(parsed.data);
  if (!result) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ user: { id: result.user.id, email: result.user.email, role: result.user.role.code } });
  response.cookies.set("niso_session", result.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });
  return response;
}
