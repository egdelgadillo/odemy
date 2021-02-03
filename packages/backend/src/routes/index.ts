import { Router } from 'express';

import { CourseRoutes } from './CourseRoutes';
import { UsersRoutes } from './UsersRoutes';

export const AppRoutes = Router();

AppRoutes.use('/courses', CourseRoutes);
AppRoutes.use('/users', UsersRoutes);
