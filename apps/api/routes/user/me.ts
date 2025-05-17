import { Router } from "express";
import User from "../../models/user";
import { verifyToken } from "../../utils/jwt";
import { ApiResponse } from "../../types";
const router: Router = Router();

router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Authorization token is missing",
      } as ApiResponse);
      return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      } as ApiResponse);
      return;
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      } as ApiResponse);
      return;
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    } as ApiResponse);
  } catch (error) {
    console.error("Error in /me route:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
    } as ApiResponse);
  }
});

export default router;
