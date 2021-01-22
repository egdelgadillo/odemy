export interface ISuccessGetAllResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}
