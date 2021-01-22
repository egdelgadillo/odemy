import express from 'express';
import { AppRoutes } from './routes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    __dirname,
    '..',
    'environment',
    (process.env.NODE_ENV || 'local') + '.env'
  ),
});

const app = express();

app.use(express.json());
app.use('', AppRoutes);

app.listen(process.env.API_PORT, () => {
  console.log(`Running server on port ${process.env.API_PORT}`);
});
