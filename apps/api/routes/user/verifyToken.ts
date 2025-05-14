import { Router } from "express";
const router: Router = Router();
import { verifyToken } from "../../utils/jwt";
import { ApiResponse } from "../../types";

router.get("/verify-token", async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: false,
        message: "No token provided",
      });
      return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(401).json({
        success: false,
        message: "Invalid token",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Token is valid",
      data: decoded,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ApiResponse);

    console.error("Error in /verify-token:", error);
  }
});

export default router;
