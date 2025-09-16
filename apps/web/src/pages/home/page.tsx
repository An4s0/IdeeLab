import { useTitle } from "@/hooks/useTitle";
import { Header } from "@/components/header";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight } from "lucide-react";

export default function HomePage() {
  useTitle("IdeeLab | Where coding ideas come alive");

  return (
    <>
      <Header />
      <main className="p-3 mt-16">
        <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden">
          <img
            src="/banner.svg"
            alt="Banner"
            className="absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 opacity-70 blur-[4px]"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-bgltr/20 via-transparent to-bgltr/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bgltr/40 via-transparent to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              Idea of the Day
            </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-subtle max-w-md lg:max-w-lg leading-relaxed font-medium">
              AI-powered resume builder that writes CVs for you.
            </p>

            <Link
              to="/ideas/1"
              className="mt-5 px-5 py-2.5 bg-primary text-white rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition"
            >
              Explore Idea
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
