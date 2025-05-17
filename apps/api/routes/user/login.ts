import { Router } from "express";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../../types";
import User from "../../models/user";
import { generateToken } from "../../utils/jwt";
const router: Router = Router();

interface LoginData {
  email: string;
  password: string;
}

function validateLoginData(data: LoginData): string | null {
  const { email, password } = data || {};
  if (!data) return "Request body is missing";

  if (!email) return "Email is required";
  if (!password) return "Password is required";

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Email is not valid";

  return null;
}

router.post("/login", async (req, res) => {
  try {
    const errorMsg = validateLoginData(req.body);
    if (errorMsg) {
      res.status(400).json({
        success: false,
        message: errorMsg,
      } as ApiResponse);
      return;
    }

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(400).json({
        success: false,
        message: "User not found",
      } as ApiResponse);
      return;
    }

    const isMatch = await bcrypt.compare(password, existingUser.password!);
    if (!isMatch) {
      res.status(400).json({
        success: false,
        message: "Email or password is incorrect",
      } as ApiResponse);
      return;
    }

    const token = generateToken({
      id: existingUser._id,
      email: existingUser.email,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token },
    } as ApiResponse<{ token: string }>);
  } catch (error) {
    console.error("Error in /login route:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
    } as ApiResponse);
  }
});

export default router;
