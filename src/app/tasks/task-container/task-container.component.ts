import { Component, input } from '@angular/core';
import { Task } from '../task.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [CardModule, TagModule, ButtonModule],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css',
})
export class TaskContainerComponent {
  task = input.required<Task>();
}
