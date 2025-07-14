export interface ResponseType<T> {
  code: number;
  msg: string;
  status: number;
  redirect?: string;
  token?: string;
  refreshToken?: string;
  expires?: number;
  total?: number;
  pageSize?: number;
  pageNum?: number;
  data: T;
}