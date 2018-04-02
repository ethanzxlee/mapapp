import { createSelector } from '@ngrx/store';

import { campusReducerStateSelector } from '../reducers';

export const mapStylesStateSelector = createSelector(
    campusReducerStateSelector,
    state => state.mapStyles
);

export const mapStylesEntitiesSelector = createSelector(
    mapStylesStateSelector,
    state => state.entities
);

export const mapStylesSelector = createSelector(mapStylesEntitiesSelector, mapStylesEntities => {
    return Object.keys(mapStylesEntities).map(key => mapStylesEntities[key]);
});

export const mapStylesLoadingSelector = createSelector(
    mapStylesStateSelector,
    state => state.loading
);

export const mapStylesLoadingErrorSelector = createSelector(
    mapStylesStateSelector,
    state => state.loadingError
);

export const currentMapStyleSelector = createSelector(
    mapStylesStateSelector,
    state => state.current
);
