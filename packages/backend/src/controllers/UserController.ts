import { IUser } from '@odemy/shared';
import { UsersModel } from '../models/UsersModel';
import { ModelsController } from './ModelsController';
import { ValidateObject } from '../../../../../object-validator';
import { UserModelValidator } from '@odemy/shared';

export class UserController extends ModelsController<IUser> {
  static instance: UserController;

  constructor() {
    super();
    console.log('Initializing UserController...');
  }

  async create(user: IUser) {
    const userObject = ValidateObject(user, UserModelValidator, {
      throwOnError: true,
    });
    const result = await UsersModel.create(userObject);
    return result;
  }

  async getAll() {
    const result = await UsersModel.findAndCountAll();

    return {
      data: result.rows,
      limit: 20,
      page: 1,
      total: result.count,
    };
  }

  async get(id: string) {
    const result = await UsersModel.findByPk(id);

    if (!result) {
      throw new Error('User not found');
    }

    return result;
  }

  async delete(id: string) {
    const result = await UsersModel.findByPk(id);

    if (!result) {
      throw new Error('User not found');
    }

    await result.destroy();

    return result;
  }

  static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
}
