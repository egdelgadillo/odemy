import { Model } from 'sequelize-typescript';

export type ConvertToModel<T> = {
  [P in keyof T]: T[P] | Model | Model[];
};
