import { Router } from "express";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../../types";
import User from "../../models/user";
import { generateToken } from "../../utils/jwt";
const router: Router = Router();

interface RegisterData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function validateRegisterData(data: RegisterData): string | null {
  const { name, username, email, password, confirmPassword } = data || {};
  if (!data) return "Request body is missing";

  if (!name) return "Name is required";
  if (name.length < 3 || name.length > 20)
    return "Name must be between 3 and 20 characters long";
  if (!name.match(/^[a-zA-Z ]+$/))
    return "Name must contain only English letters and spaces";

  if (!username) return "Username is required";
  if (username.length < 3 || username.length > 20)
    return "Username must be between 3 and 20 characters long";
  if (!username.match(/^[a-zA-Z0-9_]+$/))
    return "Username must contain only English letters, numbers, and underscore";

  if (!email) return "Email is required";
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    return "Email format is invalid";

  if (!password) return "Password is required";
  if (password.length < 8 || password.length > 30)
    return "Password must be between 8 and 30 characters long";
  if (password.includes(" ")) return "Password must not contain spaces";
  if (!password.match(/[a-z]/))
    return "Password must contain at least one lowercase letter";
  if (!password.match(/[A-Z]/))
    return "Password must contain at least one uppercase letter";
  if (!password.match(/[0-9]/))
    return "Password must contain at least one number";
  if (!password.match(/[^a-zA-Z0-9]/))
    return "Password must contain at least one special character";

  if (!confirmPassword) return "Confirm password is required";
  if (password !== confirmPassword)
    return "Password and confirm password do not match";

  return null;
}

router.post("/register", async (req, res) => {
  try {
    const errorMsg = validateRegisterData(req.body);
    if (errorMsg) {
      res.status(400).json({
        success: false,
        message: errorMsg,
      } as ApiResponse);
      return;
    }

    const { name, username, email, password } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({
        success: false,
        message: "Email already exists",
      } as ApiResponse);
      return;
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(400).json({
        success: false,
        message: "Username already exists",
      } as ApiResponse);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      picture: "/default.png",
    });
    await newUser.save();

    const token = generateToken({
      id: newUser._id,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token,
        name,
        username,
        email,
      },
    } as ApiResponse);
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error occurred",
    } as ApiResponse);
  }
});

export default router;
