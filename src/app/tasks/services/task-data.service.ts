import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Task } from '../task.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class TasksDataService extends DefaultDataService<Task> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Task', http, httpUrlGenerator);
  }

  override getAll(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }
}
