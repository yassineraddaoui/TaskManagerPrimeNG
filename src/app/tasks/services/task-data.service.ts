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
    return this.http
      .get('https://mocki.io/v1/fcbcbab7-9c4d-4918-a1ed-6e406dcf4a88')
      .pipe(map((res: any) => res.tasks));
  }

}
