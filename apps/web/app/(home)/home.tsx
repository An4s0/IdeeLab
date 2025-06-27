"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaArrowRight, FaCode, FaUsers, FaRocket } from "react-icons/fa";
import { HiSparkles, HiLightBulb } from "react-icons/hi";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center mt-10 py-16 overflow-hidden max-w-2xl md:max-w-6xl mx-auto px-4 md:px-6 h-[calc(100vh-64px)]">
          <div className="space-y-6 md:space-y-8 relative z-10">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-primary/10 text-primary px-6 py-2 rounded-full text-xs md:text-sm lg:text-base font-semibold mb-4 border border-primary/20 backdrop-blur-sm">
              <HiSparkles size={16} />
              Share an idea. Build something great.
              <HiSparkles size={16} />
            </span>

            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
              <span>Built for </span>
              <span className="relative inline-block">
                builders
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary/80 rounded-full" />
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative">
                Powered by ideas.
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl -z-10" />
              </span>
            </h1>

            <p className="text-subtle text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              IdeeLab is where developers share creative project ideas, vote on
              what inspires them, and discover their next build — together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 px-4">
              <Link
                href="/ideas"
                className="group relative w-full sm:w-auto inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary to-primary/90 px-6 md:px-10 font-semibold text-white shadow-xl shadow-primary/25"
              >
                <span className="flex items-center gap-3 font-semibold text-md lg:text-lg">
                  <FaRocket size={18} />
                  Explore Ideas
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRight size={16} />
                  </motion.div>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/30"></div>
                </div>
              </Link>

              <Link
                href="/share"
                className="group w-full sm:w-auto flex items-center justify-center h-14 md:h-16 px-6 md:px-10 border-2 border-primary/30 rounded-2xl transition-all hover:bg-primary/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3 font-semibold text-md lg:text-lg">
                  <HiLightBulb size={18} />
                  Share an Idea
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-4 mt-8 text-xs sm:text-sm lg:text-base text-foreground/80">
              {[
                { icon: FaCode, text: "Open Source Friendly" },
                { icon: FaUsers, text: "For Beginners and Experts" },
                { icon: HiSparkles, text: "Community-Driven" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border border-outline transition-all hover:border-primary/30 cursor-pointer"
                >
                  <item.icon size={14} className="text-primary" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
