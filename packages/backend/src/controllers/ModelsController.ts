import { ConvertToModel } from '@odemy/shared';
import { ISuccessGetAllResponse } from '@odemy/shared';
import { DatabaseController } from './DatabaseController';

export abstract class ModelsController<T> {
  constructor() {
    DatabaseController.getInstance();
  }
  abstract get(id: string): Promise<T | ConvertToModel<T>>;
  abstract getAll(): Promise<ISuccessGetAllResponse<T | ConvertToModel<T>>>;
  abstract create(data: T): Promise<T | ConvertToModel<T>>;
  abstract delete(id: string): Promise<T | ConvertToModel<T>>;
}