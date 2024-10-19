import { Request, Response } from 'express';
import { TASKS } from './db-data';
import { Task } from './task.model';

export function getAllTasks(req: Request, res: Response) {
  console.log('Retrieving tasks data ...');

  setTimeout(() => {
    res.status(200).json(Object.values(TASKS));
  }, 1000);
}

export function getTaskById(req: Request, res: Response) {
  const taskId = req.params['taskId'];

  const tasks: Task[] = Object.values(TASKS);

  const task = tasks.find((task) => task.id.toString() == taskId);

  setTimeout(() => {
    res.status(200).json(task);
  }, 1000);
}

