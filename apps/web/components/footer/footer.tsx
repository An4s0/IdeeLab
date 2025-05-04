"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LogoSection from "./logo";
import LinkSection from "./link";

type ThemeIcon = {
  icon: React.ReactNode;
  name: string;
};

const platformLinks = [
  { name: "Challenges", href: "/challenges" },
  { name: "Leaderboard", href: "/leaderboard" },
];

const contactLinks = [
  { name: "GitHub", href: "https://github.com/An4s0/IdeeLab", external: true },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themeIcons: ThemeIcon[] = [
    {
      icon: (
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
          width="16"
          height="16"
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
          width="16"
          height="16"
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

  return (
    <footer className="border-t border-outline/50">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          <LogoSection />

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-y-8 gap-x-6">
            <LinkSection title="Platform" items={platformLinks} />
            <LinkSection title="Get in Touch" items={contactLinks} />
          </div>
        </div>
      </div>

      <div className="border-t border-outline/30">
        <div className="max-w-6xl mx-auto px-5 justify-between flex items-center py-4">
          <div className="text-center text-xs text-muted">
            © {new Date().getFullYear()} IdeeLab. All rights reserved.
          </div>

          <div className="flex items-center rounded-full border border-outline">
            {themeIcons.map((icon, index) => (
              <button
                key={index}
                className={`p-2 rounded-full cursor-pointer ${theme === icon.name ? "bg-subtle/20" : "hover:text-subtle"}`}
                onClick={() => setTheme(icon.name)}
              >
                {icon.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
