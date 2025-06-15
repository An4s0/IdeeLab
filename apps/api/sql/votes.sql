-- Votes table
CREATE TABLE votes (
  -- Unique identifier for each vote
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID who cast the vote
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Idea ID that is being voted on
  idea_id UUID NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,

  -- Vote type (e.g., 'upvote', 'downvote')
  type VARCHAR(10) CHECK (type IN ('upvote', 'downvote')) NOT NULL,

  -- Timestamp when the vote was created
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Unique constraint to prevent duplicate votes by the same user on the same idea
  UNIQUE (user_id, idea_id)
);