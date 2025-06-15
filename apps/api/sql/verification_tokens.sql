-- Verification tokens table
CREATE TABLE verification_tokens (
  -- Unique identifier for each token
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Email address associated with the token
  email VARCHAR(255) NOT NULL,

  -- Token value for verification
  token VARCHAR(255) NOT NULL UNIQUE,

  -- Type of verification (e.g., 'email', 'password_reset')
  type VARCHAR(50) CHECK (type IN ('email', 'password_reset')) NOT NULL,

  -- Expiration timestamp for the token
  expires_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,

  -- Creation timestamp for the token
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);