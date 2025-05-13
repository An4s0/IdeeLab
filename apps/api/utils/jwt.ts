import jwt, { JwtPayload } from "jsonwebtoken";

export function generateToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error("Token expired:", error);
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error("Invalid token:", error);
    } else {
      console.error("Token verification error:", error);
    }
    return null;
  }
}
