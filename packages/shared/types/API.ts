export interface IError {
  code: string;
  message: string;
  statusCode: number;
}

export interface IGetAllModels<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}

interface ISuccessGetAllModelsResponse<T> extends IGetAllModels<T> {
  status: 'OK';
}

interface ISuccessGetModelResponse<T> {
  status: 'OK';
  data: T;
}

interface IErrorResponse {
  status: 'ERROR';
  data: IError;
}

type SuccessResponse<T> =
  | ISuccessGetAllModelsResponse<T>
  | ISuccessGetModelResponse<T>;

export type ApiResponse<T> = SuccessResponse<T> | IErrorResponse;
