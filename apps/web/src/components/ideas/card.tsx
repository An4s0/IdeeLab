// External Libraries
import { Link } from "react-router-dom";
import {
  Flame,
  Eye,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
} from "lucide-react";

// Types & Utils
import type { IdeaType } from "@/types";
import { timeAgo } from "@/utils";

export function IdeaCard({ idea }: { idea: IdeaType }) {
  // Difficulty color classes
  const getDifficultyColor = (difficulty: string) => {
    difficulty = difficulty.toLowerCase();
    switch (difficulty) {
      case "beginner":
        return "bg-green/10 text-green border-green/5 shadow-sm";
      case "intermediate":
        return "bg-yellow/10 text-yellow border-yellow/5 shadow-sm";
      case "advanced":
        return "bg-red/10 text-red border-red/5 shadow-sm";
      default:
        return "bg-subtle/10 text-subtle border-subtle/5";
    }
  };

  return (
    <div className="group relative rounded-2xl p-4 bg-bg border border-subtle/10 hover:border-subtle/30 overflow-hidden">
      {/* HOT Badge */}
      {idea.is_hot && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
          <Flame size={10} />
          HOT
        </div>
      )}

      <div className="relative z-10">
        {/* Category & Difficulty */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {idea.category}
          </span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(idea.difficulty)}`}
          >
            {idea.difficulty}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/ideas/${idea.slug}`}
          className="text-xl font-bold text-foreground hover:text-primary leading-tight"
        >
          {idea.title}
        </Link>

        {/* Summary */}
        <p className="text-subtle text-sm mt-1 mb-4 line-clamp-3 leading-relaxed">
          {idea.summary}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 text-sm text-subtle">
          <div className="flex items-center gap-1.5">
            <Eye size={14} />
            <span>{idea.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{timeAgo(idea.created_at.toString())}</span>
          </div>
          <div className="text-subtle">•</div>
          <span>{idea.comments} comments</span>
        </div>

        {/* Tags */}
        <div className="flex overflow-x-auto flex-wrap gap-2 mb-6">
          {idea.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-subtle/10 text-subtle rounded-md text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
          {idea.tags.length > 4 && (
            <span className="px-2.5 py-1 text-subtle text-xs">
              +{idea.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-subtle/10">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-subtle/10 text-green hover:bg-subtle/20">
              <ThumbsUp size={16} />
              <span className="font-semibold text-sm">{idea.upvotes}</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-subtle/10 text-red hover:bg-subtle/20">
              <ThumbsDown size={16} />
              <span className="font-semibold text-sm">{idea.downvotes}</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-subtle/10 text-subtle hover:bg-subtle/20">
              <Share2 size={16} />
              <span className="font-semibold text-sm">{idea.shares}</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-subtle/10 text-subtle hover:bg-subtle/20">
              <Bookmark size={16} />
              <span className="font-semibold text-sm">{idea.favorites}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
