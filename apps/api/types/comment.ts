export interface Comment {
    id: string;
    user_id: string;
    idea_id: string;
    content: string;
    parent_comment_id?: string;
    upvotes: number;
    downvotes: number;
    created_at: string;
    updated_at: string;
}