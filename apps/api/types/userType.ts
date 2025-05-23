export interface UserType {
  id: string;

  name: string;
  username: string;
  email: string;
  password?: string;
  picture: string;
  bio: string;
  verified: boolean;
  role: "user" | "moderator" | "admin";

  provider: string;
  provider_id?: string;

  status: "active" | "disabled" | "banned";

  created_at: string;
  updated_at: string;
  last_login: string;
}
