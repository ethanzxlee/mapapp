import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { TabBarModule } from '../../app/tab-bar/tab-bar.module';
// import { MapboxModule } from '../mapbox/mapbox.module';

import * as store from './store';
import * as components from './components';
import * as guards from './guards';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature('campusReducer', store.reducers),
        EffectsModule.forFeature(store.effects)
        // RouterModule,
        // TabBarModule,
        // MapboxModule
    ],
    exports: [components.CampusComponent],
    declarations: [components.CampusComponent],
    providers: []
})
export class CampusViewerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CampusViewerModule,
            providers: [
                guards.CampusesStoreGuard,
                guards.CampusExistsGuard,
                guards.MapStyleStoreGuard
            ]
        };
    }
}
