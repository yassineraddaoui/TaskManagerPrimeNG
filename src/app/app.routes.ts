import { Route } from '@angular/router';
import { TasksResolver } from './tasks/services/tasks.resolver';

export const routes: Route[] = [
  {
    path: 'tasks',
    resolve: {
      tasks: TasksResolver,
    },
    loadComponent: () =>
      import('./tasks/tasks.component').then((m) => m.TasksComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
];
