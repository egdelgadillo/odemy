import { IUserAuth, IUserCreation } from '@odemy/shared';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

import { UsersAuthModel } from '../../models/UsersAuthModel';
import { ModelsController } from '../ModelsController';
import { ErrorController } from '../ErrorController';
import { UsersController } from './UsersController';

export class UsersAuthController extends ModelsController {
  static instance: UsersAuthController;

  constructor() {
    super();
    console.log('Initializing UserAuthController...');
  }

  async create(user: IUserCreation) {
    const transaction = await this.db.getTransaction();
    try {
      const usersController = new UsersController(transaction);
      const newUser = await usersController.create(user);

      const salt = await bcrypt.genSalt();
      const emailToken = crypto.createHash('sha256').digest('hex');
      const hash = await bcrypt.hash(user.password, salt);
      const userAuth: IUserAuth = {
        user_id: newUser.id,
        hash,
        emailValidationToken: emailToken,
      };

      await UsersAuthModel.create(userAuth, {
        transaction,
      });

      transaction.commit();
      return newUser;
    } catch (err) {
      transaction.rollback();
      throw ErrorController.HandleError(err);
    }
  }

  static getInstance() {
    if (!UsersAuthController.instance) {
      UsersAuthController.instance = new UsersAuthController();
    }
    return UsersAuthController.instance;
  }
}
