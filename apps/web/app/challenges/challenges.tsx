"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header/";
import EditorPage from "./editor";
import Footer from "@/components/footer/";
import IdeeLabIcon from "@repo/ui/ideelab";
import Link from "next/link";

function ChallengesContent() {
  const searchParams = useSearchParams();
  const level = searchParams.get("level");

  if (level) {
    return <EditorPage />;
  }

  const challengeLevels = [
    {
      id: "beginner",
      title: "Beginner",
      color: "#28a745",
      description:
        "Start your coding journey with simple problems that help you understand the basics of programming and problem-solving.",
      buttonText: "Start Beginner Challenge",
      link: "/challenges?level=beginner",
    },
    {
      id: "intermediate",
      title: "Intermediate",
      color: "#007bff",
      description:
        "Enhance your skills with moderate challenges that require a deeper understanding of algorithms and data structures.",
      buttonText: "Try Intermediate Challenge",
      link: "/challenges?level=intermediate",
    },
    {
      id: "advanced",
      title: "Advanced",
      color: "#fd7e14",
      description:
        "Tackle complex problems that require advanced algorithms and data structures, perfect for those looking to sharpen their skills.",
      buttonText: "Take Advanced Challenge",
      link: "/challenges?level=advanced",
    },
    {
      id: "expert",
      title: "Expert",
      color: "#ff0000",
      description:
        "Push your limits with expert-level challenges that test your problem-solving abilities and coding skills to the max.",
      buttonText: "Face Expert Challenge",
      link: "/challenges?level=expert",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-40 mt-20 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Choose Your Challenge Level
        </h1>
        <p className="text-subtle text-center max-w-2xl mx-auto mb-12 text-lg">
          Choose a difficulty level and start solving today challenges to
          improve your skills and track your progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {challengeLevels.map((level) => (
            <div
              key={level.id}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full bg-subtle/2 border border-outline/50"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <IdeeLabIcon color={level.color} size={36} />
                  </div>
                  <h2 className="ml-4 text-xl font-semibold">{level.title}</h2>
                </div>
                <p className="text-subtle mb-6">{level.description}</p>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href={level.link}
                  className="w-full inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-md text-center transition-colors duration-200 hover:bg-primary/80"
                >
                  {level.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ChallengesPage() {
  return (
    <main>
      <Suspense fallback={<div className="p-4">Loading challenge...</div>}>
        <ChallengesContent />
      </Suspense>
    </main>
  );
}
