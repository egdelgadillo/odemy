import { IUserAuth } from '../entities/IUserAuth';
import {
  ConvertToOptions,
  ValidateObject,
} from '../../../../object-validator/dist';

/**
 * TODO: Delete if not in use
 */
const userAuthValidatorModel: ConvertToOptions<IUserAuth> = {
  id: {
    allowed: false,
  },
  user_id: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  hash: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  emailValidationToken: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  passwordResetToken: {
    type: 'string',
    allowNull: true,
    required: true,
  },
};

export const validateUserAuth = (userAuth: IUserAuth): IUserAuth | null => {
  return ValidateObject(userAuth, userAuthValidatorModel, {
    throwOnError: false,
  });
};
