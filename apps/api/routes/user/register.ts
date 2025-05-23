import { Router } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "utils/jwt";
import { findUserBy, createUser } from "sql/queries/user";
import UserValidation from "validations/user.validation";

const router: Router = Router();

router.post("/register", async (req, res, next) => {
  try {
    // Validate request body
    const requiredFields = ["name", "username", "email", "password"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body),
    );

    if (missingFields.length > 0) {
      throw {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
    }
    const parseResult = UserValidation.register.safeParse(req.body);
    if (!parseResult.success) {
      throw parseResult.error;
    }

    const { name, username, email, password } = req.body;
    // Check if email or username already exists
    const existingUser = await findUserBy("email", email);
    if (existingUser) {
      throw {
        status: 409,
        message: "Email is already in use",
      };
    }

    const existingUsername = await findUserBy("username", username);
    if (existingUsername) {
      throw {
        status: 409,
        message: "Username is already taken",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await createUser({
      name,
      username,
      email,
      password: hashedPassword,
      provider: "credential",
    });
    if (!newUser) {
      throw new Error("Failed to create user. Please try again later.");
    }

    // Generate JWT token
    const token = generateToken({ id: newUser.id, email: newUser.email });

    delete newUser.password;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        ...newUser,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
