import { IUser } from '../entities/IUser';
import { ConvertToOptions, ValidateObject } from '../../../../object-validator';
import { UserType } from '../types/UserType';

export const userValidatorModel: ConvertToOptions<IUser> = {
  id: {
    allowed: false,
  },
  name: {
    allowNull: false,
    type: 'string',
  },
  last_name: {
    allowNull: false,
    type: 'string',
  },
  email: {
    allowNull: false,
    type: 'string',
  },
  user_type: {
    allowNull: false,
    allowedValues: UserType.concat(),
    type: 'string',
  },
};

export const validateUser = (user: IUser): IUser | null => {
  return ValidateObject(user, userValidatorModel, { throwOnError: false });
};
