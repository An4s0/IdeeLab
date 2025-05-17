"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import leaderboard from "@/lib/leaderboard";
import Image from "next/image";

interface LeaderboardData {
  name: string;
  username: string;
  points: number;
  picture: string;
}

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const res = await leaderboard(10);

        if (res.success) {
          setLeaderboardData(res?.data as LeaderboardData[]);
        } else {
          setError(res.message || "Failed to load leaderboard data");
        }
      } catch (err) {
        setError("An error occurred while fetching leaderboard data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 mt-20 md:mb-10">
        <h1 className="text-4xl font-bold text-center mb-12">Leaderboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4 rounded-lg">{error}</div>
        ) : (
          <div className="flex flex-col w-full space-y-4">
            {leaderboardData.map((user, index) => (
              <LeaderboardCard
                key={index}
                user={user}
                rank={index + 1}
                topPoints={leaderboardData[0]?.points || 1}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

const LeaderboardCard = ({
  user,
  rank,
  topPoints,
}: {
  user: LeaderboardData;
  rank: number;
  topPoints: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-outline/5 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-101"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full flex flex-row items-center">
        <div className="flex w-full items-center px-6 py-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
            {isHovered ? (
              <div className="flex items-center justify-center w-full h-full bg-primary/70 text-white font-bold">
                {rank}
              </div>
            ) : (
              <Image
                src={user.picture || "/default.png"}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="ml-8 flex-grow">
            <div className={`transform transition-all duration-300`}>
              <h3 className="font-bold text-lg">{user.name}</h3>
              {isHovered && (
                <p className="text-subtle text-sm">@{user.username}</p>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="font-bold text-2xl mr-2">
              {user.points.toLocaleString()}
            </div>
            <div className="text-xs text-subtle">points</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-subtle/8">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{
              width: `${Math.max((user.points / topPoints) * 100, 5)}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
