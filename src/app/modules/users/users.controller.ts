import cloudinary from '@providers/cloudinary';
import { NextFunction, Request, Response } from 'express';
import users from './users.service';

const index = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const entity = await users.index();
    response.status(201).json(entity);
  } catch (error) {
    next(error);
  }
};

const store = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { body } = request;
    const { url: avatar } = await cloudinary(request.file, 'users');
    const entity = await users.store({ ...body, avatar });
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const show = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    const entity = await users.show(id);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const update = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    const { body } = request;
    const entity = await users.update(id, body);
    response.status(204).json(entity);
  } catch (error) {
    next(error);
  }
};

const destroy = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    const entity = await users.destroy(id);
    response.status(204).json(entity);
  } catch (error) {
    next(error);
  }
};

export default { index, store, show, update, destroy };
