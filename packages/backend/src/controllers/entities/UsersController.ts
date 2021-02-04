import { IUser, IUserCreation, validateUser } from '@odemy/shared';

import { ModelsController } from '../ModelsController';
import { UsersModel } from '../../models/UsersModel';
import { ErrorController } from '../ErrorController';
import { UsersAuthController } from './UsersAuthController';

export class UsersController extends ModelsController {
  static instance: UsersController;

  constructor(private transaction?: any) {
    super();
    console.log('Initializing UserController...');
  }

  async create(user: IUserCreation) {
    const newUser = validateUser(user);
    if (!newUser) {
      throw ErrorController.BadRequest();
    }
    const userResult = await UsersModel.create(newUser, {
      transaction: this.transaction,
    });

    return userResult;
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
    const foundUser = await UsersModel.findByPk(id, {
      transaction: this.transaction,
    });
    if (!foundUser) {
      throw ErrorController.NotFound();
    }
    await foundUser.destroy();
    return foundUser;
  }

  static getInstance() {
    if (!UsersController.instance) {
      UsersController.instance = new UsersController();
    }
    return UsersController.instance;
  }
}
