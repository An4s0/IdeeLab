import { Router } from "express";
const router: Router = Router();
import { verifyToken } from "../../utils/jwt";
import { ApiResponse } from "../../types";
import User from "../../models/user";
import VerifyEmail from "../../models/verify-email";
import sendVerifyEmail from "../../utils/send-verify-email";
import generateVerificationToken from "../../utils/verification-token";

router.post("/send-verify-email", async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: false,
        message: "No token provided",
      } as ApiResponse);
      return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(401).json({
        success: false,
        message: "Invalid token",
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

    if (user.isVerified) {
      res.status(400).json({
        success: false,
        message: "User already verified",
      } as ApiResponse);
      return;
    }

    const existingVerifyEmail = await VerifyEmail.findOne({
      email: user.email,
    });
    if (existingVerifyEmail) {
      res.status(400).json({
        success: false,
        message: "Verification email already sent",
      } as ApiResponse);
      return;
    }

    const verificationToken = generateVerificationToken(32);

    const emailSent = await sendVerifyEmail(user.email, verificationToken);
    if (!emailSent) {
      res.status(500).json({
        success: false,
        message: "Failed to send verification email",
      } as ApiResponse);
      return;
    }

    const newVerifyEmail = new VerifyEmail({
      email: user.email,
      verificationToken,
    });
    await newVerifyEmail.save();

    res.status(200).json({
      success: true,
      message: "Verification email sent",
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ApiResponse);

    console.error("Error in /send-verify-email:", error);
  }
});

router.post("/verify-email/:token", async (req, res) => {
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
