import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

export const UserRoutes = Router();

/**
 * Create User
 */
UserRoutes.post('', async (req: Request, res: Response) => {
  const body = req.body;
  const userController = UserController.getInstance();

  const result = await userController.create(body);

  res.send({ data: result });
});

/**
 * Get all Users
 */
UserRoutes.get('', async (req: Request, res: Response) => {
  const userController = UserController.getInstance();

  const result = await userController.getAll();

  res.send({ data: result });
});
