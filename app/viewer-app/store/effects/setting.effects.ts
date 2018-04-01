import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

// import { DisclaimerModal } from '../../services/disclaimer-modal.service';
import { VIEWER_READ_DISCLAIMER_KEY, VIEWER_LAST_CAMPUS_KEY } from '@uow-map/constants';
import * as settingAction from '../actions/setting.action';

@Injectable()
export class SettingEffects {
    constructor(
        private actions$: Actions,
        // private disclaimerModal: DisclaimerModal
    ) {}

    // @Effect({ dispatch: false })
    // setLastCampusId$ = this.actions$
    //     .ofType(settingAction.SET_LAST_CAMPUS_ID)
    //     .pipe(
    //         tap((action: settingAction.SetLastCampusId) => {
    //             localStorage.setItem(
    //                 VIEWER_LAST_CAMPUS_KEY,
    //                 `${action.payload}`
    //             );
    //         })
    //     );

    // @Effect({ dispatch: false })
    // showDisclaimerDialog$ = this.actions$
    //     .ofType(settingAction.SHOW_DISCLAIMER_MODAL)
    //     .pipe(
    //         tap(action => {
    //             this.disclaimerModal.show();
    //         })
    //     );

    // @Effect({ dispatch: false })
    // setReadDisclaimer$ = this.actions$
    //     .ofType(settingAction.SET_READ_DISCLAIMER)
    //     .pipe(tap(() => {
    //         localStorage.setItem(VIEWER_READ_DISCLAIMER_KEY, `${true}`);
    //     }));
}
