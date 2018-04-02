import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import * as services from './services';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        services.CampusApiService,
        services.MapboxApiService
    ]
})
export class ApiModule {}
