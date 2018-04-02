import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { CampusApiService } from '@uow-map/api/services';
import * as campusesAction from '../actions/campuses.action';
import * as routerAction from '@uow-map-viewer/store/actions/router.action';

@Injectable()
export class CampusesEffect {
    constructor(private actions$: Actions, private campusApiService: CampusApiService) {}

    @Effect()
    loadCampuses$ = this.actions$.ofType(campusesAction.GET_ALL).pipe(
        switchMap(() =>
            this.campusApiService.getCampuses().pipe(
                // If successful, dispatch success action with result
                map(campuses => new campusesAction.GetAllOk(campuses)),

                // If request fails, dispatch failed action
                catchError(error => of(new campusesAction.GetAllError(error)))
            )
        )
    );

    @Effect()
    loadCampusesFail$ = this.actions$
        .ofType(campusesAction.GET_ALL_ERROR)
        .pipe(map(() => new routerAction.Go({ path: ['/error'] })));
}
