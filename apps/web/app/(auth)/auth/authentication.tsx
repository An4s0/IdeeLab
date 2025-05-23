"use client";
import { useEffect } from "react";
import cookies from "@/lib/cookies";
import Header from "@/components/header";

export default function AuthenticationPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const { searchParams } = new URL(window.location.href);
    const token = searchParams.get("token");
    if (token) {
      cookies.set("token", token, 7);
      window.location.href = "/";
    }
  }, []);

  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold">Authentication</h1>
        <p className="mt-4 text-subtle">Redirecting...</p>
      </div>
    </main>
  );
}
