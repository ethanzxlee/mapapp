import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { registerElement } from 'nativescript-angular/element-registry';

import { ApiModule } from '@uow-map/api/api.module';
import { ViewerAppRoutingModule } from './viewer-app.routing.module';
import * as components from './components';
import * as rootStore from './store';

registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView);

@NgModule({
    declarations: [components.ViewerAppComponent],
    bootstrap: [components.ViewerAppComponent],
    imports: [
        NativeScriptModule,
        StoreModule.forRoot(rootStore.reducers),
        ViewerAppRoutingModule,
        ApiModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ViewerAppModule {}
