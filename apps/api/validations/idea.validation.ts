import { z } from "zod";

const IdeaValidation = {
  create: z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters long")
      .max(255, "Title must not exceed 255 characters"),

    summary: z.string().min(10, "Summary must be at least 10 characters long"),

    description: z
      .string()
      .min(20, "Description must be at least 20 characters long"),

    category: z
      .string()
      .min(2, "Category must be at least 2 characters long")
      .max(50, "Category must not exceed 50 characters"),

    tags: z
      .array(z.string().min(1, "Each tag must have at least 1 character"))
      .min(1, "At least one tag is required"),

    difficulty: z
      .enum(["Beginner", "Intermediate", "Advanced", "Expert"])
      .nullable()
      .optional(),

    status: z.enum(["draft", "published", "archived"]).optional(),

    is_hot: z.boolean().optional(),

    // Optional fields
    upvotes: z.number().optional(),
    downvotes: z.number().optional(),
    comments: z.number().optional(),
    views: z.number().optional(),
    edited: z.boolean().optional(),
    slug: z.string().optional(),
    published_at: z.string().nullable().optional(),
  }),
  get: z.object({
    limit: z.number().min(1, "Limit must be at least 1"),
    offset: z.number().min(0, "Offset must be at least 0"),
  }),
};

export default IdeaValidation;
