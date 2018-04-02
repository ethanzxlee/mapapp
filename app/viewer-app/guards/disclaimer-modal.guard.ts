import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as rootReducer from '../store/reducers';
import * as settingAction from '../store/actions/setting.action';

@Injectable()
export class DisclaimerModalGuard implements CanActivate {
    constructor(
        private store: Store<rootReducer.RootState>
    ) {}

    checkStore() {
        return this.store.select(rootReducer.settingReducerStateSelector).pipe(
            tap((state) => {
                if (!state.hasReadDisclaimer && !state.isDisclaimerModalOpened) {
                    this.store.dispatch(new settingAction.ShowDisclaimerModal());
                }
            }),
            filter((state) => state.hasReadDisclaimer),
            take(1)
        );
    }

    canActivate() {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
