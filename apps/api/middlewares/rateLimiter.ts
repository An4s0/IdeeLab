import { NextFunction, Request, Response } from "express";

// Maximum requests per window
const MAX_REQUESTS = 100;
// Time window in milliseconds
const WINDOW_SIZE = 15 * 60 * 1000;
// Rate limiter middleware to limit the number of requests from a single IP
const rateLimitMap: Map<string, { count: number; startTime: number }> =
  new Map();

export const RateLimiter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const ip: string =
    req.ip || req.headers["x-forwarded-for"]?.toString() || "unknown";
  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    next();
    return;
  }

  const rateLimitData = rateLimitMap.get(ip)!;

  // Reset count if the time window has passed
  if (currentTime - rateLimitData.startTime > WINDOW_SIZE) {
    rateLimitData.count = 1;
    rateLimitData.startTime = currentTime;
    next();
    return;
  }

  // Increment count and check against max requests
  if (rateLimitData.count < MAX_REQUESTS) {
    rateLimitData.count++;
    next();
  } else {
    throw {
      status: 429,
      status_type: "error",
      message: "Too many requests, please try again later.",
    };
  }
};
