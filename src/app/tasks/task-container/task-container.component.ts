import { Component, input } from '@angular/core';
import { Task } from '../task.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TaskUpsetComponent } from '../task-upset/task-upset.component';
import { TaskEntityService } from '../services/task-entity.service';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [CardModule, TagModule, ButtonModule, TaskUpsetComponent],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css',
})
export class TaskContainerComponent {
  constructor(private taskService: TaskEntityService) {}
  onDeleteTask(task: Task) {
    this.taskService.delete(task);
  }
  task = input.required<Task>();
  edit = false;
}
