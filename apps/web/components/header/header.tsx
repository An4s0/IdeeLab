"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import Search from "./search";
import IdeeLabIcon from "../icons/ideelab";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineSearch,
} from "react-icons/ai";
import { HiOutlineLogout, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BiCommand } from "react-icons/bi";

export function Header({ fixed = true }: { fixed?: boolean }) {
  const [user, setUser] = useState<{
    name: string;
    username: string;
    picture: string;
  } | null>(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const userDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleUserDropdownToggle = () => setUserDropdown(!userDropdown);
  const handleMobileMenuToggle = () => setMobileMenu(!mobileMenu);
  const handleSearchModalToggle = () => {
    setSearchModal(!searchModal);
    if (!searchModal) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  // Effect to handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        handleSearchModalToggle();
      }
      if (event.key === "Escape" && searchModal) {
        setSearchModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchModal]);

  // Effect to close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        event.target instanceof Node &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Effect to get user data
  useEffect(() => {
    setUser({
      name: "Anas Almutary",
      username: "anas",
      picture: "https://avatars.githubusercontent.com/u/86017774?v=4",
    });
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide scrollbar when search modal is open
  useEffect(() => {
    if (searchModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [searchModal]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: easeIn,
      },
    },
  };

  const navLinks = [
    { href: "/ideas", label: "Discover", mobileLabel: "Discover Ideas" },
    { href: "/generator", label: "Generator", mobileLabel: "Idea Generator" },
    { href: "/share", label: "Share Idea", mobileLabel: "Share Your Idea" },
  ];

  return (
    <header>
      <div
        className={`${fixed ? "fixed" : ""} w-full h-16 top-0 z-40 border-b border-outline bg-background/95 backdrop-blur-sm`}
      >
        <div className="flex h-full justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-8 ">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <IdeeLabIcon size={32} color="var(--primary)" />
              </motion.div>
              <span className="text-xl font-bold block">IdeeLab</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleSearchModalToggle}
                className="flex items-center space-x-3 px-4 py-2 w-92 rounded-lg border border-outline/30 hover:border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-background/50 text-left cursor-pointer"
              >
                <AiOutlineSearch className="w-4 h-4 text-subtle" />
                <span className="text-sm text-subtle flex-1">
                  Search ideas...
                </span>
                <div className="flex items-center space-x-1 text-xs text-subtle bg-outline/20 px-2 py-1 rounded">
                  <BiCommand className="w-3 h-3" />
                  <span>K</span>
                </div>
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSearchModalToggle}
              className="hidden md:block lg:hidden p-2 rounded-lg hover:bg-outline/20 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <AiOutlineSearch className="w-5 h-5" />
            </motion.button>

            {user != null ? (
              <div className="relative hidden md:block ml-4">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer flex items-center justify-center"
                  onClick={handleUserDropdownToggle}
                  aria-label="User menu"
                >
                  <Image
                    width={36}
                    height={36}
                    src={user?.picture || "/default.png"}
                    alt="User Avatar"
                    className="h-9 w-9 rounded-full border-2 border-transparent hover:border-primary/30 transition-all"
                  />
                </motion.button>

                <AnimatePresence>
                  {userDropdown && (
                    <motion.div
                      className="absolute right-0 mt-5 rounded-xl shadow-xl bg-background border border-outline z-50 overflow-hidden w-56"
                      ref={userDropdownRef}
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-outline/30">
                          <p className="text-sm font-medium">{user?.name}</p>
                          <p className="text-xs text-subtle">
                            @{user?.username}
                          </p>
                        </div>

                        <div className="flex flex-col space-y-1">
                          <Link href="/profile">
                            <motion.div className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors">
                              <AiOutlineUser className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">
                                Profile
                              </span>
                            </motion.div>
                          </Link>

                          <Link href="/settings">
                            <motion.div className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors">
                              <AiOutlineSetting className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">
                                Settings
                              </span>
                            </motion.div>
                          </Link>
                        </div>

                        <hr className="border-t border-outline/30" />

                        <Link href="/logout">
                          <motion.div className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors">
                            <HiOutlineLogout className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-medium text-red-500">
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
                  className="py-2 px-4 rounded-lg text-sm font-medium hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="py-2 px-4 rounded-lg border border-primary/50 bg-primary/20 text-sm font-medium hover:bg-primary/30 hover:border-primary transition-all"
                >
                  Register
                </Link>
              </div>
            )}

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-outline/20 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenu ? (
                <HiOutlineX className="w-5 h-5" />
              ) : (
                <HiOutlineMenu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenu && (
            <div className="md:hidden absolute h-screen left-0 right-0 bg-background">
              <div className="px-4 py-6 space-y-4">
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block font-medium text-foreground transition-colors px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                      onClick={() => setMobileMenu(false)}
                    >
                      {link.mobileLabel}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSearchModalToggle}
                    className="flex items-center space-x-3 px-4 py-2 w-full rounded-lg border border-outline/30 hover:border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-background/50 text-left cursor-pointer"
                  >
                    <AiOutlineSearch className="w-4 h-4 text-subtle" />
                    <span className="text-sm text-subtle flex-1">
                      Search ideas...
                    </span>
                  </motion.button>
                </div>

                {user != null ? (
                  <div className="flex flex-col space-y-3 pt-4 border-t border-outline/30">
                    <div className="flex flex-col items-center mt-4">
                      <Image
                        width={104}
                        height={104}
                        src={user?.picture || "/default.png"}
                        alt="User Avatar"
                        className="h-26 w-26 rounded-full border-2 border-transparent hover:border-primary/30 transition-all"
                      />
                      <span className="text-md font-medium">{user?.name}</span>
                      <span className="text-sm text-subtle">
                        @{user?.username}
                      </span>
                    </div>

                    <div className="flex space-x-2 items-center justify-center text-center">
                      <Link
                        href="/profile"
                        className="block text-sm font-medium text-foreground px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                        onClick={() => setMobileMenu(false)}
                      >
                        <AiOutlineUser className="w-4 h-4 text-primary inline-block mr-2" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block text-sm font-medium text-foreground px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                        onClick={() => setMobileMenu(false)}
                      >
                        <AiOutlineSetting className="w-4 h-4 text-primary inline-block mr-2" />
                        Settings
                      </Link>
                      <Link
                        href="/logout"
                        className="block text-sm font-medium text-red-500 px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                        onClick={() => setMobileMenu(false)}
                      >
                        <HiOutlineLogout className="w-4 h-4 text-red-500 inline-block mr-2" />
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3 pt-4 border-t border-outline/30">
                    <Link
                      href="/login"
                      className="text-center py-2 px-4 rounded-lg text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenu(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-center py-2 px-4 rounded-lg border border-primary/50 bg-primary/20 text-sm font-medium hover:bg-primary/30 hover:border-primary transition-all"
                      onClick={() => setMobileMenu(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Search
        searchModal={searchModal}
        setSearchModal={setSearchModal}
        searchInputRef={searchInputRef}
      />
    </header>
  );
}
