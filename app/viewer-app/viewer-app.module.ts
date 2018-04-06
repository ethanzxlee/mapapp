import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { registerElement } from 'nativescript-angular/element-registry';

import { ApiModule } from '@uow-map/api/api.module';
import { CampusViewerModule } from '@uow-map/campus-viewer/campus-viewer.module';
import { TabBarModule } from '@uow-map/tab-bar/tab-bar.module';
import { ViewerAppRoutingModule } from './viewer-app.routing.module';

import * as components from './components';
import * as guards from './guards';
import * as rootStore from './store';
import { CustomRouterStateSerializer } from './store/reducers/router.reducer';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<rootStore.RootState>): any {
    return storeLogger()(reducer);
}
export const metaReducers = [logger];

registerElement('ns-mapbox', () => require('nativescript-mapbox').MapboxView);

@NgModule({
    declarations: [components.ViewerAppComponent],
    bootstrap: [components.ViewerAppComponent],
    imports: [
        NativeScriptModule,
        StoreDevtoolsModule.instrument(),
        StoreModule.forRoot(rootStore.reducers, { metaReducers }),
        EffectsModule.forRoot(rootStore.effects),
        StoreRouterConnectingModule,
        ViewerAppRoutingModule,
        ApiModule,
        CampusViewerModule,
        TabBarModule
    ],
    providers: [
        {
            provide: RouterStateSerializer,
            useClass: CustomRouterStateSerializer
        },
        guards.MapboxTokenStoreGuard
        // guards.DisclaimerModalGuard,
        // services.DisclaimerModal
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ViewerAppModule {}


