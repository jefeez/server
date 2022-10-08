import { NextFunction, Request, Response } from 'express';

export const catcher = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handling
  if (err.name === 'HandlingError') {
    const obj = JSON.parse(err.message);
    res.status(obj.status).send(err.message);
  }
  // ValidationError
  else if (err.name === 'ValidationError') {
    const status = 400;
    res.status(status).send({ message: err.message, status });
  }
  // PRISMA throw
  else if (err.name === 'NotFoundError') {
    const status = 404;
    res.status(status).send({ message: err.message, status });
  } else {
    next(err);
  }
};
