import { Task } from './task.model';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is the description for Task 1',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the description for Task 2',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is the description for Task 3',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is the description for Task 4',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'This is the description for Task 5',
    status: 'In Progress',
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'This is the description for Task 6',
    status: 'Completed',
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'This is the description for Task 7',
    status: 'Completed',
  },
];
export function findTaskById(taskId: number) {
  return TASKS[taskId];
}
