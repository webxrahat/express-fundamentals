import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues, // 👈 THIS is where details exist
    });
  }

  const status = err.status || 500;

  return res.status(status).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
