import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import user from "@/lib/user";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const userData = await user.me(token);

  if (!userData.success) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!userData.data?.verified) {
    return NextResponse.redirect(new URL("/verify-email", request.url));
  }
}

export const config = {
  matcher: [],
};
