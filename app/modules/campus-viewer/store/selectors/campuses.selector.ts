import { createSelector } from '@ngrx/store';
import { centroid, bbox } from '@turf/turf';

import { campusReducerStateSelector } from '../reducers';
import * as routerSelector from '@uow-map/viewer/store/selectors/router.selector';
import * as models from '@uow-map/models';

export const campusesStateSelector = createSelector(
    campusReducerStateSelector,
    state => state.campuses
);

export const campusesEntitiesSelector = createSelector(
    campusesStateSelector,
    state => state.entities
);

export const campusesSelector = createSelector(campusesEntitiesSelector, campusesEntities => {
    return Object.keys(campusesEntities).map(key => campusesEntities[key]);
});

export const campusesLoadedSelector = createSelector(campusesStateSelector, state => state.loaded);

export const campusesLoadingSelector = createSelector(
    campusesStateSelector,
    state => state.loading
);

export const currentCampusSelector = createSelector(
    routerSelector.campusIdSelector,
    campusesEntitiesSelector,
    (campusId, campuses): models.Campus => campuses[campusId]
);

export const currentCampusAreaSeletor = createSelector(
    currentCampusSelector,
    currentCampus => currentCampus.area
);

export const currentCampusBoundSelector = createSelector(currentCampusAreaSeletor, campusArea =>
    bbox(campusArea as any)
);

export const currentCampusCenterSelector = createSelector(
    currentCampusAreaSeletor,
    campusArea => centroid(campusArea as any).geometry.coordinates
);
