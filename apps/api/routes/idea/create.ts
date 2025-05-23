import { Router } from "express";
import { verifyToken } from "utils/jwt";
import { createIdea, findIdeaBy } from "sql/queries/idea";
import IdeaValidation from "validations/idea.validation";
import { findUserBy } from "sql/queries/user";

const router: Router = Router();

router.post("/create", async (req, res, next) => {
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

    // Validate required fields
    const requiredFields = [
      "title",
      "summary",
      "description",
      "category",
      "tags",
      "difficulty",
    ];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body),
    );

    if (missingFields.length > 0) {
      throw {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
    }

    // Validate using Zod schema
    const parseResult = IdeaValidation.create.safeParse(req.body);
    if (!parseResult.success) {
      throw parseResult.error;
    }

    const { title, summary, description, category, tags, difficulty } =
      req.body;

    // Find idea by slug
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const existingIdea = await findIdeaBy("slug", slug);
    if (existingIdea) {
      throw {
        status: 409,
        message: "Idea with this title already exists",
      };
    }

    // Create the idea
    const newIdea = await createIdea({
      title,
      summary,
      description,
      category,
      tags,
      difficulty,
      user_id: user.id,
    });
    if (!newIdea) {
      throw new Error("Failed to create idea. Please try again later.");
    }

    res.status(201).json({
      success: true,
      message: "Idea created successfully",
      data: newIdea,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
