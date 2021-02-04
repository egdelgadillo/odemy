import { Router } from 'express';

import { CourseRoutes } from './CourseRoutes';
import { UsersRoutes } from './UsersRoutes';
import { UsersAuthRoutes } from './UsersAuthRoutes';

export const AppRoutes = Router();

AppRoutes.use('/courses', CourseRoutes);
AppRoutes.use('/users', UsersRoutes);
AppRoutes.use('/auth', UsersAuthRoutes);
