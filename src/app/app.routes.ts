import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'tasks',
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
