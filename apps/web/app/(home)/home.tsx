"use client";
import Link from "next/link";
import { FaArrowRight, FaJava, FaPython, FaGolang } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
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
      </div>

      <Footer />
    </main>
  );
}
