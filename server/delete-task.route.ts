import {Request, Response} from 'express';
import {TASKS} from "./db-data";


export function deleteTask(req: Request, res: Response) {

    console.log("Deleting task ...");

    const id = req.params["id"];

    const task = TASKS[id];

    delete TASKS[id];

    setTimeout(() => {

      res.status(200).json({id});

    }, 2000);

}

