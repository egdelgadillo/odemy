import { ICourse } from '@odemy/shared';
import { CoursesModel } from '../../models/CoursesModel';
import { ModelsController } from '../ModelsController';

export class CourseController extends ModelsController {
  static instance: CourseController;

  constructor() {
    super();
    console.log('Initializing CourseController...');
  }

  async create(user: ICourse) {
    const result = await CoursesModel.create(user);
    return result;
  }

  async getAll() {
    const result = await CoursesModel.findAndCountAll();

    return {
      data: result.rows,
      page: 1,
      limit: 1,
      total: result.count,
    };
  }

  async get(id: string) {
    const result = await CoursesModel.findByPk(id);

    if (!result) {
      throw new Error('Course not found');
    }

    return result;
  }

  async delete(id: string) {
    const result = await CoursesModel.findByPk(id);

    if (!result) {
      throw new Error('Course not found');
    }

    await result.destroy();

    return result;
  }

  static getInstance() {
    if (!CourseController.instance) {
      CourseController.instance = new CourseController();
    }
    return CourseController.instance;
  }
}
