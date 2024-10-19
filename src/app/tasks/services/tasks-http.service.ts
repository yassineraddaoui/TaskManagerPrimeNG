import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../task.model';

@Injectable()
export class TasksHttpService {
  constructor(private http: HttpClient) {}
}
