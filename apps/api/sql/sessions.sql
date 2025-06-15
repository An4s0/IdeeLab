-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
    -- Unique identifier for the session
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- User ID associated with the session
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Session token for authentication
    token VARCHAR(255) NOT NULL UNIQUE,

    -- Session information
    ip_address VARCHAR(64) NOT NULL,
    user_agent TEXT NOT NULL,

    -- Timestamps
    last_seen_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);