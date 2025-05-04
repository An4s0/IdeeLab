import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IdeeLab - Daily Coding Challenges",
};

import Link from "next/link";
import { FaArrowRight, FaJava, FaPython, FaGolang } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
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
          <Link
            href="/challenges"
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <div className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-white shadow-lg shadow-primary/30 transition active:scale-95">
              <span className="flex items-center gap-1">
                Today Challenges
                <div className="ml-1 transition-transform group-hover:translate-x-1">
                  <FaArrowRight size={16} />
                </div>
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </div>
          </Link>
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
              <span className="font-bold text-foreground">100%</span> free
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-28 py-12 relative mb-40 px-2">
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
      </div>
      <Footer />
    </main>
  );
}
