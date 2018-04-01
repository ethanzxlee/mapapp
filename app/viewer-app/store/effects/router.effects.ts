import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { tap, map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';

import * as routerAction from '../actions/router.action';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {}

    @Effect({ dispatch: false })
    navigate$ = this.actions$.ofType(routerAction.GO).pipe(
        map((action: routerAction.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, { queryParams, ...extras });
        })
    );

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$
        .ofType(routerAction.BACK)
        .pipe(tap(() => this.location.back()));

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$
        .ofType(routerAction.FORWARD)
        .pipe(tap(() => this.location.forward()));
}
