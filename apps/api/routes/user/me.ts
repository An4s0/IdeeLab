import { Router } from "express";
import { findUserBy } from "sql/queries/user";
import { verifyToken } from "utils/jwt";

const router: Router = Router();

router.get("/me", async (req, res, next) => {
  try {
    // Check if token is provided
    const token = req.headers["authorization"]?.split(" ")[1];
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
        message: "Invalid token",
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

    delete user.password;

    res.status(200).json({
      message: "User retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
