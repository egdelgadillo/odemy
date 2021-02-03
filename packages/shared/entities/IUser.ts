import { UserType } from '../types/UserType';

export interface IUser {
  id?: string;
  name: string;
  last_name: string;
  email: string;
  user_type: typeof UserType[number];
}

export interface IUserCreation extends IUser {
  password: string;
  passwordConfirmation: string;
  emailConfirmation: string;
}
