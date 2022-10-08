import { NextFunction, Request, Response } from 'express';
import { object, string } from 'yup';

const store = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Schema = object({
      avatar: string(),
      username: string().required(),
      email: string().email().required(),
    });
    const filter = await Schema.validate(request.body);
    request.body = filter;
    next();
  } catch (error) {
    next(error);
  }
};

const update = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Schema = object({
      avatar: string(),
      username: string(),
      email: string().email(),
    });
    const filter = await Schema.validate(request.body);
    request.body = filter;
    next();
  } catch (error) {
    next(error);
  }
};

const params = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Schema = object({
      id: string(),
    });
    await Schema.validate(request.params);
    next();
  } catch (error) {
    next(error);
  }
};

export { store, params, update };
