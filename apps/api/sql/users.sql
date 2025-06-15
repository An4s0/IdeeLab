-- Users table
CREATE TABLE users (
  -- Unique identifier for each user
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User information
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(100),
  picture TEXT DEFAULT 'https://i.imgur.com/Gtek9ie.png',
  bio TEXT DEFAULT 'Hello, I am using IdeeLab!',

  -- Roles & status
  verified BOOLEAN DEFAULT FALSE,
  role VARCHAR(20) CHECK (role IN (
    'user',        -- Regular user with basic access
    'moderator',   -- Can moderate content and manage users (e.g. delete ideas, ban users)
    'sponsor',     -- Partner who supports the platform financially; may access sponsorship tools
    'editor',      -- Can edit public content (e.g. documentation, blog posts)
    'developer',   -- Internal developer with access to test or debug features
    'admin'        -- Full access to the system; can manage everything
  )) DEFAULT 'user',
  status VARCHAR(10) CHECK (status IN ('active', 'disabled', 'banned')) DEFAULT 'active',

  -- Auth providers
  provider VARCHAR(50) DEFAULT 'credentials',
  provider_id VARCHAR(255),
  
  -- Timestamps
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);