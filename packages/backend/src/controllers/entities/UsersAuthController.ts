import { IUserAuth, validateUserAuth } from '@odemy/shared';

import { ModelsController } from '../ModelsController';
import { UsersAuthModel } from '../../models/UsersAuthModel';
import { ErrorController } from '../ErrorController';

export class UsersAuthController extends ModelsController<IUserAuth> {
  static instance: UsersAuthController;

  constructor() {
    super();
    console.log('Initializing UserController...');
  }

  async create(user: IUserAuth) {
    const newUser = validateUserAuth(user);
    if (!newUser) {
      throw ErrorController.BadRequest();
    }
    const result = await UsersAuthModel.create(newUser);
    return result;
  }

  async getAll() {
    const users = await UsersAuthModel.findAndCountAll();

    return {
      data: users.rows,
      limit: 20,
      page: 1,
      total: users.count,
    };
  }

  async get(id: string) {
    const foundUser = await UsersAuthModel.findByPk(id);
    if (!foundUser) {
      throw ErrorController.NotFound();
    }
    return foundUser;
  }

  async delete(id: string) {
    const foundUser = await UsersAuthModel.findByPk(id);
    if (!foundUser) {
      throw ErrorController.NotFound();
    }
    await foundUser.destroy();
    return foundUser;
  }

  static getInstance() {
    if (!UsersAuthController.instance) {
      UsersAuthController.instance = new UsersAuthController();
    }
    return UsersAuthController.instance;
  }
}
