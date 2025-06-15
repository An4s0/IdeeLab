export interface INotification {
  id: string;
  user_id: string;
  title: string;
  description: string;
  type: string; // e.g., 'idea_voted', 'idea_commented', 'idea_approved', etc.
  is_read: boolean;
  created_at: string;
}
