export interface IUserAuth {
  id?: string;
  user_id: string;
  hash: string;
  emailValidationToken: string;
  passwordResetToken?: string;
}
