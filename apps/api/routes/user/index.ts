import { Router } from "express";
const router: Router = Router();
import User from "../../models/user";
import { verifyToken } from "../../utils/jwt";
import { ApiResponse } from "../../types";

import register from "./register";
import login from "./login";
import VerifyEmail from "./verify-email";
import github from "./third-party/github";
import google from "./third-party/google";

router.use("/", register);
router.use("/", login);
router.use("/", VerifyEmail);
router.use("/github", github);
router.use("/google", google);

router.get("/", async (req, res) => {
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

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ApiResponse);

    console.error("Error in /user route:", error);
  }
});

export default router;
