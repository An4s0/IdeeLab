"use client";
import { useEffect } from "react";
import cookies from "@/lib/cookies";
import Header from "@/components/header";

export default function Logout() {
  useEffect(() => {
    cookies.remove("token");

    window.location.href = "/";
  }, []);
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold">Logging out...</h1>
        <p className="mt-4">You are being logged out. Please wait.</p>
      </div>
    </main>
  );
}
