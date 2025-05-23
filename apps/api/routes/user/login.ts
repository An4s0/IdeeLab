import { Router } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "utils/jwt";
import { findUserBy } from "sql/queries/user";
import UserValidation from "validations/user.validation";

const router: Router = Router();

router.post("/login", async (req, res, next) => {
  try {
    // Validate request body
    const requiredFields = ["email", "password"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body),
    );

    if (missingFields.length > 0) {
      throw {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
    }
    const parseResult = UserValidation.login.safeParse(req.body);
    if (!parseResult.success) {
      throw parseResult.error;
    }

    const { email, password } = req.body;
    // Check if user exists
    const user = await findUserBy("email", email);
    if (!user) {
      throw {
        status: 404,
        message: "Invalid email or password",
      };
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw {
        status: 401,
        message: "Invalid email or password",
      };
    }

    // Generate JWT token
    const token = generateToken({ id: user.id, email: user.email });

    delete user.password;

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
