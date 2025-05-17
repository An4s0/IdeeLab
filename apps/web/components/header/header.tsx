"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import userLib from "@/lib/user";
import { User } from "@/types";
import IdeeLabIcon from "@repo/ui/ideelab";

type ChallengeItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

type TagItem = {
  color: string;
  text: string;
  href: string;
};

type NavLink = {
  href: string;
  text: string;
};

export default function Header({ fixed = true }: { fixed?: boolean }) {
  const [userDropdown, setUserDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [mobileNavDropdownOpen, setMobileNavDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileNavDropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        event.target instanceof Node &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdown(false);
      }

      if (
        navDropdownRef.current &&
        event.target instanceof Node &&
        !navDropdownRef.current.contains(event.target)
      ) {
        setNavDropdownOpen(false);
      }

      if (
        mobileNavDropdownRef.current &&
        event.target instanceof Node &&
        !mobileNavDropdownRef.current.contains(event.target)
      ) {
        setMobileNavDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        const auth = await userLib.me();

        if (auth.success) {
          setIsAuthenticated(true);
          setUser(auth.data!);
        }
      }
    };
    checkAuth();
  }, [isAuthenticated]);

  const handleNavMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setNavDropdownOpen(true);
  };

  const handleNavMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setNavDropdownOpen(false);
    }, 100);
  };

  const handleNavDropdownToggle = () => setNavDropdownOpen(!navDropdownOpen);
  const handleMobileNavDropdownToggle = () =>
    setMobileNavDropdownOpen(!mobileNavDropdownOpen);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleUserDropdownToggle = () => setUserDropdown(!userDropdown);

  const navLinks: NavLink[] = [
    { href: "/contest", text: "Contest" },
    { href: "/leaderboard", text: "Leaderboard" },
  ];

  const challengeItems: ChallengeItem[] = [
    {
      icon: (
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
      ),
      title: "Daily",
      description: "Solve a quick challenge every day",
      href: "/challenges?type=daily",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Weekly",
      description: "Tackle deeper problems weekly",
      href: "/challenges?type=weekly",
    },
    {
      icon: (
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
      ),
      title: "Explore",
      description: "Discover challenges",
      href: "/challenges",
    },
  ];

  const tagItems: TagItem[] = [
    {
      color: "#28a745",
      text: "Beginner",
      href: "/challenges?level=beginner",
    },
    {
      color: "#007bff",
      text: "Intermediate",
      href: "/challenges?level=intermediate",
    },
    {
      color: "#fd7e14",
      text: "Advanced",
      href: "/challenges?level=advanced",
    },
    {
      color: "#ff0000",
      text: "Expert",
      href: "/challenges?level=expert",
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <header
      className={`${
        fixed ? "fixed" : "block"
      } w-full top-0 z-50 border-b transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "border-outline bg-background/90 backdrop-blur-lg shadow-sm"
          : "border-transparent bg-background/80 backdrop-blur"
      } ${isMenuOpen ? "h-screen overflow-auto" : "h-auto"}`}
    >
      <div className="flex justify-between items-center p-3 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-9 md:h-10 md:w-10"
              />
            </motion.div>
            <span className="text-lg font-bold hidden sm:block">IdeeLab</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <div
              className="relative"
              ref={navDropdownRef}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
            >
              <button
                className="inline-flex items-center rounded-md text-sm font-medium text-foreground hover:text-primary px-1 py-2"
                onClick={handleNavDropdownToggle}
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
                  className={`ml-1 transition-transform duration-200 ${navDropdownOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {navDropdownOpen && (
                <div className="absolute left-0 mt-4 rounded-lg shadow-xl bg-background border border-outline z-50 overflow-hidden">
                  <div className="flex flex-row gap-4">
                    <div className="border-r border-outline p-2 flex flex-col gap-2 w-[400px]">
                      {challengeItems.map((item, i) => (
                        <Link key={i} href={item.href}>
                          <div className="flex items-start space-x-4 p-3 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                            <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-subtle mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="p-2 flex flex-col w-[220px]">
                      <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-2">
                        Tags
                      </h4>
                      <div>
                        {tagItems.map((item, i) => (
                          <Link key={i} href={item.href}>
                            <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                              <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                                <IdeeLabIcon size={20} color={item.color} />
                              </div>
                              <p className="text-sm">{item.text}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary px-1 py-2"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer flex items-center justify-center"
                onClick={handleUserDropdownToggle}
                aria-label="User menu"
              >
                <Image
                  src={user?.picture || "/default.png"}
                  alt="User Avatar"
                  width={36}
                  height={36}
                  className="h-9 w-9 md:h-10 md:w-10 rounded-full border-2 border-transparent hover:border-primary/30 transition-all"
                />
              </motion.button>

              <AnimatePresence>
                {userDropdown && (
                  <motion.div
                    className="absolute right-0 mt-5 rounded-xl shadow-xl bg-background border border-outline z-50 overflow-hidden w-[240px]"
                    ref={userDropdownRef}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="py-2 px-1">
                      <div className="pb-1 px-3 mb-1 border-b border-outline/30">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-subtle">@{user?.username}</p>
                      </div>

                      <Link href="/profile">
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center space-x-3 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors"
                        >
                          <div className="p-1.5 bg-outline/30 rounded-lg group-hover:bg-outline/40 transition-colors">
                            <AiOutlineUser className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            Profile
                          </span>
                        </motion.div>
                      </Link>

                      <Link href="/settings">
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center space-x-3 mb-1 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors"
                        >
                          <div className="p-1.5 bg-outline/30 rounded-lg group-hover:bg-outline/40 transition-colors">
                            <AiOutlineSetting className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            Settings
                          </span>
                        </motion.div>
                      </Link>
                      <hr className="border-t border-outline/30" />
                      <Link href="/logout">
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center space-x-3 px-3 py-2 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors mt-1"
                        >
                          <div className="p-1.5 bg-outline/30 rounded-lg group-hover:bg-outline/40 transition-colors">
                            <HiOutlineLogout className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            Logout
                          </span>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/login"
                className="items-center py-1.5 px-4 rounded-lg text-sm font-medium hover:text-primary transition-colors"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="items-center py-1.5 px-4 rounded-lg border border-primary/50 bg-primary/20 text-sm font-medium hover:bg-primary/30 hover:border-primary inline-flex transition-all"
              >
                Register
              </Link>
            </div>
          )}

          <div className="md:hidden flex items-center">
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
            <div className="relative" ref={mobileNavDropdownRef}>
              <button
                className="inline-flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary px-1 py-2 border-b border-outline/30"
                onClick={handleMobileNavDropdownToggle}
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
                  className={`ml-1 transition-transform duration-200 ${mobileNavDropdownOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {mobileNavDropdownOpen && (
                <div className="mt-2 bg-background/95 border border-outline rounded-lg overflow-hidden">
                  <div className="p-2">
                    <div className="flex flex-col gap-2">
                      {challengeItems.map((item, i) => (
                        <Link key={i} href={item.href}>
                          <div className="flex items-start space-x-4 p-3 hover:bg-outline/20 rounded-lg cursor-pointer group transition-colors">
                            <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/40 transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-subtle mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-4 px-3">
                      Tags
                    </h4>
                    <div className="space-y-2 mb-4">
                      {tagItems.map((item, i) => (
                        <Link key={i} href={item.href}>
                          <div className="px-3 py-2 cursor-pointer flex items-center space-x-2 hover:text-subtle">
                            <div className="p-2 bg-outline/50 rounded-lg group-hover:bg-outline/20 transition-colors">
                              <IdeeLabIcon size={20} color={item.color} />
                            </div>
                            <p className="text-sm">{item.text}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary px-1 py-2 border-b border-outline/30"
              >
                {link.text}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="flex flex-col gap-2 pt-2">
                <div className="px-1 py-2 border-b border-outline/30">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-subtle">@{user?.username}</p>
                </div>
                <Link
                  href="/profile"
                  className="text-sm font-medium text-foreground hover:text-primary px-1 py-2 border-b border-outline/30"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="text-sm font-medium text-foreground hover:text-primary px-1 py-2 border-b border-outline/30"
                >
                  Settings
                </Link>
                <Link
                  href="/logout"
                  className="text-sm font-medium text-foreground hover:text-primary px-1 py-2"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/login"
                  className="items-center py-2 rounded-md text-sm font-medium hover:text-primary transition-colors flex w-full justify-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="items-center py-2 rounded-md border border-primary/50 bg-primary/20 text-sm font-medium hover:bg-primary/30 hover:border-primary flex w-full justify-center transition-all"
                >
                  Register
                </Link>
              </div>
            )}
            <div className="h-20"></div>
          </div>
        </div>
      )}
    </header>
  );
}
