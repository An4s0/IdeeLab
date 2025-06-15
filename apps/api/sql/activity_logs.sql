-- Activity logs table
CREATE TABLE activity_logs (
  -- Unique identifier for each activity log
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User information
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ip_address VARCHAR(64) NOT NULL,
  user_agent TEXT NOT NULL,

  -- Action type
  action VARCHAR(50) NOT NULL,

  -- Description of the activity
  description TEXT NOT NULL,

  -- Target type (e.g., 'idea', 'comment', 'vote')
  target_type VARCHAR(50) NOT NULL,

  -- Target ID (e.g., ID of the idea, comment, or vote)
  target_id UUID NOT NULL,

  -- Timestamp of the activity
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);