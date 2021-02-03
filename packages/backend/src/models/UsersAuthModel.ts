import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';
import { ConvertToModel, IUserAuth } from '@odemy/shared';

@Table({
  tableName: 'UsersAuth',
  timestamps: true,
})
export class UsersAuthModel extends Model implements ConvertToModel<IUserAuth> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  user_id!: string;

  @Column
  hash!: string;

  @Column
  emailValidationToken!: string;

  @Column
  passwordResetToken!: string;
}
