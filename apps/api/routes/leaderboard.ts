import { Router } from "express";
import User from "../models/user";
import { ApiResponse } from "../types";
const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const parsedLimit = parseInt(limit as string, 10) || 10;

    const users = await User.find()
      .sort({ points: -1 })
      .limit(parsedLimit)
      .select("name username points picture");

    const leaderboard = users.map((user) => ({
      name: user.name,
      username: user.username,
      points: user.points,
      picture: user.picture,
    }));

    res.status(200).json({
      success: true,
      message: "Leaderboard fetched successfully",
      data: leaderboard,
    } as ApiResponse);
  } catch (error) {
    console.error("Error in /leaderboard route:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
    } as ApiResponse);
  }
});

export default router;
