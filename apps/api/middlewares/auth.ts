import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Authentication middleware to verify JWT tokens
export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw {
      status: 401,
      status_type: "error",
      message: "No token provided",
    };
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "default_secret",
    (err, decoded) => {
      if (err) {
        throw {
          status: 401,
          status_type: "error",
          message: "Invalid token",
        };
      }

      // Attach user information to the request object
      req.user = decoded;
      next();
    },
  );
};
