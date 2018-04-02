import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as MapStyleSelector from '../store/selectors/map-styles.selector';
import * as MapStyleAction from '../store/actions/map-styles.action';
import * as AppReducer from '@uow-map-viewer/store/reducers';
import * as RouterAction from '@uow-map-viewer/store/actions/router.action';
import * as MapStyleReducer from '../store/reducers/map-styles.reducer';

@Injectable()
export class MapStyleStoreGuard implements CanActivate {
    constructor(
        private store: Store<AppReducer.RootState>,
        private router: Router
    ) {}

    checkStore(campsuId: number): Observable<MapStyleReducer.MapStylesState> {
        return this.store
            .select(MapStyleSelector.mapStylesStateSelector)
            .pipe(
                tap(mapStylesState => {
                    const exists =
                        mapStylesState.entities &&
                        mapStylesState.entities[campsuId];
                    if (!exists && !mapStylesState.loading) {
                        this.store.dispatch(
                            new MapStyleAction.GetMapStyle(campsuId)
                        );
                    }
                }),
                filter(mapStylesState => {
                    const exists =
                        mapStylesState.entities &&
                        mapStylesState.entities[campsuId];
                    return (
                        (exists && !mapStylesState.loading) ||
                        mapStylesState.loadingError
                    );
                }),
                tap(mapStylesState => {
                    this.store.dispatch(
                        new MapStyleAction.SetCurrentMapStyle(
                            mapStylesState.entities[campsuId]
                        )
                    );
                }),
                take(1)
            );
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const campusId = parseInt(route.params.campusId, 10);
        return this.checkStore(campusId).pipe(
            switchMap(mapStylesState => {
                return of(!mapStylesState.loadingError);
            }),
            catchError(() => {
                return of(false);
            })
        );
    }
}
