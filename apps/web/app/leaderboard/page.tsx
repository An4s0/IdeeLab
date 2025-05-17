import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leaderboard",
  description: "View the leaderboard of the top users on IdeeLab.",
};

import LeaderboardPage from "./leaderboard";

export default function Leaderboard() {
  return <LeaderboardPage />;
}
