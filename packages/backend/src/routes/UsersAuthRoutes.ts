import { Router, Request, NextFunction, Response } from 'express';
import { ApiResponse, IUser, IUserAuth, IUserCreation } from '@odemy/shared';

import { UsersAuthController } from '../controllers/entities/UsersAuthController';
import { ErrorController } from '../controllers/ErrorController';

export const UsersAuthRoutes = Router();

/**
 * Create User
 */
UsersAuthRoutes.post(
  '',
  async (
    req: Request,
    res: Response<ApiResponse<IUser>>,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const userController = UsersAuthController.getInstance();
      const result = await userController.create(body);

      res.status(200).send({ status: 'OK', data: result });
    } catch (err) {
      next(ErrorController.HandleError(err));
    }
  }
);
