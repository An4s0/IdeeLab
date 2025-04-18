"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon } from "../icons";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 border-b border-outline bg-background/80 backdrop-blur">
      <div className="flex justify-between items-center p-2 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={34} height={34} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-outline/20 cursor-pointer"
          >
            {theme === "dark" ? (
              <SunIcon size={20} className="text-yellow-500" />
            ) : (
              <MoonIcon size={20} className="text-gray-800" />
            )}
          </div>
          <Link
            href="/sign-in"
            className="inline-flex items-center py-1 px-5 rounded-md border border-primary/50 bg-primary/40 text-sm hover:bg-primary/60 hover:border-primary"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
