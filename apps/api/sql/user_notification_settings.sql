-- User notification settings table
CREATE TABLE user_notification_settings (
  -- Unique identifier for each setting
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID for whom the settings apply
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Notification type (e.g., 'idea_voted', 'idea_commented', etc.)
  type VARCHAR(50) NOT NULL CHECK (type IN (
    'idea_voted',
    'idea_commented',
    'idea_approved',
    'idea_rejected',
    'account_verified',
    'account_banned',
    'account_disabled',
    'badge_earned',
    'weekly_digest',
    'admin_announcement',
    'system',
    'reply',
    'mention'
  )),

  -- Whether the user wants to receive this notification type
  is_enabled BOOLEAN DEFAULT TRUE,

  -- Creation timestamp for the setting
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Unique constraint to prevent duplicate settings for the same user and type
  UNIQUE (user_id, type)
);