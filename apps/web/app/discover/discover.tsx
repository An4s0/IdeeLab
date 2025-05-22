'use client';
import { useState } from "react";
import Link from "next/link";

// import layout components (Header, Footer)
import Header from "@/components/header";
import Footer from "@/components/footer";
import ideas from "./ideas"

// import icons from react-icons
import { FaFire, FaClock, FaEye } from "react-icons/fa";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const ideasPerPage = 20;

  const startIndex = (page - 1) * ideasPerPage;
  const endIndex = startIndex + ideasPerPage;
  const paginatedIdeas = ideas.slice(startIndex, endIndex);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100/10 text-green-500 border-green-200/5';
      case 'Intermediate': return 'bg-yellow-100/10 text-yellow-500 border-yellow-200/5';
      case 'Advanced': return 'bg-red-100/10 text-red-500 border-red-200/5';
      default: return 'bg-gray-100/10 text-gray-500 border-gray-200/5';
    }
  };

  function timeAgo(dateString: string): string {
    const seconds = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);
    return `${years} years ago`;
  }

  return (
    <main>
      <Header />
      <div className="px-4 relative mt-30">
        <div className="text-center mb-16">
          {/* here sort and filter and etc... */}
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Discover Ideas
          </h1>
          <p className="text-subtle text-lg">
            Explore the latest ideas and trends in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-10">
          {paginatedIdeas.map((idea, index) => (
            <div
              key={index}
              className="block relative rounded-2xl p-6 backdrop-blur-sm border border-subtle/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {idea.isHot && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
                >
                  <FaFire size={10} />
                  HOT
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {idea.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(idea.difficulty)}`}>
                      {idea.difficulty}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/ideas/${idea.id}`}
                  className=""
                >
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {idea.title}
                  </h3>
                </Link>
                <p className="text-subtle text-sm leading-relaxed mb-4 line-clamp-3">
                  {idea.summary}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-subtle">
                  <div className="flex items-center gap-1">
                    <FaEye size={12} />
                    <span>{idea.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock size={12} />
                    <span>
                      {timeAgo(idea.createdAt.toString())}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50/5 hover:bg-green-100/10 transition-colors cursor-pointer"
                    >
                      <BiSolidUpvote size={16} className="text-green-600" />
                      <span className="text-green-700 font-semibold text-sm">{idea.upvotes}</span>
                    </div>
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-50/5 hover:bg-red-100/10 transition-colors cursor-pointer"
                    >
                      <BiSolidDownvote size={16} className="text-red-500" />
                      <span className="text-red-700 font-semibold text-sm">{idea.downvotes}</span>
                    </div>
                  </div>
                  <span className="text-sm text-subtle font-medium">{idea.comments} comments</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-subtle/10 hover:bg-primary/10 text-subtle hover:text-primary rounded-full text-xs font-medium transition-all cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 mb-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-outline/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-primary/50 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-subtle font-medium">
            Page {page} of {Math.ceil(ideas.length / ideasPerPage)}
          </span>
          <button
            onClick={() => setPage((prev) => (endIndex < ideas.length ? prev + 1 : prev))}
            disabled={endIndex >= ideas.length}
            className="px-4 py-2 rounded bg-outline/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-primary/50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}