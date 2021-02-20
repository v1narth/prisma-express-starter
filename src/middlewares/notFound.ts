import { NextFunction } from "connect";
import { Request, Response } from "express";

const notFoundMiddleware = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).send({
    message: "Not found",
  });
};

export default notFoundMiddleware;
