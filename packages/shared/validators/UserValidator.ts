import { IUserCreation } from '../entities/IUser';
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
    depends: [
      {
        passwordConfirmation: {
          state: 'present',
          validate: 'ifValue',
          propertyToTest: 'password',
        },
      },
    ],
  },
  passwordConfirmation: {
    type: 'string',
    allowNull: false,
    required: true,
    depends: ['password'],
  },
  emailConfirmation: {
    type: 'string',
    allowNull: false,
    required: true,
    depends: [
      {
        email: {
          state: 'present',
          validate: 'ifValue',
          propertyToTest: 'emailConfirmation',
        },
      },
    ],
  },
};

export const validateUser = <T>(user: T): T | null => {
  const resultValue = ValidateObject(user, userValidatorModel, {
    throwOnError: false,
  });

  if (!resultValue) return null;

  return resultValue;
};
