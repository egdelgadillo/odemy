import { IUser } from '../entities/IUser';
import { ConvertToOptions } from '../../../../object-validator';
import { UserType } from '../types/UserType';

export const UserModelValidator: ConvertToOptions<IUser> = {
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
