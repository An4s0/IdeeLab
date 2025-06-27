"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ThemeIcon = {
  icon: React.ReactNode;
  name: string;
};

const platformLinks = [
  { name: "Discover Ideas", href: "/ideas" },
  { name: "Idea Generator", href: "/generator" },
  { name: "Share Idea", href: "/share" },
];

const resourceLinks = [
  { name: "About IdeeLab", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "/support" },
];

const contactLinks = [
  { name: "GitHub Org", href: "https://github.com/IdeeLab", external: true },
  {
    name: "GitHub Issue",
    href: "https://github.com/An4s0/IdeeLab/issues",
    external: true,
  },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  if (!mounted) return null;

  const themeIcons: ThemeIcon[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      name: "light",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="14" x="3" y="5" rx="2" />
          <path d="M21 16V8M6.5 16v2M17.5 16v2" />
        </svg>
      ),
      name: "system",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
      name: "dark",
    },
  ];

  const socialIcons = [
    {
      name: "X",
      href: "https://X.com/IdeeLab",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="currentColor"
          fill="currentColor"
          height="18"
          width="18"
          viewBox="0 0 512 462.799"
        >
          <path
            fillRule="nonzero"
            d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:support@ideelab.cc",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/An4s0/IdeeLab",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-outline/50 bg-background/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={42}
                  height={42}
                  className="h-10 w-10 md:h-11 md:w-11"
                />
              </motion.div>
              <h1 className="text-xl font-bold">IdeeLab</h1>
            </div>
            <p className="text-sm text-subtle leading-relaxed max-w-md mb-6">
              A platform to submit, explore, and get inspired by creative
              programming ideas — filtered by category, difficulty, and more.
            </p>

            <div className="flex space-x-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-outline/10 text-subtle hover:text-primary hover:bg-outline/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-subtle text-sm">
              {platformLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-subtle text-sm">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contact & Legal</h3>
            <ul className="space-y-3 text-subtle text-sm">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors inline-block"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-outline/30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-2 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left text-xs text-subtle">
            © {year} IdeeLab. All rights reserved.
          </div>

          <div className="flex items-center justify-center rounded-full border border-outline p-0.5">
            {themeIcons.map((icon, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-1.5 rounded-full cursor-pointer ${
                  theme === icon.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-outline/10"
                }`}
                onClick={() => setTheme(icon.name)}
                aria-label={`Switch to ${icon.name} theme`}
              >
                {icon.icon}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
