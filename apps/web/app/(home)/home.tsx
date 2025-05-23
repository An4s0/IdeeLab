"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// import layout components (Header, Footer)
import Header from "@/components/header";
import Footer from "@/components/footer";

// import idea type
import { IdeaType } from "@/types";

// import getAllIdeas function
import idea from "@/lib/idea";

// import icons from react-icons
import {
  FaArrowRight,
  FaFire,
  FaClock,
  FaEye,
  FaCode,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { HiSparkles, HiLightBulb } from "react-icons/hi";
import { BiInfinite } from "react-icons/bi";

export default function HomePage() {
  const [ideas, setIdeas] = useState<IdeaType[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const ideas_ = await idea.getAll(4, 0);
      setIdeas(ideas_.data!);
    };
    fetchIdeas();
  }, []);

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
        ease: "easeOut",
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100/10 text-green-500 border-green-200/";
      case "Intermediate":
        return "bg-yellow-100/10 text-yellow-500 border-yellow-200/";
      case "Advanced":
        return "bg-red-100/10 text-red-500 border-red-200/";
      default:
        return "bg-gray-100/10 text-gray-500 border-gray-200/";
    }
  };

  return (
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center mt-24 md:mt-32 py-16 overflow-hidden max-w-2xl md:max-w-6xl mx-auto px-4 md:px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-16 h-16 bg-primary/15 rounded-full blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-12 h-12 bg-primary/20 rounded-full blur-md"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          <motion.div
            className="absolute top-32 left-16 text-primary/20"
            variants={floatingVariants}
            animate="animate"
          >
            <HiLightBulb size={24} />
          </motion.div>
          <motion.div
            className="absolute top-48 right-12 text-primary/15"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <FaCode size={20} />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-20 text-primary/25"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <FaRocket size={18} />
          </motion.div>

          <motion.div
            className="space-y-6 md:space-y-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={badgeVariants}>
              <motion.span
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-primary/10 text-primary px-6 py-2 rounded-full text-xs md:text-base font-semibold mb-4 border border-primary/20 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(var(--primary), 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
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
                  whileHover={{ scale: 1.05 }}
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
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-subtle/20 transition-all hover:bg-white/10 hover:border-primary/30 hover:shadow-md cursor-pointer"
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

            <motion.div
              className="mt-12 flex gap-12 text-sm md:text-base text-subtle justify-center"
              variants={statsVariants}
            >
              <motion.div
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <motion.span
                  className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(var(--primary), 0)",
                      "0 0 20px rgba(var(--primary), 0.3)",
                      "0 0 0px rgba(var(--primary), 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  200+
                </motion.span>
                <span className="group-hover:text-foreground transition-colors">
                  ideas shared
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <motion.span
                  className="font-bold text-3xl md:text-4xl text-foreground flex items-center gap-1"
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <BiInfinite className="text-primary" />
                  100%
                </motion.span>
                <span className="group-hover:text-foreground transition-colors">
                  free forever
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </section>

        {/* Top Ideas Section */}
        {ideas.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-background/5 to-background/10 relative">
            <div className="max-w-7xl mx-auto px-4 relative">
              <motion.div
                className="text-center mb-12"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HiSparkles className="text-primary text-2xl" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Trending Now
                  </span>
                  <HiSparkles className="text-primary text-2xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-4">
                  Top Ideas from Our Community
                </h2>
                <p className="text-subtle text-lg max-w-2xl mx-auto">
                  Discover the most innovative and popular project ideas from
                  our community of builders
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/ideas"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 border border-primary/20 rounded-full text-primary font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span>View All Ideas</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {ideas.map((idea) => (
                  <motion.div
                    key={idea.id}
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    className="group"
                  >
                    <Link
                      href={`/ideas/${idea.slug}`}
                      className="block relative rounded-2xl p-6 backdrop-blur-sm border border-subtle/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {idea.is_hot && (
                        <motion.div
                          className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaFire size={10} />
                          HOT
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                              {idea.category}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(idea.difficulty)}`}
                            >
                              {idea.difficulty}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {idea.title}
                        </h3>

                        <p className="text-subtle text-sm leading-relaxed mb-4 line-clamp-3">
                          {idea.summary}
                        </p>

                        <div className="flex items-center gap-4 mb-4 text-sm text-subtle">
                          <div className="flex items-center gap-1">
                            <FaEye size={12} />
                            <span>{idea.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock size={12} />
                            <span>2 days ago</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50/5 hover:bg-green-100/10 transition-colors cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <BiSolidUpvote
                                size={16}
                                className="text-green-600"
                              />
                              <span className="text-green-700 font-semibold text-sm">
                                {idea.upvotes}
                              </span>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-50/5 hover:bg-red-100/10 transition-colors cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <BiSolidDownvote
                                size={16}
                                className="text-red-500"
                              />
                              <span className="text-red-700 font-semibold text-sm">
                                {idea.downvotes}
                              </span>
                            </motion.div>
                          </div>
                          <span className="text-sm text-subtle font-medium">
                            {idea.comments} comments
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {idea.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 bg-subtle/10 hover:bg-primary/10 text-subtle hover:text-primary rounded-full text-xs font-medium transition-all cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                            >
                              #{tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-subtle mb-6">
                  Ready to share your own brilliant idea?
                </p>
                <Link
                  href="/share"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <HiSparkles size={18} />
                  Share Your Idea
                  <FaArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
