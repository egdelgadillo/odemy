import { Router, Request, Response } from 'express';

import { CourseController } from '../controllers/entities/CourseController';

export const CourseRoutes = Router();

CourseRoutes.get('', async (req: Request, res: Response) => {
  const coursesController = CourseController.getInstance();

  const result = await coursesController.getAll();

  res.send({ data: result });
});
