import {Request, Response} from 'express';
import {TASKS} from "./db-data";


export function saveTask(req: Request, res: Response) {

    console.log("Saving task ...");

    const id = parseInt(req.params["id"]);
    const changes = req.body;

    TASKS[id] = {
        ...TASKS[id],
        ...changes
    };

    setTimeout(() => {

      res.status(200).json(TASKS[id]);

    }, 2000);

}

