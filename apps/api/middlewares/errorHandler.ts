import { NextFunction, Request, Response } from "express";

// Error handling middleware to catch and respond to errors
export const ErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // Custom error with status
    if (err.status && err.message && err.status_type) {
        res.status(err.status).json({
            status: err.status_type,
            message: err.message,
        });
        return;
    }

    // Log the error in development mode
    if (process.env.NODE_ENV == "development") {
        console.error(" \x1b[31mX\x1b[0m Error caught:", err);
    }

    // Generic internal server error
    res.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
}