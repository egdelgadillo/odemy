import { Sequelize } from 'sequelize-typescript';

export class DatabaseController {
  static instance: DatabaseController;
  db: Sequelize;

  private constructor() {
    console.log('Initializing DatabaseController...');

    const requiredEnvVars = [
      'POSTGRES_DATABASE',
      'POSTGRES_HOST',
      'POSTGRES_PORT',
      'POSTGRES_USERNAME',
      'POSTGRES_PASSWORD',
    ];

    requiredEnvVars.forEach((envVar) => {
      if (!process.env[envVar]) {
        throw new Error(`You must provide the ${envVar} environment variable!`);
      }
    });

    try {
      if (isNaN(parseInt(process.env.POSTGRES_PORT!))) {
        throw new Error();
      }
    } catch {
      throw new Error(
        'The value of the POSTGRES_PORT environment variable is invalid!'
      );
    }

    this.db = new Sequelize({
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      dialect: 'postgres',
      models: [__dirname + '/../models'],
    });

    console.log(__dirname + '/models');
  }

  /**
   * Singleton methods
   */
  static getInstance = (): DatabaseController => {
    if (!DatabaseController.instance) {
      DatabaseController.instance = new DatabaseController();
    }
    return DatabaseController.instance;
  };
}