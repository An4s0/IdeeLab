import { useTitle } from "@/hooks";
import { Header } from "@/components/header";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { IdeasGrid } from "@/components/ideas/ideas-grid";
import type { IdeaType } from "@/types";

export default function HomePage() {
  useTitle("IdeeLab | Where coding ideas come alive");

  const ideasSample: IdeaType[] = [
    {
      id: "1",
      user_id: "user-101",
      title: "AI-Powered Resume Builder",
      slug: "ai-resume-builder",
      summary:
        "Generates resumes automatically using AI based on job descriptions.",
      description:
        "A web app that uses AI to analyze job postings and create tailored resumes in minutes. Users can customize templates and track improvements.",
      category: "Web / AI",
      tags: ["AI", "Resume", "Productivity", "Web App"],
      main_feature: "Automatic resume generation with AI optimization",
      problem_solved:
        "Saves time and increases chances of getting noticed by recruiters",
      target_audience: "Job seekers, students, and professionals",
      status: "published",
      difficulty: "intermediate",
      estimated_time: "2 weeks",
      is_hot: true,
      edited: false,
      upvotes: 150,
      downvotes: 3,
      favorites: 80,
      comments: 25,
      views: 1200,
      shares: 40,
      created_at: "2025-09-16T10:00:00Z",
      updated_at: "2025-09-16T12:00:00Z",
      published_at: "2025-09-16T12:00:00Z",
    },
    {
      id: "2",
      user_id: "user-102",
      title: "Gamified Habit Tracker",
      slug: "gamified-habit-tracker",
      summary:
        "Track your habits with streaks, levels, and rewards to stay motivated.",
      description:
        "A mobile app that motivates users to build habits by turning daily routines into a game. Earn points, unlock badges, and compete with friends.",
      category: "Mobile / Productivity",
      tags: ["Gamification", "Habits", "Health", "Mobile App"],
      main_feature: "Gamified experience with points and badges",
      problem_solved: "Helps users maintain habits consistently and enjoyably",
      target_audience:
        "Anyone wanting to improve personal habits and productivity",
      status: "published",
      difficulty: "beginner",
      estimated_time: "1 month",
      is_hot: true,
      edited: true,
      upvotes: 200,
      downvotes: 5,
      favorites: 120,
      comments: 40,
      views: 2500,
      shares: 75,
      created_at: "2025-09-15T09:00:00Z",
      updated_at: "2025-09-16T08:30:00Z",
      published_at: "2025-09-15T09:00:00Z",
    },
    {
      id: "3",
      user_id: "user-103",
      title: "AR Learning App",
      slug: "ar-learning-app",
      summary:
        "Use Augmented Reality to teach kids science in an interactive way.",
      description:
        "An educational app that brings science concepts to life with AR. Kids can explore 3D models, conduct virtual experiments, and learn through play.",
      category: "Mobile / Education",
      tags: ["AR", "Education", "Kids", "Learning App"],
      main_feature: "Interactive AR experiments and 3D models",
      problem_solved:
        "Makes science learning fun, visual, and engaging for children",
      target_audience: "Students aged 6-14, teachers, and parents",
      status: "draft",
      difficulty: "advanced",
      estimated_time: "3 months",
      is_hot: false,
      edited: false,
      upvotes: 50,
      downvotes: 1,
      favorites: 30,
      comments: 5,
      views: 300,
      shares: 10,
      created_at: "2025-09-10T11:00:00Z",
      updated_at: "2025-09-12T14:00:00Z",
      published_at: "2025-09-12T14:00:00Z",
    },
  ];

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
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              Spark Ideas
            </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-subtle max-w-md lg:max-w-lg leading-relaxed font-medium">
              Discover and explore creative ideas shared by our community.
            </p>

            <Link
              to="/ideas"
              className="mt-5 px-5 py-2.5 bg-primary text-white rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90"
            >
              Explore Ideas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <IdeasGrid
          ideas={ideasSample}
          title="Trending"
          subtitle="Check out what’s popular right now"
        />
        <IdeasGrid
          ideas={ideasSample}
          title="Recommended"
          subtitle="Ideas picked for you based on your interests and activity"
        />
        <IdeasGrid
          ideas={ideasSample}
          title="Saved"
          subtitle="Your favorite ideas saved for quick access"
        />
        <br />
      </main>
    </>
  );
}
