import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? "dev-secret");

export type SessionUser = {
  userId: string;
  roleCode: string;
};

export const signToken = async (payload: SessionUser): Promise<string> => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(secret);
};

export const verifyToken = async (token: string): Promise<SessionUser | null> => {
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as SessionUser;
  } catch {
    return null;
  }
};
