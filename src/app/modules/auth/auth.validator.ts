import { NextFunction, Request, Response } from 'express';
import { object, string } from 'yup';

const signin = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Schema = object({
      email: string().required(),
      password: string().required(),
    });
    const filter = await Schema.validate(request.body);
    request.body = filter;
    next();
  } catch (error) {
    next(error);
  }
};

const signup = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Schema = object({});
    const filter = await Schema.validate(request.body);
    request.body = filter;
    next();
  } catch (error) {
    next(error);
  }
};

export { signin, signup };
