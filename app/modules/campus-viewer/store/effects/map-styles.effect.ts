import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { CampusApiService } from '@uow-map/api/services';
import * as mapStylesAction from '../actions/map-styles.action';
import * as routerAction from '@uow-map/viewer/store/actions/router.action';

@Injectable()
export class MapStylesEffect {
    constructor(private actions$: Actions, private campusApiService: CampusApiService) {}

    @Effect()
    loadMapStyle$ = this.actions$.ofType(mapStylesAction.GET_MAP_STYLE).pipe(
        switchMap((action: mapStylesAction.GetMapStyle) => {
            return this.campusApiService
                .getMapStyle(action.payload)
                .pipe(
                    map(style => new mapStylesAction.GetMapStyleOk({ [action.payload]: style })),
                    catchError(error => of(new mapStylesAction.GetMapStyleError(error)))
                );
        })
    );
}
