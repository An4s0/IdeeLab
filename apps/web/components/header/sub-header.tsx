"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { VscRunAll } from "react-icons/vsc";

export default function SubHeader({
  handleRunCode,
}:{
  handleRunCode: () => void;
}) {
  return (
    <header className={`block w-full top-0 z-40 border-b border-outline`}>
      <div className="flex justify-between items-center p-3 px-4">
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
          <button
            onClick={handleRunCode}
            className="items-center py-1.5 px-4 rounded-md border border-primary/50 bg-primary text-sm font-medium hover:bg-primary/90 inline-flex transition-all text-white cursor-pointer"
          >
            <VscRunAll className="mr-2" />
            Run Code
          </button>
        </div>
      </div>
    </header>
  );
}
