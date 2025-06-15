-- Ideas table
CREATE TABLE ideas (
  -- Unique identifier for each idea
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID who created the idea
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Core idea information
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  summary TEXT NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',

  -- Technical content
  technologies TEXT[] NOT NULL DEFAULT '{}',
  implementation_steps TEXT[] NOT NULL DEFAULT '{}',
  features TEXT[] NOT NULL DEFAULT '{}',
  challenges TEXT[] NOT NULL DEFAULT '{}',
  monetization TEXT[] NOT NULL DEFAULT '{}',

  -- Target and audience
  target_audience TEXT NOT NULL,
 
  -- State & difficulty
  status VARCHAR(20) NOT NULL DEFAULT 'draft' CHECK (
    status IN ('draft', 'published', 'archived')
  ),
  difficulty VARCHAR(20) NOT NULL DEFAULT 'beginner' CHECK (
    difficulty IN ('beginner', 'intermediate', 'advanced', 'expert')
  ),
  estimated_time VARCHAR(50) NOT NULL DEFAULT 'unknown',
  is_hot BOOLEAN DEFAULT FALSE,
  edited BOOLEAN DEFAULT FALSE,

  -- Engagement metrics
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0,
  favorites INT DEFAULT 0,
  comments INT DEFAULT 0,
  views INT DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);