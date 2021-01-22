import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { ConvertToModel, ICourseLevel } from '@odemy/shared';
import { CoursesModel } from './CoursesModel';

@Table({
  tableName: 'CourseLevels',
  timestamps: true,
})
export class CourseLevelModel
  extends Model
  implements ConvertToModel<ICourseLevel> {
  @PrimaryKey
  @ForeignKey(() => CoursesModel)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  level!: string;
}
