import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
config()


export const notFound =   (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(404);
  const error = new Error(` Not Found ${req.originalUrl}`);
  console.log("🚀 ~ error:", error)
  next(error);
};

export const errorHandler =  (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "" : err.stack,
  });
};
