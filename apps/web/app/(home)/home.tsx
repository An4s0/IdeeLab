"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaArrowDown,
  FaArrowUp,
  FaUserCheck,
  FaChartLine,
  FaArrowRight,
  FaJava,
  FaPython,
  FaGolang,
} from "react-icons/fa6";
import { LiaUserCogSolid } from "react-icons/lia";
import { GiDiamondTrophy } from "react-icons/gi";
import { HiMiniUserGroup, HiSparkles } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiJavascriptFill, RiPieChartLine } from "react-icons/ri";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  const faqs = [
    {
      question: "What is IdeeLab?",
      answer:
        "IdeeLab is a platform offering daily and weekly coding challenges to help developers grow and sharpen their skills through consistency and fun competition.",
    },
    {
      question: "Is IdeeLab free to use?",
      answer:
        "Yes! You can start solving challenges for free. Premium features may be added in the future to enhance the experience.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply create an account and start solving challenges. You can also track your progress.",
    },
    {
      question: "What types of challenges are available?",
      answer:
        "We offer a variety of challenges ranging from algorithms and data structures to real-world problems. New challenges are added daily!",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Absolutely! You can view your progress, streaks, and performance over time through our analytics dashboard.",
    },
    {
      question: "Can I create my own challenges?",
      answer:
        "Currently, we are focusing on curated challenges. However, we plan to introduce a feature for users to create and share their own challenges in the future.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  return (
    <main className="relative">
      <Header />

      <div className="relative overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 py-16 overflow-hidden max-w-2xl md:max-w-5xl mx-auto px-4 md:px-6">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm md:text-base font-medium mb-4">
              Daily Coding. Real Growth.
            </span>

            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Code every day. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Get better every day.
              </span>
            </h1>

            <p className="text-subtle text-sm md:text-lg max-w-xl mx-auto">
              IdeeLab is your daily coding companion.{" "}
              <br className="hidden sm:block" />
              Sharpen your skills with daily challenges, smart tools, and real
              progress — one problem at a time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 px-4">
              <Link
                href="/challenges"
                className="group relative w-full sm:w-auto inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 font-medium text-white active:scale-95"
              >
                <span className="flex items-center gap-2 font-medium">
                  Today&apos;s Challenges
                  <div className="transition-transform">
                    <FaArrowRight size={16} />
                  </div>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </Link>
              <Link
                href="/leaderboard"
                className="w-full sm:w-auto flex items-center justify-center h-14 px-8 border border-subtle/30 rounded-xl font-medium transition-all hover:bg-foreground/5 active:scale-95"
              >
                Join the Best
              </Link>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-3 mt-6 text-xs text-foreground/90">
              {[
                "Daily Practice",
                "Beginner Friendly",
                "Real-Time Progress",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-subtle/10 backdrop-blur-sm rounded-full border border-subtle/10 transition-colors hover:bg-subtle/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-8 text-sm md:text-base text-subtle justify-center">
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-foreground">8k+</span>
                <span>developers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-foreground">100%</span>
                <span>free</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-foreground/3 py-10 mt-20">
          <div className="flex flex-col items-center justify-center space-y-2 max-w-6xl mx-auto px-2 md:px-1">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Why choose <span className="text-primary">IdeeLab</span>?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full mt-8 px-4">
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 h-88 px-6 py-8 cursor-pointer hover:border-outline flex justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold mb-2 flex justify-start items-center">
                      <FaChartLine
                        size={20}
                        className="inline-block mr-2 text-foreground"
                      />
                      Real-Time Progress Tracking
                    </h2>
                    <p className="text-sm text-subtle">
                      Track your progress with real-time analytics. See how you
                      improve over time and stay motivated.
                    </p>
                  </div>
                  <ul className="text-sm text-subtle space-y-1 pl-1">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Live stats
                      on every challenge
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Visual
                      progress over time
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Consistency
                      streak tracking
                    </li>
                  </ul>
                </div>
                <RiPieChartLine
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  size={220}
                  className="text-outline/50 group-hover:text-subtle/70 m-8 transition-colors duration-300 hidden md:block"
                />
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 lg:col-span-1  h-88 px-6 py-8 cursor-pointer hover:border-outline flex flex-col justify-between">
                <div className="w-full">
                  <h2 className="font-semibold mb-2 flex justify-start items-center">
                    <HiSparkles
                      size={20}
                      className="inline-block mr-2 text-foreground"
                    />
                    Daily Curated Challenges
                  </h2>
                  <p className="text-sm text-subtle">
                    Fresh and exciting challenges every day to sharpen your
                    skills and keep you engaged.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <GiDiamondTrophy
                    size={180}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-outline/50 group-hover:text-subtle/70 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 lg:col-span-1 h-88 px-6 py-8 cursor-pointer hover:border-outline flex flex-col justify-between">
                <div className="w-full">
                  <h2 className="font-semibold mb-2 flex justify-start items-center">
                    <FaUserCheck
                      size={20}
                      className="inline-block mr-2 text-foreground"
                    />
                    Personalized Experience
                  </h2>
                  <p className="text-sm text-subtle">
                    Challenges, recommendations, and feedback tailored to your
                    skill level and goals.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <LiaUserCogSolid
                    size={180}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-outline/50 group-hover:text-subtle/70 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 h-88 px-6 py-8 cursor-pointer hover:border-outline flex justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold mb-2 flex justify-start items-center">
                      <PiUsersThreeFill
                        size={20}
                        className="inline-block mr-2 text-foreground"
                      />
                      Community & Collaboration
                    </h2>
                    <p className="text-sm text-subtle">
                      Learn and grow with a passionate community of coders.
                      Share solutions, give feedback, and grow together.
                    </p>
                  </div>
                  <ul className="text-sm text-subtle space-y-1 pl-1">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Public
                      solutions & discussions
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Challenge
                      leaderboards
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✔</span> Peer reviews
                      & feedback
                    </li>
                  </ul>
                </div>
                <HiMiniUserGroup
                  size={220}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-outline/50 group-hover:text-subtle/70 m-8 transition-colors duration-300 hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-24 md:mt-36 py-16 md:py-24 relative mb-20 md:mb-40">
          <div className="absolute w-full h-full max-w-5xl">
            {[
              {
                Icon: FaJava,
                size: 50,
                position: "top-0 left-8 md:left-16",
                delay: 0,
              },
              {
                Icon: TbBrandCpp,
                size: 50,
                position: "top-0 right-8 md:right-16",
                delay: 0.3,
              },
              {
                Icon: TbBrandCSharp,
                size: 50,
                position:
                  "top-1/2 left-4 md:left-12 transform -translate-y-1/2",
                delay: 0.7,
              },
              {
                Icon: RiJavascriptFill,
                size: 45,
                position:
                  "top-1/2 right-4 md:right-12 transform -translate-y-1/2",
                delay: 1.2,
              },
              {
                Icon: FaPython,
                size: 40,
                position: "bottom-14 left-16 md:left-32",
                delay: 1.5,
              },
              {
                Icon: DiRuby,
                size: 40,
                position: "bottom-14 right-16 md:right-32",
                delay: 0.5,
              },
              {
                Icon: BiLogoTypescript,
                size: 45,
                position: "bottom-0 left-1/4",
                delay: 0.9,
              },
              {
                Icon: FaGolang,
                size: 50,
                position: "bottom-0 right-1/4",
                delay: 1.1,
              },
            ].map((lang, i) => (
              <div
                key={i}
                className={`absolute ${lang.position} text-subtle/40`}
              >
                <lang.Icon size={lang.size} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center z-10 backdrop-blur-sm px-4">
            <div className="rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium mb-6">
              Multiple Languages
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Built for every developer
            </h2>

            <h3 className="text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              across all major languages
            </h3>

            <p className="text-center max-w-lg mb-8 text-subtle text-sm md:text-base">
              Whether you&apos;re working with JavaScript, Python, Go, or any
              other language — our tools are designed to fit seamlessly into
              your stack.
            </p>

            <Link
              href="/challenges"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-subtle/20 hover:bg-foreground/5 transition-colors"
            >
              Explore supported languages
              <FaArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mx-auto max-w-5xl px-4 mb-24">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to level up your coding skills?
                </h3>
                <p className="text-subtle max-w-md">
                  Join thousands of developers who are improving every day with
                  structured daily practice.
                </p>
              </div>

              <Link
                href="/challenges"
                className="w-full md:w-auto whitespace-nowrap inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 font-medium text-white transition-all hover:bg-primary/90"
              >
                Start Coding Now
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex flex-col items-center justify-center space-y-2 mt-32 max-w-6xl mx-auto px-2 md:px-1 mb-32 ">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            FA<span className="text-primary">Q</span>
          </h2>
          <div className="flex flex-col gap-4 mt-8 w-full px-4 transition">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  className="border border-outline/50 bg-feature-bg rounded-xl px-6 py-4 cursor-pointer hover:border-outline"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{faq.question}</h2>
                    {activeFAQ === index ? (
                      <FaArrowUp
                        size={20}
                        className="transition-transform transform"
                      />
                    ) : (
                      <FaArrowDown
                        size={20}
                        className="transition-transform transform"
                      />
                    )}
                  </div>

                  {activeFAQ === index && (
                    <div
                      className={`mt-4 text-sm text-subtle overflow-hidden transition-all duration-300'
                    }`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
