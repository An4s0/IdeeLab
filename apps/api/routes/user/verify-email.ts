import { Router } from "express";
import { ApiResponse } from "../../types";
import User from "../../models/user";
import VerifyEmail from "../../models/verify-email";
const router: Router = Router();

router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const verifyEmail = await VerifyEmail.findOne({
      verificationToken: token,
    });
    if (!verifyEmail) {
      res.status(400).json({
        success: false,
        message: "Invalid or expired verification token",
      } as ApiResponse);
      return;
    }

    const user = await User.findOne({ email: verifyEmail.email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      } as ApiResponse);
      return;
    }

    user.isVerified = true;
    await user.save();

    await VerifyEmail.deleteOne({
      verificationToken: token,
    });

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ApiResponse);

    console.error("Error in /verify-email/:token:", error);
  }
});

export default router;
