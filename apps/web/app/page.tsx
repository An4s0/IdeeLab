"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/icons";
import { useCountUp } from "@/hooks/use-count-up";

export default function Home() {
  return (
    <main className="transition p-3 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center space-y-4">
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-primary opacity-13 rounded-full blur-3xl -z-10"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-subtle text-lg sm:text-xl"
        >
          Daily Coding. Real Growth.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold sm:text-5xl"
        >
          Code every day. <br />{" "}
          <span className="text-primary">Get better every day.</span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/challenges/1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-white shadow-lg shadow-primary/30 transition active:scale-95"
            >
              <span className="flex items-center gap-1">
                Start Challenge
                <div className="ml-1 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </motion.div>
          </Link>
          <Link href="/challenges">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center h-12 px-6 rounded-md border border-outline hover:bg-outline/20"
            >
              Explore Challenges
            </motion.div>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16 text-sm sm:text-base text-subtle"
        >
          <div>
            <span className="text-foreground text-xl font-semibold block">
              +{useCountUp(800, 100)}
            </span>
            Challenges
          </div>
          <div>
            <span className="text-foreground text-xl font-semibold block">
              +{useCountUp(1000, 100)}
            </span>
            Active Users
          </div>
        </motion.div>
      </div>
    </main>
  );
}
