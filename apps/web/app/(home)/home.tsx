"use client";
import Link from "next/link";
import { motion, easeOut, cubicBezier } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaArrowRight, FaCode, FaUsers, FaRocket } from "react-icons/fa";
import { HiSparkles, HiLightBulb } from "react-icons/hi";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center mt-24 md:mt-32 py-16 overflow-hidden max-w-2xl md:max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            className="space-y-6 md:space-y-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={badgeVariants}>
              <motion.span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-primary/10 text-primary px-6 py-2 rounded-full text-xs md:text-base font-semibold mb-4 border border-primary/20 backdrop-blur-sm">
                <HiSparkles size={16} />
                Share an idea. Build something great.
                <HiSparkles size={16} />
              </motion.span>
            </motion.div>

            <motion.div variants={titleVariants}>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Built for{" "}
                </motion.span>
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  builders
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary/80 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.span>
                <br />
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  Powered by ideas.
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-subtle text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              IdeeLab is where developers share creative project ideas, vote on
              what inspires them, and discover their next build — together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 px-4"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants}>
                <Link
                  href="/ideas"
                  className="group relative w-full sm:w-auto inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary to-primary/90 px-6 md:px-10 font-semibold text-white shadow-xl shadow-primary/25"
                >
                  <motion.span
                    className="flex items-center gap-3 font-semibold text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
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
                  </motion.span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Link
                  href="/share"
                  className="group w-full sm:w-auto flex items-center justify-center h-14 md:h-16 px-6 md:px-10 border-2 border-primary/30 rounded-2xl font-semibold text-lg transition-all hover:bg-primary/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <HiLightBulb size={18} />
                    Share an Idea
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center flex-wrap gap-4 mt-8 text-sm text-foreground/80"
              variants={itemVariants}
            >
              {[
                { icon: FaCode, text: "Open Source Friendly" },
                { icon: FaUsers, text: "For Beginners and Experts" },
                { icon: HiSparkles, text: "Community-Driven" },
              ].map((item, index) => (
                <motion.span
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border border-outline transition-all hover:border-primary/30 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <item.icon size={14} className="text-primary" />
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

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
