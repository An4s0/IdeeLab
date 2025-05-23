import { Request, Response, NextFunction } from "express";

export const checkJsonContentType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Allow all GET requests to pass through without checking content type
  if (req.method === "GET") {
    next();
    return;
  }

  // Check if the request has a Content-Type header
  const contentType = req.headers["content-type"];
  if (!contentType || !contentType.includes("application/json")) {
    res.status(415).json({
      success: false,
      message: "Content-Type must be 'application/json'",
    });
    return;
  }

  next();
};
