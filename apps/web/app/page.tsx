"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChartLineIcon,
  PieChartLineIcon,
  SparklesIcon,
  UserCheckIcon,
  UsersIcon,
  UserGroupIcon,
  DiamondTrophyIcon,
  UserCogIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@/components/icons";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
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
                    <ArrowRightIcon size={16} />
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
          <div className="flex flex-wrap gap-2 mt-4 text-xs text-foreground/80">
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              Daily Practice
            </span>
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              Beginner Friendly
            </span>
            <span className="px-2 py-1 bg-subtle/15 rounded-full">
              100% Free
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
                      <ChartLineIcon
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
                <PieChartLineIcon
                  size={220}
                  className="text-outline/50 group-hover:text-subtle/70 m-8 transition-colors duration-300 hidden md:block"
                />
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 lg:col-span-1  h-88 px-6 py-8 cursor-pointer hover:border-outline flex flex-col justify-between">
                <div className="w-full">
                  <h2 className="font-semibold mb-2 flex justify-start items-center">
                    <SparklesIcon
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
                  <DiamondTrophyIcon
                    size={180}
                    className="text-outline/50 group-hover:text-subtle/70 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 lg:col-span-1 h-88 px-6 py-8 cursor-pointer hover:border-outline flex flex-col justify-between">
                <div className="w-full">
                  <h2 className="font-semibold mb-2 flex justify-start items-center">
                    <UserCheckIcon
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
                  <UserCogIcon
                    size={180}
                    className="text-outline/50 group-hover:text-subtle/70 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="group border border-outline/50 bg-feature-bg rounded-xl col-span-2 h-88 px-6 py-8 cursor-pointer hover:border-outline flex justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold mb-2 flex justify-start items-center">
                      <UsersIcon
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
                <UserGroupIcon
                  size={220}
                  className="text-outline/50 group-hover:text-subtle/70 m-8 transition-colors duration-300 hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-28 py-12 relative">
          <div className="absolute w-full h-full text-subtle/30">
            {/* Java icon */}
            <div className="absolute top-0 left-12">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path>
              </svg>
            </div>

            {/* C++ icon */}
            <div className="absolute top-0 right-12">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 12h4"></path>
                <path d="M20 10v4"></path>
                <path d="M11 12h4"></path>
                <path d="M13 10v4"></path>
                <path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"></path>
              </svg>
            </div>

            {/* C# icon */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"></path>
                <path d="M16 7l-1 10"></path>
                <path d="M20 7l-1 10"></path>
                <path d="M14 10h7.5"></path>
                <path d="M21 14h-7.5"></path>
              </svg>
            </div>

            {/* Javascript icon */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"></path>
              </svg>
            </div>

            {/* Python icon */}
            <div className="absolute bottom-14 left-24">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
              </svg>
            </div>

            {/* Ruby icon */}
            <div className="absolute bottom-14 right-24">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.456 27.25c6.215 0.848 12.319 1.682 18.544 2.532-2.121-3.531-4.187-6.972-6.27-10.441-4.081 2.63-8.124 5.235-12.273 7.909zM29.755 7.705c-0.548 0.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-0.105 0.158-0.24 0.283-0.093 0.525 1.814 2.995 3.613 5.999 5.417 9 0.285 0.474 0.572 0.946 0.941 1.401 0.364-7.284 0.729-14.568 1.094-21.852-0.027-0.008-0.054-0.016-0.080-0.023zM4.995 17.043c0.085 0.081 0.296 0.127 0.395 0.079 1.74-0.855 3.491-1.691 5.192-2.617 0.555-0.302 0.982-0.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362 0.097-0.089 0.211-0.176 0.269-0.288 0.568-1.109 1.125-2.224 1.703-3.371-0.689-0.259-1.341-0.512-2.002-0.742-0.089-0.031-0.231 0.031-0.328 0.085-1.53 0.854-3.088 1.663-4.569 2.595-0.741 0.466-1.345 1.154-2.001 1.752-1.058 0.965-2.114 1.933-3.156 2.915-0.277 0.261-0.529 0.558-0.744 0.872-0.713 1.038-1.404 2.091-2.127 3.173 0.404 0.419 0.772 0.819 1.165 1.191zM11.353 15.625c-0.865 3.656-1.726 7.292-2.615 11.047 4.168-2.686 8.241-5.31 12.286-7.916-3.219-1.042-6.428-2.081-9.671-3.13zM28.692 7.74c-3.522 0.588-6.96 1.163-10.442 1.744 1.186 2.885 2.348 5.712 3.544 8.62 2.313-3.475 4.58-6.88 6.899-10.364zM11.498 14.877c3.172 1.030 6.28 2.039 9.479 3.077-1.188-2.894-2.335-5.687-3.506-8.538-1.995 1.824-3.959 3.62-5.973 5.461zM5.126 19.175c-1.125 2.689-2.211 5.286-3.317 7.93 2.126-0.063 4.187-0.124 6.318-0.187-1.001-2.582-1.982-5.114-3.001-7.744zM8.201 25.080c0.026-0.005 0.052-0.012 0.079-0.017 0.758-3.154 1.528-6.287 2.303-9.565-1.728 0.898-3.376 1.754-5.069 2.635 0.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229c-1.009-0.267-2.018-0.535-3.027-0.801-1.451-0.381-2.903-0.758-4.353-1.143-0.181-0.048-0.312-0.080-0.419 0.139-0.512 1.050-1.041 2.092-1.561 3.138-0.016 0.032-0.013 0.074-0.025 0.155 3.142-0.476 6.263-0.949 9.383-1.422 0.001-0.022 0.001-0.044 0.002-0.066zM21.564 4.841c2.709 0.75 5.419 1.499 8.223 2.275-0.472-1.344-0.909-2.59-1.359-3.872-2.303 0.511-4.577 1.015-6.852 1.519-0.004 0.026-0.008 0.051-0.012 0.077zM8.899 27.856c-1.019-0.117-2.064-0.009-3.097 0.008-0.849 0.015-1.697 0.047-2.545 0.073-0.088 0.003-0.175 0.020-0.262 0.114 7.015 0.649 14.030 1.297 21.044 1.946 0.005-0.031 0.009-0.063 0.014-0.094-2.249-0.307-4.497-0.614-6.746-0.921-2.802-0.383-5.599-0.803-8.408-1.127zM1.947 24.685c0.904-2.097 1.804-4.197 2.712-6.292 0.091-0.21 0.084-0.353-0.094-0.522-0.38-0.361-0.732-0.751-1.147-1.182-0.561 2.77-1.108 5.47-1.655 8.171 0.020 0.009 0.041 0.019 0.061 0.029 0.042-0.067 0.093-0.131 0.124-0.203zM19.763 4.287c1.524-0.393 3.071-0.701 4.608-1.044 0.099-0.022 0.197-0.055 0.295-0.083-0.005-0.025-0.010-0.050-0.015-0.075-2.165 0.291-4.331 0.583-6.606 0.889 0.62 0.271 1.098 0.473 1.718 0.314z"></path>
              </svg>
            </div>

            {/* TypeScript icon */}
            <div className="absolute bottom-0 left-1/4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z"></path>
              </svg>
            </div>

            {/* Go icon */}
            <div className="absolute bottom-0 right-1/4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.05 200.4 46.74 199.8 47.36 198.8L53.91 190.4C54.53 189.5 56.09 188.9 57.34 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.246 229.1C0 229.1-.3116 228.4 .3116 227.5L6.855 219.1C7.479 218.2 9.037 217.5 10.28 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.246 229.1zM75.72 255.9C75.1 256.8 75.41 257.7 76.65 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C81.95 246.2 80.71 247.1 80.08 248.1L75.72 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z"></path>
              </svg>
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
                      <ArrowUpIcon
                        size={20}
                        className="transition-transform transform"
                      />
                    ) : (
                      <ArrowDownIcon
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
