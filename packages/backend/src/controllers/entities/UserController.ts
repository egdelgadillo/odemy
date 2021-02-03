import { IUser, validateUser } from '@odemy/shared';

import { ModelsController } from '../ModelsController';
import { UsersModel } from '../../models/UsersModel';
import { ErrorController } from '../ErrorController';

export class UserController extends ModelsController<IUser> {
  static instance: UserController;

  constructor() {
    super();
    console.log('Initializing UserController...');
  }

  async create(user: IUser) {
    const newUser = validateUser(user);
    if (!newUser) {
      throw ErrorController.BadRequest();
    }
    const result = await UsersModel.create(newUser);
    return result;
  }

  async getAll() {
    const users = await UsersModel.findAndCountAll();

    return {
      data: users.rows,
      limit: 20,
      page: 1,
      total: users.count,
    };
  }

  async get(id: string) {
    const foundUser = await UsersModel.findByPk(id);
    if (!foundUser) {
      throw ErrorController.NotFound();
    }
    return foundUser;
  }

  async delete(id: string) {
    const foundUser = await UsersModel.findByPk(id);
    if (!foundUser) {
      throw ErrorController.NotFound();
    }
    await foundUser.destroy();
    return foundUser;
  }

  static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
}