export interface VerificationTokenType {
  id?: string;

  email: string;
  token: string;
  type: string;

  expires_at: Date;
  created_at?: Date;
}
