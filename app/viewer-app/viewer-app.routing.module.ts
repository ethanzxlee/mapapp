import { NgModule } from '@angular/core';
import { Routes, ExtraOptions } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import * as appGuards from './guards';
import * as campusViewerGuards from '../modules/campus-viewer/guards';
import * as appComponents from './components';
// import * as homeTabComponents from '../modules/home-tab/components';
import * as campusViewerComponents from '@uow-map/campus-viewer/components';

export const APP_ROUTES: Routes = [
    {
        path: 'app',
        canActivate: [
            // appGuards.DisclaimerModalGuard,
            appGuards.MapboxTokenStoreGuard,
            campusViewerGuards.CampusesStoreGuard
        ],
        children: [
            {
                path: ':campusId',
                canActivate: [
                    campusViewerGuards.CampusExistsGuard,
                    campusViewerGuards.MapStyleStoreGuard
                ],
                component: campusViewerComponents.CampusComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(APP_ROUTES, { useHash: false, enableTracing: true })
    ],
    exports: [NativeScriptRouterModule]
})
export class ViewerAppRoutingModule {}
