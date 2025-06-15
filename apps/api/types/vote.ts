export interface IVote {
  id: string;
  user_id: string;
  idea_id: string;
  type: "upvote" | "downvote";
  created_at: string;
}
