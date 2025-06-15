-- Favorites table
CREATE TABLE favorites (
  -- Unique identifier for each favorite
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID who favorited the item
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Idea ID that is being favorited
  idea_id UUID NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,

  -- Timestamp when the favorite was created
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Unique constraint to prevent duplicate favorites by the same user on the same idea
  UNIQUE (user_id, idea_id)
);