import { createTask } from './create-task.route';
import { deleteTask } from './delete-task.route';
import { saveTask } from './save-task.route';

import { getAllTasks, getTaskByUrl } from './get-task.route';
import { Application } from 'express';
import * as express from 'express';
const app: Application = express.default();
import bodyParser from 'body-parser';

import cors from 'cors';

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/api/tasks').get(getAllTasks);

app.route('/api/task').post(createTask);

app.route('/api/task/:id').put(saveTask);

app.route('/api/task/:id').delete(deleteTask);

app.route('/api/task/:taskUrl').get(getTaskByUrl);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
