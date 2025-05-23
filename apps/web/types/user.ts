export interface UserType {
  id: string;

  name: string;
  username: string;
  email: string;
  picture: string;
  bio: string;
  verified: boolean;
  role: string;
  points: number;
  provider: string;

  created_at: string;
  updated_at: string;
}
