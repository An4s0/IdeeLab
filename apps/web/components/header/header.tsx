"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import library
import userLib from "@/lib/user";

// Import icons from react-icons
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineLogout, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BiCommand } from "react-icons/bi";
import { User } from "@/types";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  // State to manage user authentication and dropdown visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Effect to check user authentication status
  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        const auth = await userLib.me();

        if (auth.success) {
          setIsAuthenticated(true);
          setUser(auth.data?.user!);
        }
      }
    };
    checkAuth();
  }, [isAuthenticated]);

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

  // Hode the scroll position when the search modal is open
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

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const searchModalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <header
        className={`${fixed ? "fixed" : ""} w-full top-0 z-40 border-b border-outline bg-background/95 backdrop-blur-sm`}
      >
        <div className="flex justify-between items-center py-3 px-4 sm:px-4">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-8 lg:space-x-14">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="sm:w-9 sm:h-9"
                />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold block">
                IdeeLab
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-5">
              <Link
                href="/ideas"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Discover
              </Link>
              <Link
                href="/generator"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                Idea Generator
              </Link>
            </nav>
          </div>

          {/* Right Side - Search, Auth, Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex items-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleSearchModalToggle}
                className="flex items-center space-x-3 px-4 py-2 w-80 xl:w-96 rounded-lg border border-outline/30 hover:border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-background/50 text-left cursor-pointer"
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

            {/* Mobile Search Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSearchModalToggle}
              className="hidden md:block lg:hidden p-2 rounded-lg hover:bg-outline/20 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <AiOutlineSearch className="w-5 h-5" />
            </motion.button>

            {/* User Authentication */}
            {isAuthenticated ? (
              <div className="relative hidden md:block">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer flex items-center justify-center"
                  onClick={handleUserDropdownToggle}
                  aria-label="User menu"
                >
                  <img
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

                        <div className="py-1">
                          <Link href="/profile">
                            <motion.div
                              whileHover={{ x: 3 }}
                              className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors"
                            >
                              <AiOutlineUser className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">
                                Profile
                              </span>
                            </motion.div>
                          </Link>

                          <Link href="/settings">
                            <motion.div
                              whileHover={{ x: 3 }}
                              className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors"
                            >
                              <AiOutlineSetting className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">
                                Settings
                              </span>
                            </motion.div>
                          </Link>
                        </div>

                        <hr className="border-t border-outline/30 my-1" />

                        <Link href="/logout">
                          <motion.div
                            whileHover={{ x: 3 }}
                            className="flex items-center space-x-3 px-4 py-2 hover:bg-outline/20 cursor-pointer group transition-colors"
                          >
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
              <div className="hidden sm:flex items-center space-x-3">
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

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <div className="md:hidden absolute h-screen left-0 right-0 bg-background/99 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-4">
                <nav className="space-y-2">
                  <Link
                    href="/ideas"
                    className="block font-medium text-foreground transition-colors px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                    onClick={() => setMobileMenu(false)}
                  >
                    Discover Ideas
                  </Link>
                  <Link
                    href="/generator"
                    className="block font-medium text-foreground transition-colors px-5 py-3 border border-outline/30 rounded-lg hover:bg-outline/15"
                    onClick={() => setMobileMenu(false)}
                  >
                    Idea Generator
                  </Link>
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
                    <div className="flex items-center space-x-1 text-xs text-subtle bg-outline/20 px-2 py-1 rounded">
                      <BiCommand className="w-3 h-3" />
                      <span>K</span>
                    </div>
                  </motion.button>
                </div>

                {isAuthenticated ? (
                  <div className="flex flex-col space-y-3 pt-4 border-t border-outline/30">
                    <div className="flex flex-col items-center mt-4">
                      <img
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
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSearchModal(false);
              }
            }}
          >
            <motion.div
              className="w-full max-w-2xl bg-background rounded-xl shadow-2xl border border-outline overflow-hidden"
              variants={searchModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Search Header */}
              <div className="flex items-center px-4 py-4 border-b border-outline/30">
                <AiOutlineSearch className="w-5 h-5 text-subtle mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder-subtle focus:outline-none text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchModal(false)}
                  className="p-1 rounded-lg hover:bg-outline/20 transition-colors"
                >
                  <AiOutlineClose className="w-5 h-5 text-subtle cursor-pointer" />
                </motion.button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery.length > 0 ? (
                  <div className="p-4">
                    <div className="text-sm text-subtle mb-4">
                      Search results for "{searchQuery}"
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 1
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 2
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 3
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 4
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <AiOutlineSearch className="w-12 h-12 text-subtle mx-auto mb-4" />
                    <div className="text-foreground font-medium mb-2">
                      Search Ideas
                    </div>
                    <div className="text-sm text-subtle">
                      Start typing to search through ideas and categories
                    </div>
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="px-4 py-3 border-t border-outline/30 bg-outline/5">
                <div className="flex items-center justify-between text-xs text-subtle">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <kbd className="px-2 py-1 bg-outline/20 rounded text-xs">
                        ↵
                      </kbd>
                      <span>to select</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <kbd className="px-2 py-1 bg-outline/20 rounded text-xs">
                        esc
                      </kbd>
                      <span>to close</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Search by</span>
                    <span className="font-medium">IdeeLab</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
