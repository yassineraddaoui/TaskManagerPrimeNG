import { Component } from '@angular/core';
import { TaskContainerComponent } from './task-container/task-container.component';
import { Task } from './task.model';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TaskUpsetComponent } from './task-upset/task-upset.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    TaskContainerComponent,
    ToolbarModule,
    TaskUpsetComponent,
    AvatarModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [
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
    // Add more tasks as needed
  ];

  visible: boolean = false;
  showAddTaskDialog() {
    this.visible = true;
  }
}
