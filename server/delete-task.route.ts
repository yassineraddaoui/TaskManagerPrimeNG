import { Request, Response } from 'express';
import { TASKS } from './db-data';

export function deleteTask(req: Request, res: Response) {
  console.log('Deleting task ...');

  const id = parseInt(req.params['id']);
  delete TASKS[id];

  setTimeout(() => {
    res.status(200).json({ id });
  }, 2000);
}
