export interface IdeaType {
  id?: string;

  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  tags: string[];

  upvotes: number;
  downvotes: number;
  comments: number;
  views: number;
  status: "draft" | "published" | "archived";
  is_hot: boolean;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  edited: boolean;

  user_id: string;

  created_at: string;
  updated_at: string;
  published_at: string | null;
}
