import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';
import { IUser, UserType } from '@odemy/shared';

@Table({
  tableName: 'Users',
  timestamps: true,
})
export class UsersModel extends Model implements IUser {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  name!: string;

  @Column
  last_name!: string;

  @Column
  email!: string;

  @Column(DataType.STRING)
  user_type!: typeof UserType[number];
}
