export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    picture: string;
    bio: string;
    verified: boolean;
    role: string; // 'user' | 'moderator' | 'sponsor' | 'editor' | 'developer' | 'admin'
    status: string; // 'active' | 'inactive' | 'banned'
    provider: string; // 'credentials' | 'google' | 'github'
    provider_id?: string; // Optional for OAuth providers
    created_at: string;
    updated_at: string;
}