import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Task } from '../task.model';
import { TaskEntityService } from '../services/task-entity.service';

@Component({
  selector: 'app-task-upset',
  standalone: true,
  imports: [
    DialogModule,
    ReactiveFormsModule,
    SelectButtonModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './task-upset.component.html',
  styleUrl: './task-upset.component.css',
})
export class TaskUpsetComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  taskForm!: FormGroup;

  taskData = input<Task>();

  mode: 'Update Task' | 'Add Task' = 'Add Task';

  constructor(private _taskService: TaskEntityService) {}
  ngOnInit() {

    this.taskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      status: new FormControl('', [Validators.required]),
      value: new FormControl('in_progress'),
    });

    if (this.taskData()) {
      this.mode = 'Update Task';
      this.taskForm.patchValue({
        title: this.taskData()!.title,
        description: this.taskData()!.description,
        status: this.taskData()!.status,
      });
    }
  }

  stateOptions: any[] = [
    { label: 'Pending', value: 'Pending' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Completed', value: 'Completed' },
  ];
  onSubmit() {
    if (this.taskForm.valid) {
      const taskDataToSubmit = { ...this.taskForm.value, id: this.taskData()?.id };
      this.mode === 'Update Task' ? this.updateTask(taskDataToSubmit) : this.createTask(taskDataToSubmit);
      this.closeDialog();
    }
  }

  private updateTask(taskData: Partial<Task>) {
    this._taskService.update(taskData);
  }

  private createTask(taskData: Partial<Task>) {
    this._taskService.createTask(taskData);
  }
  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
