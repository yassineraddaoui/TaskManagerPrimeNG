import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {TaskEntityService} from './task-entity.service';
import {filter, first, map, tap} from 'rxjs/operators';


@Injectable()
export class TasksResolver  {

    constructor(private taskService: TaskEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {

        return this.taskService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                       this.taskService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}
