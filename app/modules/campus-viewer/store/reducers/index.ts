import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as campusReducer from './campuses.reducer';
import * as mapStyleReducer from './map-styles.reducer';

export interface CampusReducerState {
    campuses: campusReducer.CampusesState;
    mapStyles: mapStyleReducer.MapStylesState;
}

export const reducers: ActionReducerMap<CampusReducerState> = {
    campuses: campusReducer.campusesStateReducer,
    mapStyles: mapStyleReducer.mapStylesStateReducer
};

export const campusReducerStateSelector = createFeatureSelector<CampusReducerState>(
    'campusReducer'
);

export * from './campuses.reducer';
export * from './map-styles.reducer';
