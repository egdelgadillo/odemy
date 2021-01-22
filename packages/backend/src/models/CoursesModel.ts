import {
  Table,
  Column,
  Model,
  HasOne,
  DataType,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { ICourse, ConvertToModel } from '@odemy/shared';
import { CourseLevelModel } from './CourseLevelModel';

@Table({
  tableName: 'Courses',
  timestamps: true,
})
export class CoursesModel extends Model implements ConvertToModel<ICourse> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  img_url!: string;

  @Column
  title!: string;

  @Column
  description!: string;

  @Column(DataType.ARRAY(DataType.STRING))
  instructor_ids!: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  category_ids!: string[];

  @HasOne(() => CourseLevelModel)
  level_id!: CourseLevelModel;

  @Column
  score!: number;

  @Column
  price!: number;

  @Column(DataType.ARRAY(DataType.STRING))
  student_ids!: any;

  @Column
  is_discount!: boolean;
}
