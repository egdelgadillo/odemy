import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { ErrorController } from './controllers/ErrorController';
import { AppRoutes } from './routes';
import { ApiResponse } from '@odemy/shared';

dotenv.config({
  path: path.resolve(
    __dirname,
    '..',
    'environment',
    (process.env.NODE_ENV || 'local') + '.env'
  ),
});

const APIErrorHandler = (
  error: Error,
  req: Request,
  res: Response<ApiResponse<any>>,
  next: NextFunction
) => {
  const handledError = ErrorController.HandleError(error);
  res.status(handledError.statusCode).send({
    status: 'ERROR',
    data: {
      statusCode: handledError.statusCode,
      code: handledError.code,
      message: handledError.message,
    },
  });
};

const app = express();

app.use(express.json());
app.use('', AppRoutes);
app.use(APIErrorHandler);

app.listen(process.env.API_PORT, () => {
  console.log(`Running server on port ${process.env.API_PORT}`);
});
