import { Component, OnInit, Signal } from '@angular/core';
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
import { TaskEntityService } from './services/task-entity.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    AsyncPipe,
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
export class TasksComponent implements OnInit {
  searchVisible = false;

  showSearch() {
    this.searchVisible = !this.searchVisible;
  }
  filterResults(filter: string) {
 
    this.tasks$ = this.taskService.entities$
    .pipe(
      map(tasks => tasks.filter(task => task.title.toLowerCase().startsWith(filter.toLowerCase())))
  );

  }
  suggestions!: string[];
  visible: boolean = false;
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskEntityService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.entities$;
  }

  showUpSetTaskDialog() {
    this.visible = true;
  }
}
