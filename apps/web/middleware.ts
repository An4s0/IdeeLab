import { NextResponse, NextRequest } from "next/server";
import user from "@/lib/user";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isAuthPage = ["/login", "/register"].some((path) =>
    url.pathname.startsWith(path),
  );

  if (!token) {
    if (isAuthPage) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", url));
  }

  const res = await user.verifyToken(token);

  if (!res.success) {
    return NextResponse.redirect(new URL("/login", url));
  }

  const resVerify = await user.get();
  if (!resVerify.data?.isVerified) {
    return NextResponse.redirect(new URL("/verify-email", url));
  }

  if (isAuthPage) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/challenges", "/login", "/register"],
};
