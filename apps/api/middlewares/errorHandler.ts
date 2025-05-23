import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Zod validation error
  if (err instanceof ZodError) {
    res.status(400).json({
      message: "Validation error",
      errors: err.errors,
    });
    return;
  }

  // Custom error with status
  if (err.status && err.message) {
    res.status(err.status).json({
      message: err.message,
    });
    return;
  }

  if (process.env.NODE_ENV == "development") {
    console.error(" \x1b[31mX\x1b[0m Error caught:", err);
  }

  // Generic internal server error
  res.status(500).json({
    message: "Internal server error",
    error: err.message || "Unknown error",
  });
};
