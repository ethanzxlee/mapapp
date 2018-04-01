import { createSelector } from '@ngrx/store';

import * as rootReducer from '../reducers';
import * as mapboxReducer from '../reducers/mapbox.reducer';

export const mapboxTokenStateSelector = createSelector(
    rootReducer.mapboxReducerStateSelector,
    state => state.token
);

export const mapboxTokenValueSelector = createSelector(
    mapboxTokenStateSelector,
    state => state.value
);

export const mapboxTokenLoadedSelector = createSelector(
    mapboxTokenStateSelector,
    state => state.loaded
);

export const mapboxTokenLoadingSelector = createSelector(
    mapboxTokenStateSelector,
    state => state.loading
);

export const mapboxTokenLoadingErrorSelector = createSelector(
    mapboxTokenStateSelector,
    state => state.loadingError
);
