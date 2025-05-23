import { Router } from "express";
import { verifyToken } from "utils/jwt";
import { findAllIdeas } from "sql/queries/idea";
import IdeaValidation from "validations/idea.validation";
import { findUserBy } from "sql/queries/user";

const router: Router = Router();

router.get("/get", async (req, res, next) => {
  try {
    const { limit, offset, status } = req.query;

    // Check if limit and offset are provided
    if (!limit || !offset) {
      throw {
        status: 400,
        message: "Limit and offset are required",
      };
    }

    // Convert limit and offset to numbers
    const limitNumber = parseInt(limit as string, 10);
    const offsetNumber = parseInt(offset as string, 10);

    if (isNaN(limitNumber) || isNaN(offsetNumber)) {
      throw {
        status: 400,
        message: "Limit and offset must be numbers",
      };
    }

    // Check if limit and offset are provided
    const parseResult = IdeaValidation.get.safeParse({
      limit: limitNumber,
      offset: offsetNumber,
    });
    if (!parseResult.success) {
      throw parseResult.error;
    }

    if (status && status !== "published") {
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

      // Check if user is admin or moderator
      if (user.role !== "admin" && user.role !== "moderator") {
        throw {
          status: 403,
          message: "You do not have permission to access this resource",
        };
      }
    }

    // Call the findAllIdeas function with the parsed limit and offset
    const ideas = await findAllIdeas(
      limitNumber,
      offsetNumber,
      (status as string) || "published",
    );
    if (!ideas) {
      throw {
        status: 404,
        message: "No ideas found",
      };
    }

    // Send the ideas as a response
    res.status(200).json({
      success: true,
      message: "Ideas fetched successfully",
      data: ideas,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
