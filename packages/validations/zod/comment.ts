import z from "zod";

export const commentValidation = {
  create: z.object({
    idea_id: z
      .string()
      .min(1, "Idea ID is required")
      .max(50, "Idea ID must be less than 50 characters"),
    content: z
      .string()
      .min(1, "Content is required")
      .max(1000, "Content must be less than 1000 characters"),
    parent_comment_id: z
      .string()
      .max(50, "Parent comment ID must be less than 50 characters")
      .optional()
      .nullable(),
  }),
};
