import { IError } from '@odemy/shared';

export class ErrorController extends Error {
  public code: string;
  public message: string;
  public statusCode: number;

  constructor(error: IError) {
    super();

    this.statusCode = error.statusCode;
    this.code = error.code;
    this.message = error.message;

    console.log(`An error has ocurred: ${error.message}`);
  }

  static NotFound() {
    return new ErrorController({
      statusCode: 404,
      code: 'NotFound',
      message: 'Not Found',
    });
  }

  static BadRequest() {
    return new ErrorController({
      statusCode: 400,
      code: 'BadRequest',
      message: 'Bad Request',
    });
  }

  static DatabaseError() {
    return new ErrorController({
      statusCode: 400,
      code: 'DatabaseError',
      message: 'Database Error',
    });
  }

  static UnknownError() {
    return new ErrorController({
      statusCode: 400,
      code: 'UnknownError',
      message: 'Unknown Error',
    });
  }

  static HandleError(err: Error) {
    if ('statusCode' in err && 'code' in err && 'message' in err) {
      return err;
    }
    return ErrorController.UnknownError();
  }
}
