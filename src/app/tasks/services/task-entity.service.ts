import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Task } from '../task.model';

@Injectable({ providedIn: 'root' })
export class TaskEntityService extends EntityCollectionServiceBase<Task> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Task', serviceElementsFactory);
  }
}
