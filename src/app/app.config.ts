import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';
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
              optimisticUpdate: true,
            },
          },
        });

        entityDataService.registerService('Task', tasksDataService);
      },
      multi: true,
    },
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ logOnly: true }),
    provideEntityData(entityConfig, withEffects()),
  ],
};
