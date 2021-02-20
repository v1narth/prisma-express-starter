import { NextFunction } from "connect";
import { Request, Response } from "express";
import ErrorHandler from "utils/ErrorHandler";

const errorHandlerMiddleware = () => (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status ?? 500;
  res.status(status).send({
    error: {
      message: err.message,
      status: status,
      stack: process.env.DEBUG && err.stack, // Return stack only when DEBUG=true
    },
  });
};

export default errorHandlerMiddleware;
