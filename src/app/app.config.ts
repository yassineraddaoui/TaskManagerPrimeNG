import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';
import {
  EntityDataService,
  EntityDefinitionService,
  provideEntityData,
  withEffects,
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideHttpClient } from '@angular/common/http';
import { TasksResolver } from './tasks/services/tasks.resolver';
import { TasksDataService } from './tasks/services/task-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    TasksResolver,
    TasksDataService,
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue() {
        const entityDataService = inject(EntityDataService);
        const tasksDataService = inject(TasksDataService);
        const eds = inject(EntityDefinitionService);
        eds.registerMetadataMap({
          Task: {
            entityDispatcherOptions: {
              optimisticDelete: true,
              optimisticUpsert: true,
              optimisticSaveEntities: true,
              optimisticUpdate:true,
              optimisticAdd:true
            },
          },
        });

        entityDataService.registerService('Task', tasksDataService);
      },
      multi: true,
    },
    provideStore(),
    provideEffects(),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
    ),
    provideEntityData(entityConfig, withEffects()),
  ],
};
