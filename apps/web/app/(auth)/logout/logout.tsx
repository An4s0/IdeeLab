'use client'
import { useEffect } from "react";
import cookies from "@/lib/cookies";

export default function Logout() {
    useEffect(() => {
        cookies.remove("token");
    
        window.location.href = "/";
    }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Logging out...</h1>
      <p className="mt-4">You are being logged out. Please wait.</p>
    </div>
  );
}