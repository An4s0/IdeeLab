import { Router } from "express";
import { verifyToken } from "../../utils/jwt";
import { findUserBy, updateUser } from "sql/queries/user";
import {
  createVerificationToken,
  findVerificationTokenBy,
  deleteVerificationToken,
} from "sql/queries/verification-token";
import generateStr from "utils/generateStr";
import sendVerificationEmail from "utils/send-verification-email";

const router: Router = Router();

router.get("/verify-email", async (req, res, next) => {
  try {
    // Validate request headers
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw {
        status: 401,
        message: "Authorization header is missing",
      };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw {
        status: 401,
        message: "Authorization token is missing",
      };
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      throw {
        status: 401,
        message: "Invalid or expired token",
      };
    }

    // Find user by ID
    const user = await findUserBy("id", decoded.id);
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    // Check if user is already verified
    if (user.verified) {
      res.status(200).json({
        success: true,
        message: "Email is already verified",
      });
      return;
    }

    // Check if user has already requested a verification email
    const existingToken = await findVerificationTokenBy("email", user.email);
    if (existingToken) {
      throw {
        status: 400,
        message:
          "A verification email has already been sent. Please wait for a 10 minutes before requesting a new one.",
      };
    }

    // Generate verification token
    const verificationToken = generateStr(32);
    const createdToken = await createVerificationToken({
      email: user.email,
      token: verificationToken,
      type: "email",
      expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes expiration
    });
    if (!createdToken) {
      throw new Error(
        "Failed to generate verification token. Please try again later.",
      );
    }

    // Send verification email
    const emailSent = await sendVerificationEmail(
      user.email,
      verificationToken,
    );
    if (!emailSent) {
      throw new Error(
        "Failed to send verification email. Please try again later.",
      );
    }

    res.status(200).json({
      success: true,
      message: "Verification email sent successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/verify-email/:token", async (req, res, next) => {
  try {
    const { token } = req.params;

    // Find verification token
    const verificationToken = await findVerificationTokenBy("token", token);
    if (!verificationToken) {
      throw {
        status: 404,
        message: "Invalid or expired verification token",
      };
    }

    // Find user by email
    const user = await findUserBy("email", verificationToken.email);
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    // Update user to verified
    const updatedUser = await updateUser(user.id, {
      verified: true,
    });
    if (!updatedUser) {
      throw new Error("Failed to update user verification status");
    }

    // Delete verification token
    const deletedToken = await deleteVerificationToken(token);
    if (!deletedToken) {
      throw new Error(
        "Failed to delete verification token after successful verification",
      );
    }

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
