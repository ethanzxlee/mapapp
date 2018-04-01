import { createSelector } from '@ngrx/store';

import * as rootReducer from '../reducers';

export const routerStateSelector = createSelector(
    rootReducer.routerReducerStateSelector,
    routerState => routerState.state
);

export const routerParamsSelector = createSelector(routerStateSelector, state => state.params);

export const routerQueryParamsSelector = createSelector(
    routerStateSelector,
    state => state.queryParams
);

export const campusIdSelector = createSelector(routerParamsSelector, state => state.campusId);

export const mapNodeBaseIdSelector = createSelector(routerParamsSelector, state => state.mapNodeId);

export const isInHomeTabSelector = createSelector(routerStateSelector, state =>
    `${state.url}`.match(/^\/app\/\d+\/home/)
);
