"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorBridgePage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const msg = params.get("msg");
    if (msg) {
      localStorage.setItem("auth_error", msg);
    }
    router.push("/login");
  }, []);

  return <p>Redirecting...</p>;
}