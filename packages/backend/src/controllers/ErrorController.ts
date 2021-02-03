import { IError } from '@odemy/shared';

export class ErrorController extends Error {
  public code: string;
  public message: string;
  public statusCode: number;

  constructor(error: IError, originalMessage?: string) {
    super();

    this.statusCode = error.statusCode;
    this.code = error.code;
    this.message = error.message;

    console.log(`An error has ocurred: ${originalMessage || error.message}`);
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

  static DatabaseError(err: Error) {
    return new ErrorController(
      {
        statusCode: 400,
        code: 'DatabaseError',
        message: 'Database Error',
      },
      err.message
    );
  }

  static UnknownError(err: Error) {
    return new ErrorController(
      {
        statusCode: 400,
        code: 'UnknownError',
        message: 'Unknown Error',
      },
      err.message
    );
  }

  static HandleError(err: Error) {
    if ('statusCode' in err && 'code' in err && 'message' in err) {
      return err;
    }
    return ErrorController.UnknownError(err);
  }
}
