import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import * as mapboxAction from '../actions/mapbox.action';
// import { MapboxService } from '../../../../shared/module/mapbox/mapbox.service';

@Injectable()
export class MapboxEffects {
    constructor(
        private actions$: Actions,
        // private mapboxService: MapboxService
    ) {}

    // @Effect()
    // getToken$ = this.actions$.ofType(mapboxAction.GET_TOKEN).pipe(
    //     switchMap(() => {
    //         return this.mapboxService.getToken().pipe(
    //             // If successful, dispatch success action with result
    //             map(token => new mapboxAction.GetTokenOk(token)),
    //             // If failed, dispatch failed action
    //             catchError(error => of(new mapboxAction.GetTokenError(error)))
    //         );
    //     })
    // );
}
