"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header({ fixed = true }: { fixed?: boolean }) {
  return (
    <header className={`${fixed ? "fixed" : ""} w-full top-0 z-40 border-b border-outline bg-background`}>
      <div className="flex justify-between items-center py-3 px-5">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={38}
              height={38}
            />
          </motion.div>
          <span className="text-xl font-bold hidden sm:block">IdeeLab</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
