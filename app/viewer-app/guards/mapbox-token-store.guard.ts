import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, map, switchMap, catchError } from 'rxjs/operators';
// import { MapboxService } from '../../../shared/module/mapbox/mapbox.service';

import * as rootReducer from '../store/reducers';
import * as rootSelector from '../store/selectors';
import * as mapboxAction from '../store/actions/mapbox.action';
import * as mapboxReducer from '../store/reducers/mapbox.reducer';
import * as mapboxSelector from '../store/selectors/mapbox.selector';

@Injectable()
export class MapboxTokenStoreGuard implements CanActivate {
    constructor(
        private store: Store<rootReducer.RootState>,
        // private mapboxService: MapboxService
    ) {}

    checkStore(): Observable<any> {
        return this.store.select(rootReducer.mapboxReducerStateSelector).pipe(
            tap((state: mapboxReducer.MapboxReducerState) => {
                if (
                    !state.token.loading &&
                    !state.token.loaded &&
                    !state.token.loadingError
                ) {
                    this.store.dispatch(new mapboxAction.GetToken());
                }
            }),
            filter((state: mapboxReducer.MapboxReducerState) => {
                return (
                    (!state.token.loading && state.token.loaded) ||
                    state.token.loadingError
                );
            }),
            // tap(state => this.mapboxService.setTokenInMapbox(state.token.value)),
            take(1)
        );
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(state => {
                return of(!state.token.loadingError);
            }),
            catchError(() => {
                return of(false);
            })
        );
    }
}
