"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon, IdeeLabIcon } from "../icons";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      if (
        mobileDropdownRef.current &&
        event.target instanceof Node &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 border-b border-outline backdrop-blur ${isMenuOpen ? "h-screen bg-background/95 overflow-auto" : "h-auto bg-background/80"}`}
    >
      <div className="flex justify-between items-center p-2 px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={34} height={34} />
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="inline-flex items-center rounded-md text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2"
                onClick={toggleDropdown}
              >
                Challenges
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-4 rounded-lg shadow-xl bg-background border border-outline z-50 overflow-hidden">
                  <div className="flex flex-row gap-4">
                    <div className="border-r border-outline p-2 flex flex-col gap-2 w-[300px]">
                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <rect x="2" y="3" width="20" height="18" rx="2" />
                            <line x1="8" y1="7" x2="16" y2="7" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                            <line x1="8" y1="17" x2="16" y2="17" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Daily
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Solve a quick challenge every day
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/30 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Weekly
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Tackle deeper problems weekly
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/30 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Explore
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Discover challenges, ideas, and learning paths
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 flex flex-col w-[220px]">
                      <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 mt-5">
                        Tags
                      </h4>

                      <div className="space-y-2 mb-6">
                        <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                          <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                            <IdeeLabIcon size={20} color="#28a745" />
                          </div>
                          <p className="text-sm">Beginner</p>
                        </div>
                        <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                          <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                            <IdeeLabIcon size={20} color="#007bff" />
                          </div>
                          <p className="text-sm">Intermediate</p>
                        </div>
                        <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                          <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                            <IdeeLabIcon size={20} color="#fd7e14" />
                          </div>
                          <p className="text-sm">Advanced</p>
                        </div>
                        <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                          <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                            <IdeeLabIcon size={20} color="#ff0000" />
                          </div>
                          <p className="text-sm">Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/leaderboard"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2"
            >
              Leaderboard
            </Link>
            <Link
              href="/progress"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2"
            >
              Progress
            </Link>
            <Link
              href="/badges"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2"
            >
              Badges
            </Link>
            <Link
              href="/insights"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2"
            >
              Insights
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hidden md:flex rounded-md hover:bg-outline/20 cursor-pointer"
          >
            {theme === "dark" ? (
              <SunIcon size={20} className="text-yellow-500" />
            ) : (
              <MoonIcon size={20} className="text-gray-800" />
            )}
          </div>
          <Link
            href="/auth"
            className="items-center py-1 px-5 rounded-md border border-primary/50 bg-primary/40 text-sm hover:bg-primary/60 hover:border-primary hidden md:inline-flex"
          >
            Sign In
          </Link>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={handleMenuToggle} className="text-foreground">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-2">
            <div className="relative" ref={mobileDropdownRef}>
              <button
                className="inline-flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary px-1 py-2 border-b border-outline/30"
                onClick={toggleMobileDropdown}
              >
                Challenges
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {mobileDropdownOpen && (
                <div className="mt-2 bg-background/95 border border-outline rounded-lg overflow-hidden">
                  <div className="p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <rect x="2" y="3" width="20" height="18" rx="2" />
                            <line x1="8" y1="7" x2="16" y2="7" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                            <line x1="8" y1="17" x2="16" y2="17" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Daily
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Solve a quick challenge every day
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/30 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Weekly
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Tackle deeper problems weekly
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-3 hover:bg-outline/30 rounded-lg cursor-pointer group transition-colors">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                          >
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            Explore
                          </h3>
                          <p className="text-sm text-subtle mt-1">
                            Discover challenges, ideas, and learning paths
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-4 px-3">
                      Tags
                    </h4>

                    <div className="space-y-2 mb-4">
                      <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <IdeeLabIcon size={20} color="#28a745" />
                        </div>
                        <p className="text-sm">Beginner</p>
                      </div>
                      <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <IdeeLabIcon size={20} color="#007bff" />
                        </div>
                        <p className="text-sm">Intermediate</p>
                      </div>
                      <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <IdeeLabIcon size={20} color="#fd7e14" />
                        </div>
                        <p className="text-sm">Advanced</p>
                      </div>
                      <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                        <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                          <IdeeLabIcon size={20} color="#ff0000" />
                        </div>
                        <p className="text-sm">Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/leaderboard"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2 border-b border-outline/30"
            >
              Leaderboard
            </Link>
            <Link
              href="/progress"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2 border-b border-outline/30"
            >
              Progress
            </Link>
            <Link
              href="/badges"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2 border-b border-outline/30"
            >
              Badges
            </Link>
            <Link
              href="/insights"
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer px-1 py-2 border-b border-outline/30"
            >
              Insights
            </Link>

            <div className="flex w-full gap-x-2 mt-4">
              <div
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 flex items-center justify-center rounded-md hover:bg-outline/20 cursor-pointer w-1/6"
              >
                {theme === "dark" ? (
                  <SunIcon size={20} className="text-yellow-500" />
                ) : (
                  <MoonIcon size={20} className="text-gray-800" />
                )}
              </div>

              <Link
                href="/auth"
                className="items-center py-2 rounded-md border border-primary/50 bg-primary/40 text-md hover:bg-primary/60 hover:border-primary flex w-5/6 justify-center"
              >
                Sign In
              </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      )}
    </header>
  );
}
