import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(

      StoreModule.forRoot({
        router: routerReducer,
      }),
      StoreRouterConnectingModule.forRoot({
        stateKey: 'router',
      }),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([])
    ),
  ],
};
