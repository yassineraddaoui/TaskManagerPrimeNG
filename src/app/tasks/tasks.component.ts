import { Component, Signal } from '@angular/core';
import { TaskContainerComponent } from './task-container/task-container.component';
import { Task } from './task.model';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TaskUpsetComponent } from './task-upset/task-upset.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { tasksList } from './tasks';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    FormsModule,
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    TaskContainerComponent,
    ToolbarModule,
    TaskUpsetComponent,
    AvatarModule,
    InputTextModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  searchVisible = false;
showSearch() {
  this.searchVisible=!this.searchVisible;
}
  filterResults(filter: string) {
    filter = filter.toLowerCase();
    this.tasks = tasksList.filter((task) => task.title.toLocaleLowerCase().startsWith(filter));
  }
  tasks: Task[] = [];
  suggestions!: string[];
  visible: boolean = false;

  ngOnInit() {
    this.tasks = tasksList;
  }

  showUpSetTaskDialog() {
    this.visible = true;
  }
}
