import z from "zod";

export const ideaValidation = {
  create: z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(100, "Title must be less than 100 characters"),
    summary: z
      .string()
      .min(1, "Summary is required")
      .max(500, "Summary must be less than 500 characters"),
    description: z
      .string()
      .min(1, "Description is required")
      .max(5000, "Description must be less than 5000 characters"),
    category: z
      .string()
      .min(1, "Category is required")
      .max(100, "Category must be less than 100 characters"),
    tags: z
      .array(
        z
          .string()
          .min(1, "Tag is required")
          .max(50, "Tag must be less than 50 characters"),
      )
      .min(1, "At least one tag is required")
      .max(10, "A maximum of 10 tags is allowed"),
    technologies: z
      .array(
        z
          .string()
          .min(1, "Technology is required")
          .max(50, "Technology must be less than 50 characters"),
      )
      .min(1, "At least one technology is required")
      .max(20, "A maximum of 10 technologies is allowed"),
    implementation_steps: z
      .array(
        z
          .string()
          .min(1, "Implementation step is required")
          .max(500, "Implementation step must be less than 500 characters"),
      )
      .min(3, "At least three implementation steps are required")
      .max(20, "A maximum of 20 implementation steps is allowed"),
    features: z
      .array(
        z
          .string()
          .min(1, "Feature is required")
          .max(500, "Feature must be less than 500 characters"),
      )
      .min(1, "At least one feature is required")
      .max(20, "A maximum of 20 features is allowed"),
    challenges: z
      .array(
        z
          .string()
          .min(1, "Challenge is required")
          .max(500, "Challenge must be less than 500 characters"),
      )
      .min(1, "At least one challenge is required")
      .max(20, "A maximum of 20 challenges is allowed"),
    monetization: z
      .array(
        z
          .string()
          .min(1, "Monetization strategy is required")
          .max(500, "Monetization strategy must be less than 500 characters"),
      )
      .min(1, "At least one monetization strategy is required")
      .max(10, "A maximum of 10 strategies is allowed"),
    target_audience: z
      .string()
      .min(1, "Target audience is required")
      .max(500, "Target audience must be less than 500 characters"),
    difficulty: z.enum(["beginner", "intermediate", "advanced", "expert"], {
      message:
        "Difficulty must be one of the following: beginner, intermediate, advanced, expert",
    }),
    estimated_time: z
      .string()
      .min(1, "Estimated time is required")
      .max(100, "Estimated time must be less than 100 characters")
      .optional()
      .nullable(),
  }),
};
