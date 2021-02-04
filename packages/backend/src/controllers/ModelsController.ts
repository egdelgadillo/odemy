import { DatabaseController } from './DatabaseController';

export abstract class ModelsController {
  protected db: DatabaseController;
  constructor() {
    this.db = DatabaseController.getInstance();
  }
}
