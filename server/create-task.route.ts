import {Request, Response} from 'express';
import {TASKS} from './db-data';

export var tasksKeyCounter = 100;

export function createTask(req: Request, res: Response) {

    console.log("Creating new task ...");

    const changes = req.body;

    const newTask = {
        id: tasksKeyCounter,
        ...changes
    };

  TASKS[newTask.id] = newTask;

  tasksKeyCounter += 1;

    setTimeout(() => {

      res.status(200).json(newTask);

    }, 2000);

}

