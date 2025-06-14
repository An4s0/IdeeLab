import { Request, Response, NextFunction } from "express";

// Logger middleware to log incoming requests and their duration
export const Logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const statusIcon =
      res.statusCode < 400 ? "\x1b[92m✓\x1b[0m" : "\x1b[31mX\x1b[0m";
    console.log(
      ` ${statusIcon} ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
    );
  });
  next();
};