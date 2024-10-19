import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Task } from '../task.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskEntityService extends EntityCollectionServiceBase<Task> {
  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Task', serviceElementsFactory);
  }

  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>('/api/task', task);
  }
}
