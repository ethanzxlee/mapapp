import { createSelector } from '@ngrx/store';

import * as rootReducer from '../reducers';
import * as settingReducer from '../reducers/setting.reducer';

export const hasReadDisclaimerSelector = createSelector(
    rootReducer.settingReducerStateSelector,
    state => state.hasReadDisclaimer
);

export const lastCampusIdSelector = createSelector(
    rootReducer.settingReducerStateSelector,
    state => state.lastCampusId
);
