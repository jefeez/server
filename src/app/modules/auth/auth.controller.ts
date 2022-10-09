import { NextFunction, Request, Response } from 'express';
import auth from './auth.service';

const signin = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { body } = request;
    const entity = await auth.signin(body);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const signup = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { body } = request;
    const entity = await auth.signup(body);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const user = async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.status(200).json(request.user);
  } catch (error) {
    next(error);
  }
};

export default { signin, signup, user };
