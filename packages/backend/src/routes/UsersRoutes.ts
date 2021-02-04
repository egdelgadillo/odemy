import { Router, Request, NextFunction, Response } from 'express';
import { ApiResponse, IUser } from '@odemy/shared';

import { UsersController } from '../controllers/entities/UsersController';
import { ErrorController } from '../controllers/ErrorController';

export const UsersRoutes = Router();

/**
 * Create User
 */
// UsersRoutes.post(
//   '',
//   async (
//     req: Request,
//     res: Response<ApiResponse<IUser>>,
//     next: NextFunction
//   ) => {
//     try {
//       const body = req.body;
//       const userController = UsersController.getInstance();
//       const result = await userController.create(body);

//       res.status(200).send({ status: 'OK', data: result });
//     } catch (err) {
//       next(ErrorController.HandleError(err));
//     }
//   }
// );

/**
 * Get all Users
 */
UsersRoutes.get(
  '',
  async (
    req: Request,
    res: Response<ApiResponse<IUser>>,
    next: NextFunction
  ) => {
    try {
      const userController = UsersController.getInstance();

      const result = await userController.getAll();

      res.status(200).send({ status: 'OK', ...result });
    } catch (err) {
      next(ErrorController.HandleError(err));
    }
  }
);
