import { IUser, IUserCreation } from '../entities/IUser';
import {
  ConvertToOptions,
  ValidateObject,
} from '../../../../object-validator/dist';
import { UserType } from '../types/UserType';

const userValidatorModel: ConvertToOptions<IUserCreation> = {
  id: {
    allowed: false,
  },
  name: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  last_name: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  email: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  user_type: {
    type: 'string',
    allowNull: false,
    required: true,
    allowedValues: UserType.concat(),
  },

  password: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  passwordConfirmation: {
    type: 'string',
    allowNull: false,
    required: true,
  },
  emailConfirmation: {
    type: 'string',
    allowNull: false,
    required: true,
  },
};

export const validateUser = (user: IUser): IUser | null => {
  return ValidateObject(user, userValidatorModel, { throwOnError: false });
};
