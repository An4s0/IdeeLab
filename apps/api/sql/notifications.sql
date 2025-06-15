-- Notifications table
CREATE TABLE notifications (
  -- Unique identifier for each notification
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID who receives the notification
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Title and description of the notification
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,

  -- Notification type (e.g., 'idea', 'comment', 'vote')
  type VARCHAR(50) CHECK (type IN (
    'idea_voted',          -- User voted on an idea
    'idea_commented',      -- User commented on an idea
    'idea_approved',       -- Idea was approved by a moderator
    'idea_rejected',       -- Idea was rejected by a moderator
    'account_verified',    -- User's account was verified
    'account_banned',      -- User's account was banned
    'account_disabled',    -- User's account was disabled
    'badge_earned',        -- User earned a new badge
    'weekly_digest',       -- Weekly digest of ideas and comments
    'admin_announcement',  -- Announcement from admin
    'system',              -- System notification (e.g., maintenance, updates)
    'reply',               -- Reply to a comment
    'mention'              -- User was mentioned in a comment or idea
  )) NOT NULL DEFAULT 'system',

  -- Read status of the notification
  is_read BOOLEAN DEFAULT FALSE,

  -- Timestamp when the notification was created
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Unique constraint to prevent duplicate notifications for the same user and type
  UNIQUE (user_id, type, content)
);