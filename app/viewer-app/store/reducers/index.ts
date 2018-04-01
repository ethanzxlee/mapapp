import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import {
    RouterReducerState,
    routerReducer as ngrxRouterReducer,
} from '@ngrx/router-store';

import * as routerReducer from './router.reducer';
import * as mapboxReducer from './mapbox.reducer';
import * as settingReducer from './setting.reducer';

export interface RootState {
    routerReducer: RouterReducerState<routerReducer.RouterState>;
    mapboxReducer: mapboxReducer.MapboxReducerState;
    settingReducer: settingReducer.SettingReducerState;
}

export const reducers: ActionReducerMap<RootState> = {
    routerReducer: ngrxRouterReducer,
    mapboxReducer: mapboxReducer.reducer,
    settingReducer: settingReducer.reducer
};

export const routerReducerStateSelector = createFeatureSelector<
    RouterReducerState<routerReducer.RouterState>
>('routerReducer');

export const mapboxReducerStateSelector = createFeatureSelector<
    mapboxReducer.MapboxReducerState
>('mapboxReducer');

export const settingReducerStateSelector = createFeatureSelector<
    settingReducer.SettingReducerState
>('settingReducer');
