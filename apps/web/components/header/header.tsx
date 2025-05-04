"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "border-outline bg-background/90 backdrop-blur-lg shadow-sm"
          : "border-transparent bg-background/80 backdrop-blur"
      }`}
    >
      <div className="flex justify-between items-center p-3 px-4 md:px-6 max-w-7xl mx-auto">
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

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer flex items-center justify-center"
                onClick={() => setUserDropdown(!userDropdown)}
                aria-label="User menu"
              >
                <Image
                  src="/picture.png"
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
                    ref={dropdownRef}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="py-2 px-1">
                      <div className="pb-1 px-3 mb-1 border-b border-outline/30">
                        <p className="text-sm font-medium">Anas Almutary</p>
                        <p className="text-xs text-subtle">@anas__0123456789</p>
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
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center py-1.5 px-4 rounded-lg text-sm font-medium hover:text-primary transition-colors"
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
        </div>
      </div>
    </header>
  );
}
