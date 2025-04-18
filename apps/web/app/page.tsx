"use client";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
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
                  <ArrowRight size={16} />
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
      </section>
    </main>
  );
}
