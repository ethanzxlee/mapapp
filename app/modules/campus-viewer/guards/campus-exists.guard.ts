import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as campusesSelector from '../store/selectors/campuses.selector';
import * as campusesAction from '../store/actions/campuses.action';
import * as rootReducer from '@uow-map-viewer/store/reducers';
import * as routerAction from '@uow-map-viewer/store/actions/router.action';
import * as settingAction from '@uow-map-viewer/store/actions/setting.action';

@Injectable()
export class CampusExistsGuard implements CanActivate {
    constructor(
        private store: Store<rootReducer.RootState>,
        private router: Router
    ) {}

    hasCampus(campusId: number): Observable<boolean> {
        return this.store
            .select(campusesSelector.campusesEntitiesSelector)
            .pipe(
                map(entities => {
                    const exists = !!entities[campusId];
                    if (!exists) {
                        this.store.dispatch(
                            new routerAction.Go({ path: ['/notfound'] })
                        );
                    } else {
                        this.store.dispatch(new settingAction.SetLastCampusId(campusId));
                    }
                    return exists;
                }),
                take(1)
            );
    }

    checkStore(): Observable<boolean> {
        return this.store
            .select(campusesSelector.campusesLoadedSelector)
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.store.dispatch(new campusesAction.GetAll());
                    }
                }),
                filter(loaded => loaded),
                take(1)
            );
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => {
                const campusId = parseInt(route.params.campusId, 10);
                return this.hasCampus(campusId);
            })
        );
    }
}
