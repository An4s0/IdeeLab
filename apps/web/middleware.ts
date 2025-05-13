import { NextResponse, NextRequest } from "next/server";
import user from "@/lib/user";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const authPaths = ["/login", "/register"];
  if (authPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    const res = await user.verifyToken(token);
    if (res.success) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const res = await user.verifyToken(token);
  if (!res.success) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/challenges", "/login", "/register"],
};
