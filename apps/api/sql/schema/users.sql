-- Users table
-- This SQL script creates a table named 'users' with various fields to store user information.
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
  verified BOOLEAN DEFAULT FALSE,
  role VARCHAR(10) CHECK (role IN ('user', 'moderator', 'admin')) DEFAULT 'user',

  -- Provider information
  provider VARCHAR(50) DEFAULT 'credentials',
  provider_id VARCHAR(255),

  status VARCHAR(10) CHECK (status IN ('active', 'disabled', 'banned')) DEFAULT 'active',
  
  -- Date and time
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMPو
  last_login TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);