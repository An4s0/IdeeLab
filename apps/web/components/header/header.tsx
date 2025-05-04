"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setUserDropdown(false);
      }

      setIsAuthenticated(true);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`${fixed ? "fixed" : "block"} w-full top-0 z-50 border-b border-outline backdrop-blur h-auto bg-background/80`}
    >
      <div className="flex justify-between items-center p-2 px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={34}
              height={34}
              className="h-10 w-10"
            />
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="relative">
            <div
              className="cursor-pointer flex items-center justify-center gap-3"
              onClick={() => setUserDropdown(!userDropdown)}
            >
              <Image
                src="/picture.png"
                alt="User Avatar"
                width={34}
                height={34}
                className="h-10 w-10 rounded-full"
              />
            </div>

            {userDropdown && (
              <div
                className="absolute right-0 mt-4 rounded-lg shadow-xl bg-background border border-outline z-50 overflow-hidden w-[200px]"
                ref={dropdownRef}
              >
                <div className="flex flex-col">
                  <div className="p-2 flex flex-col gap-2">
                    <Link href="/profile">
                      <div className="flex items-center space-x-3 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-1 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                          <AiOutlineUser className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          Profile
                        </span>
                      </div>
                    </Link>
                    <Link href="/settings">
                      <div className="flex items-center space-x-3 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-1 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                          <AiOutlineSetting className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          Settings
                        </span>
                      </div>
                    </Link>
                    <Link href="/logout">
                      <div className="flex items-center space-x-3 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-1 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                          <HiOutlineLogout className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          Logout
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="items-center py-1 px-5 rounded-md border border-primary/50 bg-primary/40 text-sm hover:bg-primary/60 hover:border-primary inline-flex"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
