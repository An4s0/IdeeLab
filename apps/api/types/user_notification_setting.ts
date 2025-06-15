export interface IUserNotificationSetting {
  id: string;
  user_id: string;
  type: string; // e.g., 'idea_voted', 'idea_commented', 'idea_approved', etc.
  is_enabled: boolean;
  created_at: string;
}
