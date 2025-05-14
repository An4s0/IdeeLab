import { Router } from "express";
const router: Router = Router();
import bcrypt from "bcryptjs";
import { ApiResponse } from "../../types";
import User from "../../models/user";
import { generateToken } from "../../utils/jwt";

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      } as ApiResponse);
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      res.status(400).json({
        success: false,
        message: "Email is not valid",
      } as ApiResponse);
      return;
    }

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

    const payload = {
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    };

    const token = generateToken(payload);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
      },
    } as ApiResponse<{ token: string }>);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ApiResponse);

    console.error("Error in /login route:", error);
  }
});

export default router;
