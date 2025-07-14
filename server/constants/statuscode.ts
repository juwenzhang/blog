import { type ResponseType } from '../types/ResponseType';

export const StatusCode = {
  SUCCESS: 0,
  FAIL: 1,
  UNAUTHORIZED: 2,
  FORBIDDEN: 3,
  NOT_FOUND: 4,
  METHOD_NOT_ALLOWED: 5,
  INTERNAL_SERVER_ERROR: 6,
  BAD_REQUEST: 7,
  SERVICE_UNAVAILABLE: 8,
  GATEWAY_TIMEOUT: 9,
  TOO_MANY_REQUESTS: 10,
};

export const StatusMsg = {
  [StatusCode.SUCCESS]: 'success',
  [StatusCode.FAIL]: 'fail',
  [StatusCode.UNAUTHORIZED]: 'unauthorized',
  [StatusCode.FORBIDDEN]: 'forbidden',
  [StatusCode.NOT_FOUND]: 'not found',
  [StatusCode.METHOD_NOT_ALLOWED]: 'method not allowed',
  [StatusCode.INTERNAL_SERVER_ERROR]: 'internal server error',
  [StatusCode.BAD_REQUEST]: 'bad request',
  [StatusCode.SERVICE_UNAVAILABLE]: 'service unavailable',
  [StatusCode.GATEWAY_TIMEOUT]: 'gateway timeout',
  [StatusCode.TOO_MANY_REQUESTS]: 'too many requests',
};

export const Status = {
  [StatusCode.SUCCESS]: 200,
  [StatusCode.FAIL]: 400,
  [StatusCode.UNAUTHORIZED]: 401,
  [StatusCode.FORBIDDEN]: 403,
  [StatusCode.NOT_FOUND]: 404,
  [StatusCode.METHOD_NOT_ALLOWED]: 405,
  [StatusCode.INTERNAL_SERVER_ERROR]: 500,
  [StatusCode.BAD_REQUEST]: 400,
  [StatusCode.SERVICE_UNAVAILABLE]: 503,
  [StatusCode.GATEWAY_TIMEOUT]: 504,
  [StatusCode.TOO_MANY_REQUESTS]: 429,
}

export function getResponseType<T>(
  code: number, 
  msg: string, 
  data: T, 
  ...args: any[]
): ResponseType<T> {
  return {
    code,
    msg: StatusMsg[code] || msg,
    status: Status[code],
    data,
    ...args,
  };
}
