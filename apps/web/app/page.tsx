"use client";
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
} from "@/components/icons";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen transition">
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
          <span className="px-2 py-1 bg-subtle/15 rounded-full">100% Free</span>
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
      <section className="flex flex-col items-center justify-center space-y-2 mt-20 max-w-6xl mx-auto px-2 md:px-1">
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
                  <span className="mr-2 text-primary">✔</span> Live stats on
                  every challenge
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✔</span> Visual progress
                  over time
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
                Fresh and exciting challenges every day to sharpen your skills
                and keep you engaged.
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
                Challenges, recommendations, and feedback tailored to your skill
                level and goals.
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
                  Learn and grow with a passionate community of coders. Share
                  solutions, give feedback, and grow together.
                </p>
              </div>
              <ul className="text-sm text-subtle space-y-1 pl-1">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✔</span> Public solutions
                  & discussions
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✔</span> Challenge
                  leaderboards
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✔</span> Peer reviews &
                  feedback
                </li>
              </ul>
            </div>
            <UserGroupIcon
              size={220}
              className="text-outline/50 group-hover:text-subtle/70 m-8 transition-colors duration-300 hidden md:block"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
