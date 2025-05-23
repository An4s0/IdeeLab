-- Ideas table
-- This SQL script creates a table named 'ideas' with various fields to store idea information.
CREATE TABLE ideas (
  -- Unique identifier for each idea
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Main information
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  summary TEXT NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  tags TEXT[],

  -- Stats and flags
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  status VARCHAR(10) CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'published',
  is_hot BOOLEAN DEFAULT FALSE,
  difficulty VARCHAR(50) CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced', 'Expert')),
  edited BOOLEAN DEFAULT FALSE,

  -- Author
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Dates
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ideas_user_id ON ideas(user_id);
CREATE INDEX idx_ideas_status ON ideas(status);
CREATE INDEX idx_ideas_difficulty ON ideas(difficulty);
CREATE INDEX idx_ideas_category ON ideas(category);