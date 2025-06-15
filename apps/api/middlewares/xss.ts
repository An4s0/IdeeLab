import { NextFunction, Request, Response } from "express";
import xss from "xss";

function sanitizeValue(value: unknown): unknown {
  if (typeof value === "string") {
    return xss(value);
  } else if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  } else if (typeof value === "object" && value !== null) {
    // If the value is an object, recursively sanitize its properties
    const sanitizedObj: Record<string, unknown> = {};
    for (const key in value as Record<string, unknown>) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        sanitizedObj[key] = sanitizeValue(
          (value as Record<string, unknown>)[key],
        );
      }
    }
    return sanitizedObj;
  }
  // If the value is not a string, array, or object, return it as is
  return value;
}

export const XSS = (req: Request, res: Response, next: NextFunction) => {
  // Sanitize request body
  if (req.body) {
    for (const key in req.body) {
      if (Object.prototype.hasOwnProperty.call(req.body, key)) {
        req.body[key] = sanitizeValue(req.body[key]);
      }
    }
  }

  // Sanitize query parameters
  if (req.query) {
    for (const key in req.query) {
      if (Object.prototype.hasOwnProperty.call(req.query, key)) {
        const sanitizedValue = sanitizeValue(req.query[key]);
        //
        if (
          typeof sanitizedValue === "string" ||
          Array.isArray(sanitizedValue) ||
          sanitizedValue === undefined
        ) {
          req.query[key] = sanitizedValue as string | string[] | undefined;
        }
      }
    }
  }

  next();
};
