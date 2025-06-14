import { NextFunction, Request, Response } from 'express';
import xss from 'xss';

function sanitizeValue(value: any): any {
  if (typeof value === 'string') {
    return xss(value);
  } else if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  } else if (typeof value === 'object' && value !== null) {
    // If the value is an object, recursively sanitize its properties
    const sanitizedObj: any = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        sanitizedObj[key] = sanitizeValue(value[key]);
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
        req.query[key] = sanitizeValue(req.query[key]);
      }
    }
  }

  next();
};
