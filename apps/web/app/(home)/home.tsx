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
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen transition">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 mt-32 py-20 overflow-hidden max-w-2xl md:max-w-3xl mx-auto px-2 md:px-1">
          <p className="text-subtle text-md md:text-xl sm:text-lg">
            Daily Coding. Real Growth.
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
            Code every day. <br />{" "}
            <span className="text-primary">Get better every day.</span>
          </h1>
          <p className="text-subtle text-sm md:text-lg">
            IdeeLab is your daily coding companion. <br />
            Sharpen your skills with daily challenges, smart tools, and real
            progress — one problem at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/challenges/1">
              <div className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-white shadow-lg shadow-primary/30 transition active:scale-95">
                <span className="flex items-center gap-1">
                  Start Challenge
                  <div className="ml-1 transition-transform group-hover:translate-x-1">
                    <FaArrowRight size={16} />
                  </div>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </div>
            </Link>
            <Link href="/challenges">
              <div className="inline-flex items-center h-12 px-6 rounded-md border border-outline hover:bg-outline/20">
                Explore Challenges
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2 mt-4 text-xs text-foreground/80">
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              Daily Practice
            </span>
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              Beginner Friendly
            </span>
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              Real-Time Progress
            </span>
          </div>
          <div className="mt-2 flex gap-6 text-sm text-subtle">
            <div>
              <span className="font-bold text-foreground">8k+</span> developers
            </div>
            <div>
              <span className="font-bold text-foreground">135+</span> challenges
            </div>
            <div>
              <span className="font-bold text-foreground">100%</span> free
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
        <section className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-28 py-12 relative">
          <div className="absolute w-full h-full text-subtle/30">
            <div className="absolute top-0 left-12">
              <FaJava size={50} />
            </div>

            <div className="absolute top-0 right-12">
              <TbBrandCpp size={50} />
            </div>

            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <TbBrandCSharp size={50} />
            </div>

            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <RiJavascriptFill size={45} />
            </div>

            <div className="absolute bottom-14 left-24">
              <FaPython size={40} />
            </div>

            <div className="absolute bottom-14 right-24">
              <DiRuby size={40} />
            </div>

            <div className="absolute bottom-0 left-1/4">
              <BiLogoTypescript size={45} />
            </div>

            <div className="absolute bottom-0 right-1/4">
              <FaGolang size={50} />
            </div>
          </div>

          <div className="flex flex-col items-center text-center z-10">
            <h1 className="text-2xl font-bold mb-2 md:text-4xl">
              Built for every developer
            </h1>
            <h2 className="text-xl font-bold mb-6 md:text-3xl">
              across all major languages
            </h2>
            <p className="text-center max-w-lg mb-6 text-subtle text-sm md:text-base">
              Whether you&apos;re working with JavaScript, Python, Go, or any
              other language — our tools are designed to fit seamlessly into
              your stack.
            </p>
            <br />
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
