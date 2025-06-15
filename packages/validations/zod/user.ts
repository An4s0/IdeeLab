import z from "zod";

export const userValidation = {
  register: z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name must be less than 30 characters"),
    username: z
      .string()
      .min(1, "Username is required")
      .max(50, "Username must be less than 30 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .max(100, "Email must be less than 50 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be less than 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
  }),
  login: z.object({
    email: z
      .string()
      .email("Invalid email address")
      .max(100, "Email must be less than 50 characters"),
  }),
};
