-- Comments table
CREATE TABLE comments (
  -- Unique identifier for each comment
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID who made the comment
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Idea ID that the comment is associated with
  idea_id UUID NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,

  -- Content of the comment
  content TEXT NOT NULL,

  -- Optional parent comment ID for threaded comments
  parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE DEFAULT NULL,

  -- Votes count for the comment
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0,

  -- Timestamp when the comment was created
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Unique constraint to prevent duplicate comments by the same user on the same idea
  UNIQUE (user_id, idea_id, content)
);