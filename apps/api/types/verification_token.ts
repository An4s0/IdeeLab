export interface VerificationToken {
    id: string;
    email: string;
    token: string;
    type: string; // 'email' | 'password_reset'
    expires_at: string; 
    created_at: string; 
}