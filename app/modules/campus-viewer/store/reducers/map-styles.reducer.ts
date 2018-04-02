import { Style } from 'mapbox-gl';
import * as mapStyleAction from '../actions/map-styles.action';

export interface MapStylesState {
    entities: { [id: number]: Style };
    current: Style;
    loading: boolean;
    loadingError: any;
}

export const initialMapStylesState: MapStylesState = {
    entities: null,
    current: null,
    loading: false,
    loadingError: null
};

export function mapStylesStateReducer(
    state: MapStylesState = initialMapStylesState,
    action: mapStyleAction.MapStyleActions
): MapStylesState {
    switch (action.type) {
        case mapStyleAction.GET_MAP_STYLE: {
            return {
                ...state,
                loading: true
            };
        }

        case mapStyleAction.GET_MAP_STYLE_OK: {
            return {
                ...state,
                loading: false,
                entities: {
                    ...state.entities,
                    ...action.payload
                }
            };
        }

        case mapStyleAction.GET_MAP_STYLE_ERROR: {
            const loadingError = action.payload;
            return {
                ...state,
                loading: false,
                loadingError
            };
        }

        case mapStyleAction.SET_CURRENT_MAP_STYLE: {
            const current = action.payload;
            return {
                ...state,
                current
            };
        }
    }
    return state;
}
