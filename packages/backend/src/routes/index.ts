import { Router } from 'express';
import { CourseRoutes } from './CourseRoutes';
import { UserRoutes } from './UserRoutes';

export const AppRoutes = Router();

AppRoutes.use('/courses', CourseRoutes);
AppRoutes.use('/users', UserRoutes);
