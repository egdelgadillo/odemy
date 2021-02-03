import { Router, Request, NextFunction, Response } from 'express';
import { ApiResponse, IUser } from '@odemy/shared';

import { UserController } from '../controllers/entities/UserController';
import { ErrorController } from '../controllers/ErrorController';

export const UserRoutes = Router();

/**
 * Create User
 */
UserRoutes.post(
  '',
  async (
    req: Request,
    res: Response<ApiResponse<IUser>>,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const userController = UserController.getInstance();
      const result = await userController.create(body);

      res.status(200).send({ status: 'OK', data: result });
    } catch (err) {
      next(ErrorController.HandleError(err));
    }
  }
);

/**
 * Get all Users
 */
UserRoutes.get(
  '',
  async (
    req: Request,
    res: Response<ApiResponse<IUser>>,
    next: NextFunction
  ) => {
    try {
      const userController = UserController.getInstance();

      const result = await userController.getAll();

      res.status(200).send({ status: 'OK', ...result });
    } catch (err) {
      next(ErrorController.HandleError(err));
    }
  }
);
