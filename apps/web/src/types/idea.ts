export type IdeaType = {
  // Unique identifier for each idea
  id: string;

  // User ID who created the idea
  user_id: string;

  // Core idea information
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  tags: string[];
  main_feature: string;
  problem_solved: string;

  // Target audience
  target_audience: string;

  // State & difficulty
  status: "draft" | "published" | "archived";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimated_time: string;
  is_hot: boolean;
  edited: boolean;

  // Engagement metrics
  upvotes: number;
  downvotes: number;
  favorites: number;
  comments: number;
  views: number;
  shares: number;

  // Timestamps
  created_at: string;
  updated_at: string;
  published_at: string;
};
