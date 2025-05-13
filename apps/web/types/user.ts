export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  bio: string;
  isVerified: boolean;
  role: string;
  points: number;
  provider: string;
  providerId: string;
  providerAccessToken: string;
  providerRefreshToken: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
