import { Flame, Eye, Clock, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";
import { timeAgo } from "@/utils";
import type { IdeaType } from "@/types";

export default function IdeaCard({ idea }: { idea: IdeaType }) {
  const getDifficultyColor = (difficulty: string) => {
    difficulty = difficulty.toLocaleLowerCase();
    switch (difficulty) {
      case "beginner":
        return "bg-green/10 text-green border-green/5";
      case "intermediate":
        return "bg-yellow/10 text-yellow border-yellow/5";
      case "advanced":
        return "bg-red/10 text-red border-red/5";
      default:
        return "bg-subtle/10 text-subtle border-subtle/5";
    }
  };

  return (
    <div
      key={idea.id}
      className="block relative rounded-2xl p-6 backdrop-blur-sm border border-subtle/10 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100"></div>

      {idea.is_hot && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
          <Flame size={10} />
          HOT
        </div>
      )}

      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary-dark dark:text-primary text-xs font-semibold rounded-full">
            {idea.category}
          </span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(
              idea.difficulty
            )}`}
          >
            {idea.difficulty}
          </span>
        </div>
        <Link to={`/ideas/${idea.slug}`} className="">
          <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary">
            {idea.title}
          </h3>
        </Link>
        <p className="text-subtle text-sm leading-relaxed mb-4 line-clamp-3">
          {idea.summary}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-subtle">
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{idea.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{timeAgo(idea.created_at.toString())}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-subtle/10 hover:bg-subtle/7 text-green">
              <ThumbsUp size={16} />
              <span className="font-semibold text-sm">
                {idea.upvotes}
              </span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-subtle/10 hover:bg-subtle/7 text-red">
              <ThumbsDown size={16} />
              <span className="font-semibold text-sm">
                {idea.downvotes}
              </span>
            </button>
          </div>
          <span className="text-sm text-subtle font-medium">
            {idea.comments} comments
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {idea.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-subtle/10 text-subtle rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
