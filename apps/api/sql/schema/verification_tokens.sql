-- Verification tokens table
-- This table stores tokens used for email verification and password reset.
CREATE TABLE verification_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Token information
  email VARCHAR(255) NOT NULL,
  token TEXT NOT NULL UNIQUE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('email', 'password')),

  -- Date and time
  expires_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);