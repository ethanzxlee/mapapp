import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { Store, createSelector } from '@ngrx/store';

import * as campusesReducer from '../store/reducers/campuses.reducer';
import * as rootReducer from '@uow-map-viewer/store/reducers';
import * as campusesAction from '../store/actions/campuses.action';
import * as routerAction from '@uow-map-viewer/store/actions/router.action';
import * as routerSelector from '@uow-map-viewer/store/selectors/router.selector';
import * as settingSelector from '@uow-map-viewer/store/selectors/setting.selector';
import * as campusesSelector from '../store/selectors/campuses.selector';
import { VIEWER_LAST_CAMPUS_KEY } from '@uow-map/constants';

/**
 * A guard to make sure that all the campuses are loaded into the store,
 * before the route can be activated
 */
@Injectable()
export class CampusesStoreGuard implements CanActivate {
    constructor(private store: Store<rootReducer.RootState>) {}

    checkStore(): Observable<any> {
        const jointSelector = createSelector(
            routerSelector.routerStateSelector,
            settingSelector.lastCampusIdSelector,
            campusesSelector.campusesStateSelector,
            (routerState, lastCampusId, campusesState) => {
                return { routerState, campusesState, lastCampusId };
            }
        );

        return this.store.select(jointSelector).pipe(
            tap(jointState => {
                if (
                    !jointState.campusesState.loaded &&
                    !jointState.campusesState.loading &&
                    !jointState.campusesState.loadingError
                ) {
                    this.store.dispatch(new campusesAction.GetAll());
                }
            }),
            filter(jointState => {
                return (
                    (jointState.campusesState.loaded &&
                        !jointState.campusesState.loading) ||
                    jointState.campusesState.loadingError
                );
            }),
            tap(jointState => {
                // Check if should redirect to child state
                if (
                    !jointState.campusesState.loadingError &&
                    !jointState.routerState.params.campusId
                ) {
                    let campusId = parseInt(
                        Object.keys(jointState.campusesState.entities)[0],
                        0
                    );
                    if (!isNaN(jointState.lastCampusId)) {
                        campusId = jointState.lastCampusId;
                    }
                    this.store.dispatch(
                        new routerAction.Go({
                            path: ['/app', campusId],
                            extras: { replaceUrl: true }
                        })
                    );
                }
            }),
            take(1)
        );
    }

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(campusState => {
                return of(!campusState.loadingError);
            }),
            catchError(e => {
                return of(false);
            })
        );
    }
}
